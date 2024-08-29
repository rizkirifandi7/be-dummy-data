const {
	getAllAccounts,
	getAccountById,
	createAccount,
	updateAccount,
	deleteAccount,
} = require("../controllers/accountController");

const accountRoute = async (fastify, options) => {
	fastify.get(
		"/accounts",
		{
			schema: {
				description: "Get all accounts",
				tags: ["Account"],
				response: {
					200: {
						type: "object",
						properties: {
							data: {
								type: "array",
								items: {
									type: "object",
									properties: {
										id: { type: "number" },
										name: { type: "string" },
										email: { type: "string" },
										password: { type: "string" },
										role: { type: "string" },
										createdAt: { type: "string" },
										updatedAt: { type: "string" },
									},
								},
							},
							message: { type: "string" },
						},
					},
				},
			},
		},
		getAllAccounts
	);
	fastify.get(
		"/accounts/:id",
		{
			schema: {
				description: "Get account by id",
				tags: ["Account"],
				params: {
					type: "object",
					properties: {
						id: { type: "number" },
					},
				},
				response: {
					200: {
						type: "object",
						properties: {
							data: {
								type: "object",
								properties: {
									id: { type: "number" },
									name: { type: "string" },
									email: { type: "string" },
									password: { type: "string" },
									role: { type: "string" },
									createdAt: { type: "string" },
									updatedAt: { type: "string" },
								},
							},
							message: { type: "string" },
						},
					},
				},
			},
		},
		getAccountById
	);
	fastify.post(
		"/accounts",
		{
			schema: {
				description: "Create account",
				tags: ["Account"],
				body: {
					type: "object",
					required: ["name", "email", "password", "role"],
					properties: {
						name: { type: "string" },
						email: { type: "string" },
						password: { type: "string" },
						role: { type: "string", enum: ["admin", "student", "manajement"] },
					},
				},
				response: {
					201: {
						type: "object",
						properties: {
							data: {
								type: "object",
								properties: {
									id: { type: "number" },
									name: { type: "string" },
									email: { type: "string" },
									password: { type: "string" },
									role: { type: "string" },
									createdAt: { type: "string" },
									updatedAt: { type: "string" },
								},
							},
							message: { type: "string" },
						},
					},
				},
			},
		},
		createAccount
	);
	fastify.put(
		"/accounts/:id",
		{
			schema: {
				description: "Update account",
				tags: ["Account"],
				params: {
					type: "object",
					properties: {
						id: { type: "number" },
					},
				},
				body: {
					type: "object",
					required: ["name", "email", "password", "role"],
					properties: {
						name: { type: "string" },
						email: { type: "string" },
						password: { type: "string" },
						role: { type: "string", enum: ["admin", "student", "manajement"] },
					},
				},
				response: {
					200: {
						type: "object",
						properties: {
							data: {
								type: "object",
								properties: {
									id: { type: "number" },
									name: { type: "string" },
									email: { type: "string" },
									password: { type: "string" },
									role: { type: "string" },
									createdAt: { type: "string" },
									updatedAt: { type: "string" },
								},
							},
							message: { type: "string" },
						},
					},
				},
			},
		},
		updateAccount
	);
	fastify.delete(
		"/accounts/:id",
		{
			schema: {
				description: "Delete account",
				tags: ["Account"],
				params: {
					type: "object",
					properties: {
						id: { type: "number" },
					},
				},
				response: {
					200: {
						type: "object",
						properties: {
							message: { type: "string" },
						},
					},
				},
			},
		},
		deleteAccount
	);
};

module.exports = accountRoute;
