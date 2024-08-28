"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable(
			"Students",
			{
				id: {
					allowNull: false,
					autoIncrement: true,
					primaryKey: true,
					type: Sequelize.INTEGER,
				},
				id_account: {
					type: Sequelize.INTEGER,
					allowNull: false,
				},
				nim: {
					type: Sequelize.INTEGER,
					allowNull: false,
				},
				job_title: {
					type: Sequelize.STRING,
				},
				major: {
					type: Sequelize.STRING,
				},
				institution: {
					type: Sequelize.STRING,
				},
				laboratory: {
					type: Sequelize.STRING,
				},
				status: {
					type: Sequelize.ENUM("active", "inactive", "graduated"),
					allowNull: false,
				},
				start_periode: {
					type: Sequelize.DATE,
				},
				end_periode: {
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
					type: Sequelize.DATE,
					allowNull: true,
				},
			},
			{
				pararanoid: true,
			}
		);
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("Students");
	},
};

