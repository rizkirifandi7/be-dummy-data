const {
	getAllDailyReports,
	getDailyReportById,
	createDailyReport,
	updateDailyReport,
	deleteDailyReport,
} = require("../controllers/dailyReportController");

const dailyReportRoute = async (fastify, options) => {
	fastify.get("/dailyreports", getAllDailyReports);
	fastify.get("/dailyreports/:id", getDailyReportById);
	fastify.post("/dailyreports", createDailyReport);
	fastify.put("/dailyreports/:id", updateDailyReport);
	fastify.delete("/dailyreports/:id", deleteDailyReport);
};

module.exports = dailyReportRoute;
