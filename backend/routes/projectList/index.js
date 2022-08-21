const getAllProjects = require("./getAllProjects");
const addProject = require("./addProject");
const removeProject = require("./removeProject");

module.exports = (app) => {
    getAllProjects(app);
    addProject(app);
    removeProject(app);
}
