const Fastify = require("fastify");
const Cors = require("@fastify/cors");
const Cookie = require("@fastify/cookie");
const Swagger = require("@fastify/swagger");
const SwaggerUI = require("@fastify/swagger-ui");
const SwaggerOptions = require("./src/utils/swaggerConfig");
const jwtPlugin = require("./src/plugins/jwtPlugin");
const routes = require("./src/routes");
const Dotenv = require("dotenv");
Dotenv.config();
const Port = process.env.PORT || 8000;

const accountRoute = require("./src/routes/accountRoute");
const studentRoute = require("./src/routes/studentRoute");
const finalReportRoute = require("./src/routes/finalReportRoute");
const dailyReportRoute = require("./src/routes/dailyReportRoute");
const authStudentRoute = require("./src/routes/authStudentRoute");
const authAdminRoute = require("./src/routes/authAdminRoute");
const authManajementRoute = require("./src/routes/authManajementRoute");

// Create a Fastify instance
const app = Fastify({
	logger: {
		level: "info",
		file: "./src/logger/log.txt",
	},
});

// Register the CORS plugin
app.register(Cors, {
	origin: "*",
	methods: ["GET", "PUT", "POST", "DELETE"],
	allowedHeaders: ["Content-Type", "Authorization"],
	credentials: true,
});

app.register(Cookie, {
	secret: process.env.COOKIE_SECRET,
});

// Register the Swagger plugin
app.register(Swagger, SwaggerOptions);
app.register(SwaggerUI);

app.register(accountRoute, { prefix: "/api" });
app.register(studentRoute, { prefix: "/api" });
app.register(finalReportRoute, { prefix: "/api" });
app.register(dailyReportRoute, { prefix: "/api" });
app.register(authStudentRoute, { prefix: "/api" });
app.register(authAdminRoute, { prefix: "/api" });
app.register(authManajementRoute, { prefix: "/api" });

// Start the server
app.listen({ port: Port }, function (err, address) {
	if (err) {
		app.log.error(err);
		process.exit(1);
	}
	app.log.info(`server listening on ${address}`);
});
