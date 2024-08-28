"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Account extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			Account.hasOne(models.Student, {
				foreignKey: "id_account",
				as: "student",
			});
		}
	}
	Account.init(
		{
			name: DataTypes.STRING,
			email: DataTypes.STRING,
			password: DataTypes.STRING,
			role: DataTypes.ENUM("admin", "student", "manajement"),
		},
		{
			sequelize,
			modelName: "Account",
			paranoid: true,
		}
	);
	return Account;
};

