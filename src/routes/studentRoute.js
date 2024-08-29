const {
	getAllStudents,
	getStudentById,
	createStudent,
	updateStudent,
	deleteStudent,
	getToken,
} = require("../controllers/studentController");
const { isAdmin } = require("../middleware/verifyToken");

const studentRoute = async (fastify, options) => {
	fastify.get("/token", { preHandler: isAdmin }, getToken);
	fastify.get("/students", { preHandler: isAdmin }, getAllStudents);
	fastify.get("/students/:id", getStudentById);
	fastify.post("/students", createStudent);
	fastify.put("/students/:id", updateStudent);
	fastify.delete("/students/:id", deleteStudent);
};

module.exports = studentRoute;
