const Project = require("../../models/Project");

module.exports = (app) => {
	app.get("/projects", async (req, res) => {
		try {
			const projects = await Project.find({});
			res.send({
				status: "Success",
				result: projects
			});
		} catch (err) {
			res.send({
				status: "Error",
				message: err.message
			})
		}
	});
};
