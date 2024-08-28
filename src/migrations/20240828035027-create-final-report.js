"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable(
			"FinalReports",
			{
				id: {
					allowNull: false,
					autoIncrement: true,
					primaryKey: true,
					type: Sequelize.INTEGER,
				},
        id_student: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
				title: {
					type: Sequelize.STRING,
				},
				description: {
					type: Sequelize.STRING,
				},
				time_submitted: {
					type: Sequelize.DATE,
				},
				report_status: {
					type: Sequelize.ENUM("pending", "accepted", "revision"),
					allowNull: false,
				},
				feedback: {
					type: Sequelize.STRING,
				},
				url: {
					type: Sequelize.STRING,
				},
				score: {
					type: Sequelize.INTEGER,
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
				paranoid: true,
			}
		);
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("FinalReports");
	},
};

