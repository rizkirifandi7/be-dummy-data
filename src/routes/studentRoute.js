const studentController= require("../controllers/studentController");

async function studentRoutes(fastify, options){
	fastify.get("/student", studentController.getAllStudent);
	fastify.get("/student/:id", studentController.getStudentById);
	fastify.post("/student", studentController.createStudent);
	fastify.put("/student/:id", studentController.updateStudent);
	fastify.delete("/student/:id", studentController.deleteStudent);
};

module.exports = studentRoutes;
