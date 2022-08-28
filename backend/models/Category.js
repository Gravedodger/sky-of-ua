const {model} = require("mongoose");

const categorySchema = require("../schemas/categorySchema");

module.exports = model("Category", categorySchema);
