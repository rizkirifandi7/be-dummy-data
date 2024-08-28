const { getAllData } = require("../controllers/mahasiswaController");

const mahasiswaRoute = (fastify, options, done) => {
	fastify.get("/mahasiswa", getAllData);
	done();
};

module.exports = mahasiswaRoute;
