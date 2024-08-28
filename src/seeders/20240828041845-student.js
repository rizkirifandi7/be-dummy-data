"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"Students",
			[
				{
					id: 1,
					id_account: 101,
					nim: 123456,
					job_title: "Research Assistant",
					major: "Computer Science",
					institution: "University A",
					laboratory: "AI Lab",
					status: "active",
					start_periode: new Date("2022-01-01"),
					end_periode: new Date("2023-01-01"),
					createdAt: new Date(),
					updatedAt: new Date(),
					deletedAt: null,
				},
				{
					id: 2,
					id_account: 102,
					nim: 654321,
					job_title: "Teaching Assistant",
					major: "Information Technology",
					institution: "University B",
					laboratory: "Networking Lab",
					status: "inactive",
					start_periode: new Date("2021-01-01"),
					end_periode: new Date("2022-01-01"),
					createdAt: new Date(),
					updatedAt: new Date(),
					deletedAt: null,
				},
				{
					id: 3,
					id_account: 103,
					nim: 112233,
					job_title: "Intern",
					major: "Software Engineering",
					institution: "University C",
					laboratory: "Software Lab",
					status: "graduated",
					start_periode: new Date("2020-01-01"),
					end_periode: new Date("2021-01-01"),
					createdAt: new Date(),
					updatedAt: new Date(),
					deletedAt: null,
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("Students", null, {});
	},
};
