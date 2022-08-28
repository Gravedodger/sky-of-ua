const getOneController = async(id, res, model) => {
	try {
		const result = await model.findById(id);
		res.send({
			status: "Success",
			result
		});
	} catch (err) {
		res.send({
			status: "Error",
			message: err.message
		});
	}
};

module.exports = getOneController;
