const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
// The API Routes for the Volunteers Screeen
const volunteers = require('./routes/api/Volunteers');

const app = express();

// The BodyParser Middleware
app.use(bodyParser.json());

//Enable CORS using an 'npm cors' package
app.use(cors());

//DB Config from config/configKeys.js
const db = require("../config/configKeys").mongoURI;

//Connect to Mongo Databse
mongoose
    .connect(db, {useNewUrlParser: true})
    .then(() => console.log("MongoDB is Connected."))
    .catch(err => console.log("~~~~~~~~" + err));



//Use Routes
app.use("/api/volunteers", volunteers);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server has started on Port ${port}`));




/*const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://TestUser:<password>@cluster0test-asadb.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
*/