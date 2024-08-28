"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Student extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
      Student.belongsTo(models.Account, {
        foreignKey: "id_account",
        as: "account",
      });

      Student.hasMany(models.FinalReport, {
        foreignKey: "id_student",
        as: "final_reports",
      });

      Student.hasMany(models.DailyReport, {
        foreignKey: "id_student",
        as: "daily_reports",
      });
		}
	}
	Student.init(
		{
			id_account: DataTypes.INTEGER,
			nim: DataTypes.INTEGER,
			job_title: DataTypes.STRING,
			major: DataTypes.STRING,
			institution: DataTypes.STRING,
			laboratory: DataTypes.STRING,
			status: DataTypes.ENUM("active", "inactive", "graduated"),
			start_periode: DataTypes.DATE,
			end_periode: DataTypes.DATE,
		},
		{
			sequelize,
			modelName: "Student",
			paranoid: true,
		}
	);
	return Student;
};
