const jwt = require("jsonwebtoken");

const isAdminOrSelf = async (req, res, next) => {
	try {
		const { id } = req.params;
		const { tokenStudent, tokenAdmin } = req.cookies;

		if (tokenAdmin) {
			return next();
		}

		if (tokenStudent) {
			const { userId } = jwt.verify(tokenStudent, process.env.JWT_SECRET);
			if (parseInt(userId, 10) !== parseInt(id, 10)) {
				return res.code(403).send({
					message: "Unauthorized: You can only edit your own profile",
				});
			}
			return next();
		} else {
			return res.code(401).send({ message: "Unauthorized: Token not found" });
		}
	} catch (error) {
		console.error(error);
		return res.code(500).send({ message: "Internal Server Error" });
	}
};

module.exports = { isAdminOrSelf };
