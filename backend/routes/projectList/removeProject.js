const Project = require("../../models/Project");

module.exports = (app) => {
    app.delete("/projects/:id", async (req, res) => {
        const {id} = req.params;

        try {
            const answer = await Project.findByIdAndDelete(id);
            res.send({
                status: "Success",
                result: answer
            });

        } catch (err) {
            res.send({
                status: "Error",
                message: err.message
            })
        }
    });
};
