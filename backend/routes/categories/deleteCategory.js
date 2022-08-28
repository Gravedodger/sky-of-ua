const Category = require("../../models/Category");
const { deleteOneController } = require("../../controllers");

const deleteCategory = (app) => {
    app.delete("/categories/:id", async (req, res)=> {
        const {id} = req.params;
        await deleteOneController(id, res, Category);
    });
};

module.exports = deleteCategory;
