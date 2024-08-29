const { DailyReport, Student } = require("../models");

const getAllDailyReport = async (req, reply) => {
	try {
		const dailyReport = await DailyReport.findAll({
			include: {
				model: Student,
				as: "student",
				attributes: [
					"id_account",
					"nim",
					"job_title",
					"major",
					"institution",
					"laboratory",
					"status",
					"start_periode",
					"end_periode",
				],
			},
		});
		reply.code(200).send({
			data: dailyReport,
		});
	} catch (error) {
		reply.code(500).send({
			message: error.message,
		});
	}
};

const getDailyReportById = async (req, reply) => {
	try {
		const dailyReport = await DailyReport.findByPk(req.params.id, {
			include: {
				model: Student,
				as: "student",
				attributes: [
					"id_account",
					"nim",
					"job_title",
					"major",
					"institution",
					"laboratory",
					"status",
					"start_periode",
					"end_periode",
				],
			},
		});
		reply.code(200).send({
			data: dailyReport,
		});
	} catch (error) {
		reply.code(500).send({
			message: error.message,
		});
	}
};

const createDailyReport = async (req, reply) => {
	try {
		const dailyReport = await DailyReport.create({
			...req.body,
			id_account: Student.id,
		});
		reply.code(201).send({
			data: dailyReport,
		});
	} catch (error) {
		reply.code(500).send({
			message: error.message,
		});
	}
};

const updateDailyReport = async (req, reply) => {
	try {
		const dailyReport = await DailyReport.update(req.body, {
			where: {
				id: req.params.id,
			},
		});
		reply.code(200).send({
			data: dailyReport,
		});
	} catch (error) {
		reply.code(500).send({
			message: error.message,
		});
	}
};

const deleteDailyReport = async (req, reply) => {
	try {
		const dailyReport = await DailyReport.destroy({
			where: {
				id: req.params.id,
			},
		});
		reply.code(200).send({
			data: dailyReport,
		});
	} catch (error) {
		reply.code(500).send({
			message: error.message,
		});
	}
};

const getDailyReportByStudentId = async (req, reply) => {
	try {
		const dailyReport = await DailyReport.findAll({
			where: {
				id_student: req.params.id,
			},
			include: {
				model: Student,
				as: "student",
				attributes: [
					"id_account",
					"nim",
					"job_title",
					"major",
					"institution",
					"laboratory",
					"status",
					"start_periode",
					"end_periode",
				],
			},
		});
		reply.code(200).send({
			data: dailyReport,
		});
	} catch (error) {
		reply.code(500).send({
			message: error.message,
		});
	}
};

const createDailyReportByStudentId = async (req, reply) => {
	try {
		const dailyReport = await DailyReport.create({
			...req.body,
		});
		reply.code(201).send({
			data: dailyReport,
		});
	} catch (error) {
		reply.code(500).send({
			message: error.message,
		});
	}
};

const updateDailyReportByStudentId = async (req, reply) => {
	try {
		const dailyReport = await DailyReport.update(req.body, {
			where: {
				id_student: req.params.id,
			},
		});
		reply.code(200).send({
			data: dailyReport,
		});
	} catch (error) {
		reply.code(500).send({
			message: error.message,
		});
	}
};

const deleteDailyReportByStudentId = async (req, reply) => {
	try {
		const dailyReport = await DailyReport.destroy({
			where: {
				id_student: req.params.id,
			},
		});
		reply.code(200).send({
			data: dailyReport,
		});
	} catch (error) {
		reply.code(500).send({
			message: error.message,
		});
	}
};

module.exports = {
	getAllDailyReport,
	getDailyReportById,
	createDailyReport,
	updateDailyReport,
	deleteDailyReport,
	getDailyReportByStudentId,
	createDailyReportByStudentId,
	updateDailyReportByStudentId,
	deleteDailyReportByStudentId,
};
