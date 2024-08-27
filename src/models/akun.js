"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Akun extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	Akun.init(
		{
			email: DataTypes.STRING,
			password: DataTypes.STRING,
			role: DataTypes.ENUM("admin", "mahasiswa", "manajemen"),
		},
		{
			sequelize,
			modelName: "Akun",
		}
	);
	return Akun;
};
