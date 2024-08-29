const {
	register,
	login,
	logout,
} = require("../controllers/authStudentController");

const { isStudent } = require("../middleware/verifyToken");

const authStudentRoute = async (fastify, options) => {
	fastify.post("/student/register", register);
	fastify.post("/student/login", login);
	fastify.post("/student/logout", {
		preHandler: isStudent,
		handler: logout,
	});
};

module.exports = authStudentRoute;
