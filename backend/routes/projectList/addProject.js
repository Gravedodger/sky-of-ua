const Project = require("../../models/Project");

module.exports = (app) => {
    app.post("/projects", async ({body}, res) => {
        const newProject = new Project(body);
        try {
            const project = await newProject.save();
            res.send({
                status: "Success",
                result: project
            });

        } catch (err) {
            res.send({
                status: "Error",
                message: err.message
            })
        }
    });
};
