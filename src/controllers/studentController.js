const { Student } = require("../models");

const getAllStudents = async (request, reply) => {
	try {
		const students = await Student.findAll();
		const data = {
			data: students,
			message: "Successfully get all students",
		};
		return reply.send(data).code(200);
	} catch (error) {
		return reply.send(error).code(500);
	}
};

const getStudentById = async (request, reply) => {
	try {
		const { id } = request.params;
		const student = await Student.findByPk(id);
		if (!student) {
			return reply.send({ message: "Student not found" }).code(404);
		}
		const data = {
			data: student,
			message: "Successfully get student by id",
		};
		return reply.send(data).code(200);
	} catch (error) {
		return reply.send(error).code(500);
	}
};

const createStudent = async (request, reply) => {
	try {
		const { name, email, password, role } = request.body;
		const checkEmail = await Student.findOne({ where: { email } });
		if (checkEmail) {
			return reply.send({ message: "Email already exists" }).code(400);
		}
		const student = await Student.create({ name, email, password, role });
		const data = {
			data: student,
			message: "Successfully create student",
		};
		return reply.send(data).code(201);
	} catch (error) {
		return reply.send(error).code(500);
	}
};

const updateStudent = async (request, reply) => {
	try {
		const { id } = request.params;
		const { name, email, password, role } = request.body;
		const student = await Student.findByPk(id);
		if (!student) {
			return reply.send({ message: "Student not found" }).code(404);
		}
		student.name = name;
		student.email = email;
		student.password = password;
		student.role = role;
		await student.save();
		const data = {
			data: student,
			message: "Successfully update student",
		};
		return reply.send(data).code(200);
	} catch (error) {
		return reply.send(error).code(500);
	}
};

const deleteStudent = async (request, reply) => {
	try {
		const { id } = request.params;
		const student = await Student.findByPk(id);
		if (!student) {
			return reply.send({ message: "Student not found" }).code(404);
		}
		await student.destroy();
		const data = {
			data: student,
			message: "Successfully delete student",
		};
		return reply.send(data).code(200);
	} catch (error) {
		return reply.send(error).code(500);
	}
};

module.exports = {
	getAllStudents,
	getStudentById,
	createStudent,
	updateStudent,
	deleteStudent,
};
