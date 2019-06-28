const express = require('express');
const router = express.Router();

//Volunteers Model
const Volunteers = require('../../../models/Volunteers');

//@route    GET api/volunteers
//@desc     Get all VOlunteers
//@access   ADMIN
router.get("/", (req, res) =>{
    Volunteers.find()
    .sort ({ name: -1 })
    .then(volunteers => res.json(volunteers))
});


module.exports = router;
