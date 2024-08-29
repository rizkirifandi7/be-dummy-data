const { FinalReport } = require("../models");

const getAllFinalReports = async (request, reply) => {
	try {
		const finalReports = await FinalReport.findAll();
		const data = {
			data: finalReports,
			message: "Successfully get all final reports",
		};
		return reply.send(data).code(200);
	} catch (error) {
		return reply.send(error).code(500);
	}
};

const getFinalReportById = async (request, reply) => {
	try {
		const { id } = request.params;
		const finalReport = await FinalReport.findByPk(id);
		if (!finalReport) {
			return reply.send({ message: "Final report not found" }).code(404);
		}
		const data = {
			data: finalReport,
			message: "Successfully get final report by id",
		};
		return reply.send(data).code(200);
	} catch (error) {
		return reply.send(error).code(500);
	}
};

const createFinalReport = async (request, reply) => {
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
		const finalReport = await FinalReport.create({
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
			data: finalReport,
			message: "Successfully create final report",
		};
		return reply.send(data).code(201);
	} catch (error) {
		return reply.send(error).code(500);
	}
};

const updateFinalReport = async (request, reply) => {
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
		const finalReport = await FinalReport.findByPk(id);
		if (!finalReport) {
			return reply.send({ message: "Final report not found" }).code(404);
		}
		finalReport.id_student = id_student;
		finalReport.title = title;
		finalReport.description = description;
		finalReport.time_submitted = time_submitted;
		finalReport.report_status = report_status;
		finalReport.feedback = feedback;
		finalReport.url = url;
		finalReport.score = score;
		await finalReport.save();
		const data = {
			data: finalReport,
			message: "Successfully update final report",
		};
		return reply.send(data).code(200);
	} catch (error) {
		return reply.send(error).code(500);
	}
};

const deleteFinalReport = async (request, reply) => {
	try {
		const { id } = request.params;
		const finalReport = await FinalReport.findByPk(id);
		if (!finalReport) {
			return reply.send({ message: "Final report not found" }).code(404);
		}
		await finalReport.destroy();
		const data = {
			data: finalReport,
			message: "Successfully delete final report",
		};
		return reply.send(data).code(200);
	} catch (error) {
		return reply.send(error).code(500);
	}
};

module.exports = {
	getAllFinalReports,
	getFinalReportById,
	createFinalReport,
	updateFinalReport,
	deleteFinalReport,
};
