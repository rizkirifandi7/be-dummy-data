"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable(
			"Laporan_harians",
			{
				id: {
					allowNull: false,
					autoIncrement: true,
					primaryKey: true,
					type: Sequelize.INTEGER,
				},
				deskripsi: {
					type: Sequelize.STRING,
				},
				waktuSubmit: {
					type: Sequelize.DATE,
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
		await queryInterface.dropTable("Laporan_harians");
	},
};

