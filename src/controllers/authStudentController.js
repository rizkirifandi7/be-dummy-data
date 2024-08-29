const { Account, Student } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const register = async (req, res) => {
	try {
		const {
			nim,
			name,
			institution,
			major,
			start_periode,
			end_periode,
			email,
			password,
			retypePassword,
		} = req.body;

		if (await Account.findOne({ where: { email } })) {
			return res
				.code(400)
				.send({ message: "User with this email already exists" });
		}
		if (password !== retypePassword) {
			return res.code(400).send({ message: "Passwords do not match" });
		}

		const hashedPassword = await bcrypt.hash(password, 10);
		const user = await Account.create({
			name,
			email,
			password: hashedPassword,
			role: "student",
		});
		const studentDetails = await Student.create({
			id_account: user.id,
			nim,
			institution,
			major,
			start_periode,
			end_periode,
			status: "active",
		});

		user.dataValues.studentDetails = studentDetails;
		res
			.code(201)
			.send({
				data: { user },
				message: "Student account has been created successfully",
			});
	} catch (error) {
		console.error(error);
		res.code(500).send({ message: "Internal Server Error" });
	}
};

const login = async (req, res) => {
	try {
		const { email, password } = req.body;
		const user = await Account.findOne({ where: { email } });

		if (!user || !(await bcrypt.compare(password, user.password))) {
			return res.code(401).send({ message: "Invalid credentials" });
		}

		const token = jwt.sign(
			{ studentId: user.id, name: user.name, email: user.email },
			process.env.JWT_KEY,
			{ expiresIn: "12h" }
		);
		res.cookie("tokenStudent", token).code(200).send({ token });
	} catch (error) {
		console.error(error);
		res.code(500).send({ message: "Internal Server Error" });
	}
};

const logout = async (req, res) => {
	try {
		res
			.clearCookie("tokenStudent", { httpOnly: true })
			.code(200)
			.send({ message: "Logout successful" });
	} catch (error) {
		console.error(error);
		res.code(500).send({ message: "Internal Server Error" });
	}
};

module.exports = { register, login, logout };
