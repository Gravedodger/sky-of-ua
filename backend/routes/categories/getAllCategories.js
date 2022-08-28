const Category = require("../../models/Category");
const getAllController = require("../../controllers/getAllController");

const getAllCategories = (app) => {
    app.get("/categories", async({query}, res) => {
        await getAllController(query, res, Category);
    })
};

module.exports = getAllCategories;
