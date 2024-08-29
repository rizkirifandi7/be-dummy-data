const {
	register,
	login,
	logout,
} = require("../controllers/authAdminController");

const { isAdmin } = require("../middleware/verifyToken");

const authAdminRoute = async (fastify, options) => {
	fastify.post("/admin/register", register);
	fastify.post("/admin/login", login);
	fastify.post("/admin/logout", {
		preHandler: isAdmin,
		handler: logout,
	});
};

module.exports = authAdminRoute;
