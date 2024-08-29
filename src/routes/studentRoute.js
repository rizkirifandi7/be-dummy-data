const {
	getAllStudents,
	getStudentById,
	createStudent,
	updateStudent,
	deleteStudent,
} = require("../controllers/studentController");

const studentRoute = async (fastify, options) => {
	fastify.get("/students", getAllStudents);
	fastify.get("/students/:id", getStudentById);
	fastify.post("/students", createStudent);
	fastify.put("/students/:id", updateStudent);
	fastify.delete("/students/:id", deleteStudent);
};

module.exports = studentRoute;
