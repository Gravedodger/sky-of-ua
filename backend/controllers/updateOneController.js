const updateOneController = async(id, body, res, model) => {
	try {
		const result = await model.findByIdAndUpdate(id, body, {new: true});
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

module.exports = updateOneController;
