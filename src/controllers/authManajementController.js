const { Account } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const register = async (req, res) => {
	try {
		const { username, email, password, retypePassword } = req.body;
		const existingManajement = await Account.findOne({
			where: { email: email },
		});

		if (existingManajement) {
			return res
				.code(400)
				.send({ message: "Manajement with this email already exists" });
		}
		if (password !== retypePassword) {
			return res.code(400).send({ message: "Passwords do not match" });
		}

		const hashedPassword = await bcrypt.hash(password, 10);
		const manajements = await Account.create({
			username,
			email,
			password: hashedPassword,
			role: "manajement",
		});

		res.code(201).send({
			data: {
				id: manajements.id,
				username: manajements.username,
				email: manajements.email,
				role: manajements.role,
			},
		});
	} catch (error) {
		console.error(error);
		res.code(500).send({ message: "Internal Server Error" });
	}
};

const login = async (req, res) => {
	try {
		const { email, password } = req.body;
		const manajement = await Account.findOne({
			where: { email: email },
		});

		if (!manajement) {
			return res.code(401).send({ message: "Invalid credentials" });
		}
		const passwordMatch = await bcrypt.compare(password, manajement.password);
		if (!passwordMatch) {
			return res.code(401).send({ message: "Invalid credentials" });
		}

		const token = jwt.sign(
			{
				manajementId: manajement.id,
				username: manajement.username,
				email: manajement.email,
				role: manajement.role,
			},
			process.env.JWT_KEY,
			{ expiresIn: "12h" }
		);
		const role = "manajement";
		res.cookie("tokenManajement", token, { httpOnly: true });
		res.cookie("role", role);
		res.code(200).send({ token });
	} catch (error) {
		console.error(error);
		res.code(500).send({ message: "Internal Server Error" });
	}
};

const logout = async (req, res) => {
	try {
		res.clearCookie("tokenManajement", { httpOnly: true });
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
