const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const isAdmin = async (request, reply) => {
	const token = request.cookies.tokenAdmin;
	console.log("ini tokenya", token);
	try {
		if (!token) {
			return reply.code(401).send({ message: "Unauthorized" });
		}

		const admin = jwt.verify(token, process.env.JWT_KEY);
		request.admin = admin;
	} catch (err) {
		reply.clearCookie("tokenAdmin", { httpOnly: true });
		return reply.code(403).send({ message: "Forbidden" });
	}
};

const isStudent = (req, res, next) => {
	const token = req.cookies.tokenStudent;
	try {
		if (!token) {
			return res.code(401).send({ message: "Unauthorized" });
		}

		const tokens = token.split(" ")[1];
		const student = jwt.verify(tokens, process.env.JWT_KEY);
		req.student = student;
		next();
	} catch (err) {
		res.clearCookie("tokenStudent", { httpOnly: true });
		res.code(403).send({ message: "Forbidden" });
	}
};

const isManajement = (req, res, next) => {
	const token = req.cookies.tokenManajement;
	try {
		if (!token) {
			return res.code(401).send({ message: "Unauthorized" });
		}

		const tokens = token.split(" ")[1];
		const manajement = jwt.verify(tokens, process.env.JWT_KEY);
		req.manajement = manajement;
		next();
	} catch (err) {
		res.clearCookie("tokenManajement;", { httpOnly: true });
		res.code(403).send({ message: "Forbidden" });
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

		res.code(401).send({ message: "Unauthorized" });
	} catch (err) {
		res.code(403).send({ message: "Forbidden" });
	}
};

module.exports = { isAdmin, isStudent, isManajement, verifyUserType };
