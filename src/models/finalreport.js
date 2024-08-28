"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class FinalReport extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
      FinalReport.belongsTo(models.Student, {
        foreignKey: "id_student",
        as: "student",
      });
		}
	}
	FinalReport.init(
		{
      id_student: DataTypes.INTEGER,
			title: DataTypes.STRING,
			description: DataTypes.STRING,
			time_submitted: DataTypes.DATE,
			report_status: DataTypes.ENUM("pending", "accepted", "revision"),
			feedback: DataTypes.STRING,
			url: DataTypes.STRING,
			score: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: "FinalReport",
			paranoid: true,
		}
	);
	return FinalReport;
};
