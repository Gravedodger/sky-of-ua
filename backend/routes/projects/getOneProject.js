const Project = require("../../models/Project");
const { getOneController } = require("../../controllers");

const getOneProject = (app) => {
	app.get("/projects/:id", async (req, res)=> {
		const {id} = req.params;
		await getOneController(id, res, Project);
	});
};

module.exports = getOneProject;
