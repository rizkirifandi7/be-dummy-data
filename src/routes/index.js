const accountRoute = require("./accountRoute");
const finalReportRoute = require("./finalReportRoute");
const studentRoute = require("./studentRoute");
const dailyReportRoute = require("./dailyReportRoute");
const authStudentRoute = require("./authStudentRoute");
const authAdminRoute = require("./authAdminRoute");
const authManajementRoute = require("./authManajementRoute");

const routes = async (fastify, options) => {
	fastify.register(accountRoute);
	fastify.register(studentRoute);
	fastify.register(finalReportRoute);
	fastify.register(dailyReportRoute);
	fastify.register(authStudentRoute);
	fastify.register(authAdminRoute);
	fastify.register(authManajementRoute);
};

module.exports = routes;
