const getAllProjects = require('./getAllProjects');
const addProject = require('./addProject');
const getOneProject = require('./getOneProject');
const updateProject = require('./updateProject');
const deleteProject = require('./deleteProject');

module.exports = (app) => {
	getAllProjects(app);
	addProject(app);
	getOneProject(app);
	updateProject(app);
	deleteProject(app);
};
