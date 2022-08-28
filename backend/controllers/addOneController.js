const addOneController = async(res, newObj) => {
	try {
		const result = await newObj.save();
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

module.exports = addOneController;
