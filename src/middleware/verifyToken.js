const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const isAdmin = (req, res, next) => {
	const token = req.cookies.tokenAdmin;
	try {
		if (!token) {
			return res.status(401).json({ message: "Unauthorized" });
		}

		const admin = jwt.verify(token, process.env.JWT_KEY);
		req.admin = admin;
		next();
	} catch (err) {
		res.clearCookie("tokenAdmin", { httpOnly: true });
		res.status(403).json({ message: "Forbidden" });
	}
};

const isStudent = (req, res, next) => {
	const token = req.cookies.tokenStudent;
	try {
		if (!token) {
			return res.status(401).json({ message: "Unauthorized" });
		}

		const student = jwt.verify(token, process.env.JWT_KEY);
		req.student = student;
		next();
	} catch (err) {
		res.clearCookie("tokenStudent", { httpOnly: true });
		res.status(403).json({ message: "Forbidden" });
	}
};

const isManajement = (req, res, next) => {
	const token = req.cookies.tokenManajement;
	try {
		if (!token) {
			return res.status(401).json({ message: "Unauthorized" });
		}

		const manajement = jwt.verify(token, process.env.JWT_KEY);
		req.manajement = manajement;
		next();
	} catch (err) {
		res.clearCookie("tokenManajement;", { httpOnly: true });
		res.status(403).json({ message: "Forbidden" });
	}
};

const verifyUserType = (req, res, next) => {
	const tokenAdmin = req.cookies.tokenAdmin;
	const tokenCustomer = req.cookies.tokenCustomer;

	try {
		if (tokenAdmin) {
			jwt.verify(tokenAdmin, process.env.JWT_KEY);
			return next();
		}

		if (tokenCustomer) {
			jwt.verify(tokenCustomer, process.env.JWT_KEY);
			return next();
		}

		if (tokenManajement) {
			jwt.verify(tokenManajement, process.env.JWT_KEY);
		}

		res.status(401).json({ message: "Unauthorized" });
	} catch (err) {
		res.status(403).json({ message: "Forbidden" });
	}
};

module.exports = { isAdmin, isStudent, isManajement, verifyUserType };
