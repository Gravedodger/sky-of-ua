const getAllController = async(query, res, model) => {
	try {
		const result = await model.find(query);
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

module.exports = getAllController;
