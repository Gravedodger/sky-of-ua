const Project = require("../../models/Project");
const { getAllController } = require("../../controllers");

const getAllProjects = (app) => {

	app.get("/projects", async ({query}, res)=> {
		console.log(getAllController)
		await getAllController(query, res, Project);
	});
};


module.exports = getAllProjects;
