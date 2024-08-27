"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Administrasi extends Model {
		static associate(models) {
		}
	}
	Administrasi.init(
		{
      idAdmin: DataTypes.INTEGER,
			nama: DataTypes.STRING,
			email: DataTypes.STRING,
			password: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "Administrasi",
		}
	);
	return Administrasi;
};
