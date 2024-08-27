"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable(
			"Laporan_akhirs",
			{
				id: {
					allowNull: false,
					autoIncrement: true,
					primaryKey: true,
					type: Sequelize.INTEGER,
				},
				judul: {
					type: Sequelize.STRING,
				},
				dekripsi: {
					type: Sequelize.STRING,
				},
				waktuSubmit: {
					type: Sequelize.DATE,
				},
				statusLaporan: {
					type: Sequelize.ENUM("diterima", "ditolak", "menunggu"),
				},
				feedback: {
					type: Sequelize.STRING,
				},
				url: {
					type: Sequelize.STRING,
				},
				createdAt: {
					allowNull: false,
					type: Sequelize.DATE,
				},
				updatedAt: {
					allowNull: false,
					type: Sequelize.DATE,
				},
			},
			{
				paranoid: true,
			}
		);
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("Laporan_akhirs");
	},
};

