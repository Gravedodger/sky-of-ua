const { Schema } = require("mongoose");

const projectSchema = new Schema ({
	title: {
		type: String,
		required: true,
		minLength: 5
	},

	description: {
		type: String,
		required: true,
		minLength: 10
	},

	fullText: {
	type: String,
	required: true,
	minLength: 20
	},

	requiredAmount: {
		type: Number,
		required: true,
		min: 1
	},

	collectedAmount: {
		type: Number,
		required: true,
		max: 999999999
	},

	region: {
		type: String,
		required: true,
		enum: ["Volyn region", "Rivne region", "Zhytomyr region", "Kyiv region", "Kyiv city",
			"Chernihiv region", "Summy region", "Lviv region", "Ternopil region",
			"Khmelnytskyy region", "Vinnytsya region", "Cherkasy region", "Poltava region",
			"Kharkiv region", "Zakarpattya region", "Ivano-Frankivsk region", "Chernivtsy region",
			"Kirovohrad region", "Dnipropetrovsk region", "Donetsk region", "Luhansk region",
			"Odessa region", "Mykolayiv region", "Kherson region", "Zaporizhia region", "Autonomous Republic of Crimea",
			"City of Sevastopil"
		],
		default: "Kyiv city"
	}
});

module.exports = projectSchema;
