const options = {
	openapi: {
		openapi: "3.0.0",
		info: {
			title: "Web Laporan API Documentation",
			description: "Testing the Fastify swagger API",
			version: "0.1.0",
		},
		servers: [
			{
				url: "http://localhost:3000",
				description: "Development server",
			},
		],
	},
};

module.exports = options;
