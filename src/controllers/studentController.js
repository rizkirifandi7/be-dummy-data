const { Student, DailyReport } = require("../models");

const getAllStudent = async (req, reply) => {
	try {
		const student = await Student.findAll({
			include: {
				model: DailyReport,
				as: "daily_reports",
				attributes: ["id_student", "description", "time_submitted"],
			},
		});
		reply.code(200).send({
			data: student,
		});
	} catch (error) {
		reply.code(500).send({
			message: error.message,
		});
	}
};

const getStudentById = async (req, reply) => {
	try {
		const student = await Student.findByPk(req.params.id);
		reply.code(200).send({
			data: student,
		});
	} catch (error) {
		reply.code(500).send({
			message: error.message,
		});
	}
}

const createStudent = async (req, reply) => {
	try {
		const student = await Student.create(req.body);
		reply.code(201).send({
			data: student,
		});
	} catch (error) {
		reply.code(500).send({
			message: error.message,
		});
	}
}

const updateStudent = async (req, reply) => {
	try {
		const student = await Student.update(req.body, {
			where: {
				id: req.params.id,
			},
		});
		reply.code(200).send({
			data: student,
		});
	} catch (error) {
		reply.code(500).send({
			message: error.message,
		});
	}
}

const deleteStudent = async (req, reply) => {
	try {
		const student = await Student.destroy({
			where: {
				id: req.params.id,
			},
		});
		reply.code(200).send({
			data: student,
		});
	} catch (error) {
		reply.code(500).send({
			message: error.message,
		});
	}
}

module.exports = {
	getAllStudent,
	getStudentById,
	createStudent,
	updateStudent,
	deleteStudent,
};
