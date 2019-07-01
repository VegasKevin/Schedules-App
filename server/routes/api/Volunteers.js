const express = require('express');
const router = express.Router();
const { body, check, validationResult } = require("express-validator");

/**
 * TODO : I need to determine response values; Add params to the comments for each endpoint;
 * Fill out the 'documentation' details for each end point (params, response codes, ect)
 */

//Volunteers Model (Schema)
const Volunteers = require('../../../models/Volunteers');

//@route    GET api/volunteers
//@desc     Get all VOlunteers
//@access   ADMIN
router.get("/", (req, res) =>{
    Volunteers.find()
    //.sort ({ name: -1 })
    .then(volunteers => res.json(volunteers))
});


//@route    POST api/volunteers
//@desc     Create a new Volunteer in the Database
//@access   ADMIN
router.post("/", [
        //Validates to ensure that required fields are as needed
        check("name").not().isEmpty(),
        check("emailAddress").not().isEmpty().isEmail(),
        check("backGroundCheck").isIn(["true", "false"])
    ],
    (req, res) => {
        const validationErrors = validationResult(req);
        const hasErrors = !(validationErrors.isEmpty());
        console.log(hasErrors);
        
        // if (validationErrors.errors != undefined){
        //     console.log("~~~~~~~~~~~~~"  + (validationErrors.errors.isEmpty));
        // }
        
        console.log("errors array~~~~~");
        validationErrors.errors.forEach(element => {
          console.log(element);  
        });// + validationErrors.errors);
        
        //If validation check came back empty
        if (hasErrors == false) {            
            const newVolunteer = new Volunteers({
                name : req.body.name,
                emailAddress : req.body.emailAddress,
                backGroundCheck : req.body.backGroundCheck,
                phoneNumber : req.body.phoneNumber,
                preferences : req.body.preferences,
                ministries : req.body.ministries
        });
        // Saving new Volunteer to MongoDB    
        newVolunteer
            .save()
            .then(volunteers => res.json(volunteers))
            .catch(error => {
                console.log(error);
            });
        } else {
            return res.status(422).json(validationErrors);
        }        
});

//@route    DELETE api/volunteers
//@desc     Remove a Volunteer from the VOlunteers Database
//@access   ADMIN
router.delete("/", (req, res) => {

})


module.exports = router;
