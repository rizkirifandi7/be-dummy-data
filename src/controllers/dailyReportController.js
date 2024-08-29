const { DailyReport } = require("../models");
    
const getAllDailyReports = async (request, reply) => {
	try {
		const dailyReports = await DailyReport.findAll();
		const data = {
			data: dailyReports,
			message: "Successfully get all daily reports",
		};
		return reply.send(data).code(200);
	} catch (error) {
		return reply.send(error).code(500);
	}
};

const getDailyReportById = async (request, reply) => {
	try {
		const { id } = request.params;
		const dailyReport = await DailyReport.findByPk(id);
		if (!dailyReport) {
			return reply.send({ message: "Daily report not found" }).code(404);
		}
		const data = {
			data: dailyReport,
			message: "Successfully get daily report by id",
		};
		return reply.send(data).code(200);
	} catch (error) {
		return reply.send(error).code(500);
	}
};

const createDailyReport = async (request, reply) => {
	try {
		const {
			id_student,
			title,
			description,
			time_submitted,
			report_status,
			feedback,
			url,
			score,
		} = request.body;
		const dailyReport = await DailyReport.create({
			id_student,
			title,
			description,
			time_submitted,
			report_status,
			feedback,
			url,
			score,
		});

		const data = {
			data: dailyReport,
			message: "Successfully create daily report",
		};
		return reply.send(data).code(201);
	} catch (error) {
		return reply.send(error).code(500);
	}
};

const updateDailyReport = async (request, reply) => {
	try {
		const { id } = request.params;
		const {
			id_student,
			title,
			description,
			time_submitted,
			report_status,
			feedback,
			url,
			score,
		} = request.body;
		const dailyReport = await DailyReport.findByPk(id);
		if (!dailyReport) {
			return reply.send({ message: "Daily report not found" }).code(404);
		}
		dailyReport.id_student = id_student;
		dailyReport.title = title;
		dailyReport.description = description;
		dailyReport.time_submitted = time_submitted;
		dailyReport.report_status = report_status;
		dailyReport.feedback = feedback;
		dailyReport.url = url;
		dailyReport.score = score;
		await dailyReport.save();
		const data = {
			data: dailyReport,
			message: "Successfully update daily report",
		};
		return reply.send(data).code(200);
	} catch (error) {
		return reply.send(error).code(500);
	}
};

const deleteDailyReport = async (request, reply) => {
	try {
		const { id } = request.params;
		const dailyReport = await DailyReport.findByPk(id);
		if (!dailyReport) {
			return reply.send({ message: "Daily report not found" }).code(404);
		}
		await dailyReport.destroy();
		const data = {
			data: dailyReport,
			message: "Successfully delete daily report",
		};
		return reply.send(data).code(200);
	} catch (error) {
		return reply.send(error).code(500);
	}
};

module.exports = {
	getAllDailyReports,
	getDailyReportById,
	createDailyReport,
	updateDailyReport,
	deleteDailyReport,
};
