const Category = require("../../models/Category");
const { addOneController } = require("../../controllers");

const addCategory = (app) => {
    app.post("/categories", async (req, res)=> {
        const newCategory = new Category(req.body);  
        await addOneController(res, newCategory);
    });
};

module.exports = addCategory;
