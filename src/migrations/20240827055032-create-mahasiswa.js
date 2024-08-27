"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable(
			"Mahasiswas",
			{
				id: {
					allowNull: false,
					autoIncrement: true,
					primaryKey: true,
					type: Sequelize.INTEGER,
				},
				idMhs: {
					type: Sequelize.INTEGER,
				},
				nim: {
					type: Sequelize.INTEGER,
				},
				nama: {
					type: Sequelize.STRING,
				},
				email: {
					type: Sequelize.STRING,
				},
				password: {
					type: Sequelize.STRING,
				},
				jurusan: {
					type: Sequelize.STRING,
				},
				instansi: {
					type: Sequelize.STRING,
				},
				startDate: {
					type: Sequelize.DATE,
				},
				endDate: {
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
				deletedAt: {
					allowNull: true,
					type: Sequelize.DATE,
				},
			},
			{
				paranoid: true,
			}
		);
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("Mahasiswas");
	},
};

