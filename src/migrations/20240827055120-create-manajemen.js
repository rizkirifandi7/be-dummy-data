"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable(
			"Manajemens",
			{
				id: {
					allowNull: false,
					autoIncrement: true,
					primaryKey: true,
					type: Sequelize.INTEGER,
				},
				idManajemen: {
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
		await queryInterface.dropTable("Manajemens");
	},
};

