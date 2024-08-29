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

		// Check if user with the provided email already exists
		const existingUser = await Account.findOne({
			where: { email: email },
		});

		if (existingUser) {
			return res
				.code(400)
				.send({ message: "User with this email already exists" });
		}
		if (password !== retypePassword) {
			return res.code(400).send({ message: "Passwords do not match" });
		}

		// Hash the password
		const hashedPassword = await bcrypt.hash(password, 10);

		// Create a new user
		const users = await Account.create({
			name,
			email,
			password: hashedPassword,
			role: "student",
		});

		const usersStudent = await Student.create({
			id_account: users.id,
			nim,
			institution,
			major,
			start_periode,
			end_periode,
			status: "active",
		});

		// Combine usersStudent into users
		users.dataValues.studentDetails = usersStudent;

		res.code(201).send({
			data: {
				users,
			},
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

		// Cari pengguna berdasarkan alamat email
		const student = await Account.findOne({ where: { email: email } });

		// Jika pengguna tidak ditemukan
		if (!student) {
			return res.code(401).send({ message: "Invalid credentials" });
		}

		// Bandingkan kata sandi yang dimasukkan dengan yang disimpan dalam basis data
		const passwordMatch = await bcrypt.compare(password, student.password);

		// Jika kata sandi tidak sesuai
		if (!passwordMatch) {
			return res.code(401).send({ message: "Invalid credentials" });
		}

		// Generate token JWT
		const token = jwt.sign(
			{
				studentId: student.id,
				name: student.name,
				email: student.email,
			},
			process.env.JWT_KEY,
			{ expiresIn: "24h" }
		);

		res.cookie("tokenStudent", token);
		// Kirim respons dengan token
		res.code(200).send({ token });
	} catch (error) {
		console.error(error);
		res.code(500).send({ message: "Internal Server Error" });
	}
};

const logout = async (req, res) => {
	try {
		// Clear the 'token' cookie
		res.clearCookie("tokenStudent", { httpOnly: true });
		res.code(200).send({ message: "Logout successful" });
	} catch (error) {
		console.error(error);
		res.code(500).send({ message: "Internal Server Error" });
	}
};

module.exports = {
	register,
	login,
	logout,
};
