// const express = require("express");
// // const cors = require("cors");
// // const bodyParser = require("body-parser");
// // const mongoose = require("mongoose");
// // const app = express();
// //
// // app.use(cors());
// // app.use(bodyParser.json());
// //
// // const db = require("./configs/db").mongoURI;
// // const routes = require("./routes");
// //
// // mongoose.connect(db,{ useNewUrlParser: true });
// //
// // mongoose.connection.once('open', () => {
// // 	console.log('Connection to MongoDB Success');
// // 	routes(app);
// //
// // 	const PORT = process.env.PORT || 5000;
// //
// // 	app.listen(PORT, () => {
// // 		console.log(`Оно живо! PORT=${PORT}`)
// // 	});
// // });



const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://Sviatoslav:dock157@sky-of-ua--test.ugkj5hh.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	serverApi: ServerApiVersion.v1
});

client.connect(err => {
	const collection = client.db("test").collection("projects");
	// perform actions on the collection object
	client.close();
});
