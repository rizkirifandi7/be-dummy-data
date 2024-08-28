"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"Accounts",
			[
				{
					id: 1,
					name: "Alice Johnson",
					email: "alice.johnson@example.com",
					password: "password123",
					role: "student",
					createdAt: new Date(),
					updatedAt: new Date(),
					deletedAt: null,
				},
				{
					id: 2,
					name: "Bob Smith",
					email: "bob.smith@example.com",
					password: "password123",
					role: "student",
					createdAt: new Date(),
					updatedAt: new Date(),
					deletedAt: null,
				},
				{
					id: 3,
					name: "Charlie Brown",
					email: "charlie.brown@example.com",
					password: "password123",
					role: "student",
					createdAt: new Date(),
					updatedAt: new Date(),
					deletedAt: null,
				},
				{
					id: 4,
					name: "David Wilson",
					email: "david.wilson@example.com",
					password: "password123",
					role: "admin",
					createdAt: new Date(),
					updatedAt: new Date(),
					deletedAt: null,
				},
				{
					id: 5,
					name: "Eve Davis",
					email: "eve.davis@example.com",
					password: "password123",
					role: "manajement",
					createdAt: new Date(),
					updatedAt: new Date(),
					deletedAt: null,
				},
				{
					id: 6,
					name: "Frank Miller",
					email: "frank.miller@example.com",
					password: "password123",
					role: "admin",
					createdAt: new Date(),
					updatedAt: new Date(),
					deletedAt: null,
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("Accounts", null, {});
	},
};
