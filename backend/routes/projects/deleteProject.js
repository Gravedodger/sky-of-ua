const Project = require("../../models/Project");
const { deleteOneController } = require("../../controllers");

const deleteProject = (app) => {
	app.delete("/projects/:id", async (req, res)=> {
		const {id} = req.params;
		await deleteOneController(id, res, Project);
	});
};

module.exports = deleteProject;
