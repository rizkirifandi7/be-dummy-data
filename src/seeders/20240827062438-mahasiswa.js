"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"Mahasiswas",
			[
				{
					idMhs: 1,
					nim: 12345678,
					nama: "Alice Johnson",
					email: "alice.johnson@example.com",
					password: "password123",
					jurusan: "Teknik Informatika",
					instansi: "Universitas A",
					startDate: new Date("2023-01-01"),
					endDate: new Date("2023-12-31"),
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					idMhs: 2,
					nim: 87654321,
					nama: "Bob Smith",
					email: "bob.smith@example.com",
					password: "password456",
					jurusan: "Sistem Informasi",
					instansi: "Universitas B",
					startDate: new Date("2023-02-01"),
					endDate: new Date("2023-11-30"),
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					idMhs: 3,
					nim: 11223344,
					nama: "Charlie Brown",
					email: "charlie.brown@example.com",
					password: "password789",
					jurusan: "Teknik Elektro",
					instansi: "Universitas C",
					startDate: new Date("2023-03-01"),
					endDate: new Date("2023-10-31"),
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("Mahasiswas", null, {});
	},
};

