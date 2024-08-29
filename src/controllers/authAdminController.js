const { Account } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const register = async (req, res) => {
	try {
		const { name, email, password, retypePassword } = req.body;
		const existingAdmin = await Account.findOne({
			where: { email: email },
		});

		if (existingAdmin) {
			return res
				.code(400)
				.send({ message: "Admin with this email already exists" });
		}
		if (password !== retypePassword) {
			return res.code(400).send({ message: "Passwords do not match" });
		}

		const hashedPassword = await bcrypt.hash(password, 10);
		const admins = await Account.create({
			name,
			email,
			password: hashedPassword,
			role: "admin",
		});

		res.code(201).send({
			data: {
				id: admins.id,
				name: admins.name,
				email: admins.email,
				role: admins.role,
			},
		});
	} catch (error) {
		console.error(error);
		res.code(500).send({ message: "Internal Server Error" });
	}
};

const login = async (req, reply) => {
	try {
		const { email, password } = req.body;
		const admin = await Account.findOne({
			where: { email: email },
		});

		if (!admin) {
			return reply.code(401).send({ message: "Invalid credentials" });
		}

		const passwordMatch = await bcrypt.compare(password, admin.password);
		if (!passwordMatch) {
			return reply.code(401).send({ message: "Invalid credentials" });
		}

		const token = jwt.sign(
			{
				adminId: admin.id,
				adminname: admin.adminname,
				email: admin.email,
				role: admin.role,
			},
			process.env.JWT_KEY,
			{ expiresIn: "12h" }
		);

		const role = "admin";
		reply.setCookie("tokenAdmin", token, { httpOnly: true });
		reply.setCookie("role", role);
		reply.code(200).send({ token });
	} catch (error) {
		console.error(error);
		reply.code(500).send({ message: "Internal Server Error" });
	}
};

const logout = async (req, res) => {
	try {
		res.clearCookie("tokenAdmin", { httpOnly: true });
		res.clearCookie("role");
		res.code(200).send({ message: "Logout successful" });
	} catch (error) {
		console.error(error);
		res.code(500).send({ message: "Internal Server Error" });
	}
};

module.exports = {
	login,
	logout,
	register,
};
