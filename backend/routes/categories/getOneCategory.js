const Category = require("../../models/Category");
const { getOneController } = require("../../controllers");

const getOneCategory = (app) => {
    app.get("/categories/:id", async (req, res)=> {
        const {id} = req.params;
        await getOneController(id, res, Category);
    });
};

module.exports = getOneCategory;
