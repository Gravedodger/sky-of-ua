const Category = require("../../models/Category");
const { updateOneController } = require("../../controllers");

const updateCategory = (app) => {
    app.put("/categories/:id", async (req, res)=> {
        const {id} = req.params;
        const {body} = req;
        await updateOneController(id, body, res, Category);
    });
};

module.exports = updateCategory;
