const { model } = require("mongoose");
const projectSchema = require("../schemas/project");

module.exports = model("Project", projectSchema);
