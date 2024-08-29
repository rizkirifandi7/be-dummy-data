const { Account } = require("../models");

const getAllAccounts = async (request, reply) => {
	try {
		const accounts = await Account.findAll();
		const data = {
			data: accounts,
			message: "Successfully get all accounts",
		};
		return reply.send(data).code(200);
	} catch (error) {
		return reply.send(error).code(500);
	}
};

const getAccountById = async (request, reply) => {
	try {
		const { id } = request.params;
		const account = await Account.findByPk(id);
		if (!account) {
			return reply.send({ message: "Account not found" }).code(404);
		}
		const data = {
			data: account,
			message: "Successfully get account by id",
		};
		return reply.send(data).code(200);
	} catch (error) {
		return reply.send(error).code(500);
	}
};

const createAccount = async (request, reply) => {
	try {
		const { name, email, password, role } = request.body;
		const checkEmail = await Account.findOne({ where: { email } });
		if (checkEmail) {
			return reply.send({ message: "Email already exists" }).code(400);
		}
		const account = await Account.create({ name, email, password, role });
		const data = {
			data: account,
			message: "Successfully create account",
		};
		return reply.send(data).code(201);
	} catch (error) {
		return reply.send(error).code(500);
	}
};

const updateAccount = async (request, reply) => {
	try {
		const { id } = request.params;
		const { name, email, password, role } = request.body;
		const account = await Account.findByPk(id);
		if (!account) {
			return reply.send({ message: "Account not found" }).code(404);
		}
		account.name = name;
		account.email = email;
		account.password = password;
		account.role = role;
		await account.save();
		const data = {
			data: account,
			message: "Successfully update account",
		};
		return reply.send(data).code(200);
	} catch (error) {
		return reply.send(error).code(500);
	}
};

const deleteAccount = async (request, reply) => {
	try {
		const { id } = request.params;
		const account = await Account.findByPk(id);
		if (!account) {
			return reply.send({ message: "Account not found" }).code(404);
		}
		await account.destroy();
		const data = {
			data: account,
			message: "Successfully delete account",
		};
		return reply.send(data).code(200);
	} catch (error) {
		return reply.send(error).code(500);
	}
};

module.exports = {
	getAllAccounts,
	getAccountById,
	createAccount,
	updateAccount,
	deleteAccount,
};
