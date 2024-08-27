"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Laporan_harian extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	Laporan_harian.init(
		{
			deskripsi: DataTypes.STRING,
			waktuSubmit: DataTypes.DATE,
		},
		{
			sequelize,
			modelName: "Laporan_harian",
		}
	);
	return Laporan_harian;
};
