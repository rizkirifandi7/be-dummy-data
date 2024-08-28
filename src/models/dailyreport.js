"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class DailyReport extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			DailyReport.belongsTo(models.Student, {
				foreignKey: "id_student",
				as: "student",
			});
		}
	}
	DailyReport.init(
		{
			id_student: DataTypes.INTEGER,
			description: DataTypes.STRING,
			time_submitted: DataTypes.DATE,
		},
		{
			sequelize,
			modelName: "DailyReport",
			paranoid: true,
		}
	);
	return DailyReport;
};

