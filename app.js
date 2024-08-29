const Fastify = require("fastify");
const Cors = require("@fastify/cors");
const Cookie = require("@fastify/cookie");
const dotenv = require("dotenv");
dotenv.config();

const Port = process.env.PORT || 3000;

// Create a Fastify instance
const app = Fastify({ logger: true });

// Register the CORS plugin
app.register(Cors, {
	origin: "*",
	methods: ["GET", "PUT", "POST", "DELETE"],
	allowedHeaders: ["Content-Type", "Authorization"],
	credentials: true,
});

// Register the Cookie plugin
app.register(Cookie);

// Define a route
app.get("/", async (request, reply) => {
	return { hello: "world" };
});

// Register the mahasiswa route
app.register(require("./src/routes/studentRoute"), { prefix: "/api" });

// Register the dailyReport route
app.register(require("./src/routes/dailyReportRoute"), { prefix: "/api" });

// Start the server
app.listen({ port: Port }, function (err, address) {
	if (err) {
		app.log.error(err);
		process.exit(1);
	}
	app.log.info(`server listening on ${address}`);
});
