const Project = require("../../models/Project");
const { updateOneController } = require("../../controllers");

const updateProject = (app) => {
	app.put("/projects/:id", async (req, res)=> {
		const {id} = req.params;
		const {body} = req;
		await updateOneController(id, body, res, Project);
	});
};

module.exports = updateProject;
