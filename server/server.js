const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
// The API Routes for the Volunteers Screeen
const volunteers = require('./routes/api/Volunteers/GetAllVolunteers');
const searchVolunteers = require('./routes/api/Volunteers/SearchGetVolunteers');
const patchVolunteer = require('./routes/api/Volunteers/PatchVolunteer');
const deleteVolunteer = require('./routes/api/Volunteers/DeleteVolunteer');
//API Routes for Schedule Templates
const createScheduleTemplate = require('./routes/api/ScheduleTemplates/CreateScheduleTemplate');

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



    //
  // patchVolunteer.patch('/api/volunteers', patchVolunteer);
  // volunteers.get('/api/volunteers', volunteers);



//Use Routes
// app.use(volunteers, patchVolunteer)
app.use("/api/volunteers", volunteers);
app.use("/api/volunteers", patchVolunteer);
app.use("/api/volunteers", deleteVolunteer);

app.use("/api/volunteers/search", searchVolunteers);

//Schedule Templated
app.use("/api/schedules/createscheduletemplate", createScheduleTemplate);

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