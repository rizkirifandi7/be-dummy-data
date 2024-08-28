const {
	getAllAccounts,
	getAccountById,
	createAccount,
	updateAccount,
	deleteAccount,
} = require("../controllers/accountController");

const accountRoute = async (fastify, options, done) => {
	fastify.get("/accounts", getAllAccounts);
	fastify.get("/accounts/:id", getAccountById);
	fastify.post("/accounts", createAccount);
	fastify.put("/accounts/:id", updateAccount);
	fastify.delete("/accounts/:id", deleteAccount);
	done();
};

module.exports = accountRoute;
