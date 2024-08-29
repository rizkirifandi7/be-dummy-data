const dailyReportController = require("../controllers/dailyReportController");

async function dailyReportRoutes(fastify, options){
    fastify.get("/dailyreport", dailyReportController.getAllDailyReport);
    fastify.get("/dailyreport/:id", dailyReportController.getDailyReportById);
    fastify.get("/dailyreport/student/:id", dailyReportController.getDailyReportByStudentId);
    fastify.post("/dailyreport", dailyReportController.createDailyReport);
    fastify.put("/dailyreport/:id", dailyReportController.updateDailyReport);
    fastify.delete("/dailyreport/:id", dailyReportController.deleteDailyReport);
    fastify.post("/dailyreport/student/", dailyReportController.createDailyReportByStudentId);
    fastify.put("/dailyreport/student/:id", dailyReportController.updateDailyReportByStudentId);
    fastify.delete("/dailyreport/student/:id", dailyReportController.deleteDailyReportByStudentId);
}

module.exports = dailyReportRoutes;