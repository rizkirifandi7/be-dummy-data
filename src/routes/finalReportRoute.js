const {
	getAllFinalReports,
	getFinalReportById,
	createFinalReport,
	updateFinalReport,
	deleteFinalReport,
} = require("../controllers/finalReportController");

const finalReportRoute = async (fastify, options) => {
	fastify.get(
		"/finalreport",
		{
			schema: {
				description: "Get all final reports",
				tags: ["Final Report"],
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
										id_student: { type: "number" },
										title: { type: "string" },
										description: { type: "string" },
										time_submitted: { type: "string" },
										report_status: { type: "string" },
										feedback: { type: "string" },
										url: { type: "string" },
										score: { type: "number" },
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
		getAllFinalReports
	);
	fastify.get(
		"/finalreport/:id",
		{
			schema: {
				description: "Get final report by id",
				tags: ["Final Report"],
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
									id_student: { type: "number" },
									title: { type: "string" },
									description: { type: "string" },
									time_submitted: { type: "string" },
									report_status: { type: "string" },
									feedback: { type: "string" },
									url: { type: "string" },
									score: { type: "number" },
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
		getFinalReportById
	);
	fastify.post(
		"/finalreport",
		{
			schema: {
				description: "Create final report",
				tags: ["Final Report"],
				body: {
					type: "object",
					required: [
						"id_student",
						"title",
						"description",
						"time_submitted",
						"report_status",
						"feedback",
						"url",
						"score",
					],
					properties: {
						id_student: { type: "number" },
						title: { type: "string" },
						description: { type: "string" },
						time_submitted: { type: "string" },
						report_status: { type: "string" },
						feedback: { type: "string" },
						url: { type: "string" },
						score: { type: "number" },
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
									id_student: { type: "number" },
									title: { type: "string" },
									description: { type: "string" },
									time_submitted: { type: "string" },
									report_status: { type: "string" },
									feedback: { type: "string" },
									url: { type: "string" },
									score: { type: "number" },
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
		createFinalReport
	);
	fastify.put(
		"/finalreport/:id",
		{
			schema: {
				description: "Update final report",
				tags: ["Final Report"],
				params: {
					type: "object",
					properties: {
						id: { type: "number" },
					},
				},
				body: {
					type: "object",
					required: [
						"id_student",
						"title",
						"description",
						"time_submitted",
						"report_status",
						"feedback",
						"url",
						"score",
					],
					properties: {
						id_student: { type: "number" },
						title: { type: "string" },
						description: { type: "string" },
						time_submitted: { type: "string" },
						report_status: { type: "string" },
						feedback: { type: "string" },
						url: { type: "string" },
						score: { type: "number" },
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
									id_student: { type: "number" },
									title: { type: "string" },
									description: { type: "string" },
									time_submitted: { type: "string" },
									report_status: { type: "string" },
									feedback: { type: "string" },
									url: { type: "string" },
									score: { type: "number" },
								},
							},
						},
					},
				},
			},
		},
		updateFinalReport
	);
	fastify.delete(
		"/finalreport/:id",
		{
			schema: {
				description: "Delete final report",
				tags: ["Final Report"],
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
									id_student: { type: "number" },
									title: { type: "string" },
									description: { type: "string" },
									time_submitted: { type: "string" },
									report_status: { type: "string" },
									feedback: { type: "string" },
									url: { type: "string" },
									score: { type: "number" },
								},
							},
							message: { type: "string" },
						},
					},
				},
			},
		},
		deleteFinalReport
	);
};

module.exports = finalReportRoute;
