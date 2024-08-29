const {
	register,
	login,
	logout,
} = require("../controllers/authManajementController");

const { isManajement } = require("../middleware/verifyToken");

const authManajementRoute = async (fastify, options) => {
	fastify.post("/manajement/register", register);
	fastify.post("/manajement/login", login);
	fastify.post("/manajement/logout", {
		preHandler: isManajement,
		handler: logout,
	});
};

module.exports = authManajementRoute;
