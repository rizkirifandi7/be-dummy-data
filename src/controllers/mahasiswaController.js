const { Mahasiswa } = require("../models");

const getAllData = async (req, res) => {
	try {
		const mahasiswa = await Mahasiswa.findAll();
		res.code(200).send({
			data: mahasiswa,
		});
	} catch (error) {
		res.code(500).send({
			message: error.message,
		});
	}
};

module.exports = {
	getAllData,
};
