"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"Manajemens",
			[
				{
					idManajemen: 1,
					nama: "David Lee",
					email: "david.lee@example.com",
					password: "admin123",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					idManajemen: 2,
					nama: "Eva Green",
					email: "eva.green@example.com",
					password: "admin456",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					idManajemen: 3,
					nama: "Frank White",
					email: "frank.white@example.com",
					password: "admin789",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("Manajemens", null, {});
	},
};

