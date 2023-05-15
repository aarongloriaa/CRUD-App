/*
	Preparations:
	npm init -y
	npm install express
	npm install mongoose
*/

// require the installed modules
const express = require("express");
const mongoose = require("mongoose");
const familyTreeRoutes = require("./routes/familyTreeRoutes");

// port
 const port = 4000;

// server
const app = express();

// MongoDB connection
mongoose.connect("mongodb+srv://admin:admin@batch230.zynmb2p.mongodb.net/familyTree?retryWrites=true&w=majority",
	{
		useNewUrlParser: true,
		useUnifiedTopology: true
	}
);

let db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error"));

db.once("open", () => console.log("We're connected to the cloud database."));

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Routes Grouping - organize the access for each resources.
app.use("/family", familyTreeRoutes); //localhost:4000/family/

// port listener
app.listen(port, () => console.log(`Server is runnig at port ${port}`))