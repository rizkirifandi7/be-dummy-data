"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Laporan_akhir extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	Laporan_akhir.init(
		{
			judul: DataTypes.STRING,
			deskripsi: DataTypes.STRING,
			waktuSubmit: DataTypes.DATE,
			statusLaporan: DataTypes.ENUM("diterima", "ditolak", "menunggu"),
			feedback: DataTypes.STRING,
			url: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "Laporan_akhir",
		}
	);
	return Laporan_akhir;
};
