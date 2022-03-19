const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
// The API Routes for the Volunteers Screeen
const volunteers = require('./routes/api/Volunteers/GetAllVolunteers');
const searchVolunteers = require('./routes/api/Volunteers/SearchGetVolunteers');
const patchVolunteer = require('./routes/api/Volunteers/PatchVolunteer');
const deleteVolunteer = require('./routes/api/Volunteers/DeleteVolunteer');
//API Routes for Creating Schedule Templates
const createScheduleTemplate = require('./routes/api/ScheduleTemplates/CreateScheduleTemplate');
//API Routes for Manageing Schedule Template
const manageScheduleTemplates = require('./routes/api/ScheduleTemplates/GetAllScheduleTemplates');


const app = express();



// The BodyParser Middleware
app.use(bodyParser.json());

//Enable CORS using an 'npm cors' package
app.use(cors());

//DB Config from config/configKeys.js
const db = require("../config/configKeys").mongoURI;

//Connect to Mongo Databse
mongoose
    .connect(db, {useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB is Connected."))
    .catch(err => console.log("~~~~~~  MongoDB Failed to Connect - '\n" + err));



    //
  // patchVolunteer.patch('/api/volunteers', patchVolunteer);
  // volunteers.get('/api/volunteers', volunteers);



//Use Routes
// app.use(volunteers, patchVolunteer)
app.use("/api/volunteers", volunteers);
app.use("/api/volunteers", patchVolunteer);
app.use("/api/volunteers", deleteVolunteer);

app.use("/api/volunteers/search", searchVolunteers);

// Create Schedule Templates
app.use("/api/schedules/createscheduletemplate", createScheduleTemplate);

//Manage Schedule Templates
app.use("/api/managescheduletemplates", manageScheduleTemplates);

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