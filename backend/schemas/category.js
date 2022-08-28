const {Schema} = require("mongoose");

const categorySchema = new Schema({
	name: {
		required: [true, "Category name must be defined"],
		type: String,
		minlength: 2
	},
	description: {
		required: [true, "Category name must be defined"],
		type: String,
		minlength: 2
	},
	parentId: {
		type: Schema.Types.ObjectId,
		ref: 'Category'
	}
});

module.exports = categorySchema;
