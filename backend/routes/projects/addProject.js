const Project = require("../../models/Project");
const {addOneController} = require("../../controllers");

const addProject = (app) => {
    app.post("/projects", async (req, res) => {
        const newProject = new Project(req.body);
        await addOneController(res, newProject);
    });
};

module.exports = addProject;
