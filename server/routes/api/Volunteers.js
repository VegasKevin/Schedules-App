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
        check("name", "Name field can't be empty").not().isEmpty(),
        check("emailAddress", "Must Enter a Valid Email Address").not().isEmpty().isEmail(),
        check("backGroundCheck", "BackGround Check requires a True or False").isIn(["true", "false"]),
        check("preferences").optional(),
        check("ministries").optional(),
        check("phoneNumber").optional()
    ],
    (req, res) => {
        if (requestHasErrors(req)) {            
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
            .catch(error => { console.log(error);
            });
        } else {
            return res.status(422).json({ "Error" : "A Parameter format wasn't properly used" });
        }        
});

//@route    DELETE api/volunteers
//@desc     Remove a Volunteer from the VOlunteers Database
//@access   ADMIN
router.delete("/", [
        check("id").not().isEmpty()
    ],
    (req, res) => {
        if (requestHasErrors(req)) {
            //console.log(req.body);
            //I chose to findById via the req.body rather than req.params
            Volunteers.findById(req.body.id)
            .then(volunteer => volunteer.remove()
            .then(() => res.json({ "Volunteer Removed" : volunteer })))
            .catch (error => res.status(404).json({ "status": error}))
        }else {
            return res.status(422).json({"error" : "id parameter format wasn't properly used"})
        }
        
})

//@route    PATCH api/volunteers
//@desc     Edit an Existing Volunteer's Resources/Information
//@access   ADMIN
router.patch("/", [
        check("name", "Name field can't be empty").not().isEmpty(),
        check("emailAddress", "Must Enter a Valid Email Address").not().isEmpty().isEmail(),
        check("backGroundCheck", "BackGround Check requires a True or False").isIn(["true", "false"]),
        check("preferences"),
        check("ministries"),
        check("phoneNumber")
],
    (req, res) => {
        if(requestHasErrors(req)){
            //This will require that each PATCH Request sends the whole object's data, including unchanged data
            Volunteers.findById(req.body.id)
            .then(volunteer => 
                volunteer.updateOne({$set : {
                    "name" : req.body.name,
                    "emailAddress" : req.body.emailAddress,
                    "backGroundCheck" : req.body.backGroundCheck,
                    "preferences" : req.body.preferences,
                    "ministries" : req.body.ministries,
                    "phoneNumber" : req.body.phoneNumber
            }}))
            .then(() => res.json({ "New Volunteer info" : "Info Here"}))
            .catch(error => res.status(404).json({ "Error Message" : error}))
        }
        else {
            return res.status(422).json({"Error" : "Parameters weren't formatted properly"});
        }
    }
)

const requestHasErrors = (req) => {
    const validationErrors = validationResult(req);
    console.log(validationErrors);
    if (!(validationErrors.isEmpty())) {
        return false;
    }
    else{
        return true;
    }
}


module.exports = router;
