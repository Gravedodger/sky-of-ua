const projectRoutes = require("./projects");
const categoriesRoutes = require("./categories");

const routes = (app) => {
    projectRoutes(app);
    categoriesRoutes(app);
};

module.exports = routes;
