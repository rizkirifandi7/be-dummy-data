const Fastify = require("fastify");
const Cors = require("@fastify/cors");
const Cookie = require("@fastify/cookie");
const Swagger = require("@fastify/swagger");
const SwaggerUI = require("@fastify/swagger-ui");
const SwaggerOptions = require("./src/utils/swaggerConfig");
const routes = require("./src/routes");
const Dotenv = require("dotenv");
Dotenv.config();
const Port = process.env.PORT || 8000;

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

// Register the Cookie plugin
app.register(Cookie);

// Register the Swagger plugin
app.register(Swagger, SwaggerOptions);
app.register(SwaggerUI);

// Register the routes
app.register(routes, { prefix: "/api" });

// Start the server
app.listen({ port: Port }, function (err, address) {
	if (err) {
		app.log.error(err);
		process.exit(1);
	}
	app.log.info(`server listening on ${address}`);
});
