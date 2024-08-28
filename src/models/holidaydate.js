"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class HolidayDate extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	HolidayDate.init(
		{
			date: DataTypes.DATE,
			description: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "HolidayDate",
			paranoid: true,
		}
	);
	return HolidayDate;
};
