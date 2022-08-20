const app = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

app.use(cors());
app.use(bodyParser.json());

const db = require("./configs/db").mongoURI;
const routes = require("./routes");

mongoose.connect(db,{ useNewUrlParser: true });

mongoose.connection.once('open', () => {
	console.log('Connection to MongoDB Success');
	routes(app);

	const PORT = process.env.PORT || 5000;

	app.listen(PORT, () => {
		console.log(`Оно живо! PORT=${PORT}`)
	});
});
