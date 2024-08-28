"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"DailyReports",
			[
				{
					id: 1,
					id_student: 1,
					description: "Completed the initial setup of the project.",
					time_submitted: new Date("2023-10-01T10:00:00Z"),
					createdAt: new Date(),
					updatedAt: new Date(),
					deletedAt: null,
				},
				{
					id: 2,
					id_student: 2,
					description: "Worked on the database schema design.",
					time_submitted: new Date("2023-10-02T11:00:00Z"),
					createdAt: new Date(),
					updatedAt: new Date(),
					deletedAt: null,
				},
				{
					id: 3,
					id_student: 3,
					description: "Implemented the user authentication module.",
					time_submitted: new Date("2023-10-03T12:00:00Z"),
					createdAt: new Date(),
					updatedAt: new Date(),
					deletedAt: null,
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("DailyReports", null, {});
	},
};
