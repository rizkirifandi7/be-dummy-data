"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Mahasiswa extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	Mahasiswa.init(
		{
			idMhs: DataTypes.INTEGER,
			nim: DataTypes.INTEGER,
			nama: DataTypes.STRING,
			email: DataTypes.STRING,
      password: DataTypes.STRING,
      jurusan: DataTypes.STRING,
      instansi: DataTypes.STRING,
      startDate: DataTypes.DATE,
      endDate: DataTypes.DATE,
		},
		{
			sequelize,
			modelName: "Mahasiswa",
		}
	);
	return Mahasiswa;
};

