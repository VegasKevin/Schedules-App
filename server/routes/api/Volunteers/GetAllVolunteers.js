const express = require('express');
const router = express.Router();
const { body, check, validationResult, oneOf } = require("express-validator");

/**
 * TODO : I need to determine response values; Add params to the comments for each endpoint;
 * Fill out the 'documentation' details for each end point (params, response codes, ect)
 */

//Volunteers Model (Schema)
const Volunteers = require('../../../../models/Volunteers');

//@route    GET api/volunteers
//@desc     Get all VOlunteers
//@access   ADMIN
router.get("/", oneOf(
    [
        body("firstName", "First Name field can't be empty"),
        body("lastName", "Last Name field can't be empty")
    ]),
    (req, res) =>{
    // console.log("~~~~~~In get ALL");
    // console.log("req.body.firstName: " + req.body.firstName);
    if(requestHasErrors(req)){
        if(req.body.firstName && req.body.lastName){
            //console.log("vol API: BOTH");
            Volunteers.find( { 'firstName' : req.body.firstName, 'lastName' : req.body.lastName})
            .sort({ lastName : 1 })
            .then(volunteers => res.json(volunteers))
            .catch(error => res.json(error));
        }else if(req.body.firstName && !req.body.lastName){
            //console.log("vol API: FIRST");
            Volunteers.find({ 'firstName' : req.body.firstName })
            .sort ({ lastName: 1 })
            .then(volunteers => res.json(volunteers))
            .catch(error => res.json(error));
        }else if(!req.body.firstName && req.body.lastName){
            //console.log("vol API: LAST");
            Volunteers.find({ 'lastName' : req.body.lastName })
            .sort ({ lastName: 1 })
            .then(volunteers => res.json(volunteers))
            .catch(error => res.json(error));
        } else{
            //console.log("vol API: NONE");
            Volunteers.find({ })
            .sort ({ lastName: 1 })
            .then(volunteers => res.json(volunteers))
            .catch(error => res.json(error));
        }
    } else {
        return res.status(422).json({"Error" : validationErrors})
    }
    
});


//@route    GET api/volunteers:name
//@desc     Get a single Volunteer Based on the Name
//@access   ADMIN or Both?
router.get("/", 
    [ check("firstName", "First Name Field Can't be empty").not().isEmpty() ], 
    (req, res) =>{
        if(requestHasErrors(req)){
            Volunteers.findOne({"firstName": req.body.firstName})
            .then (volunteer => res.json(volunteer))
            .catch(error => res.json(error));
        } else{
            return res.status(422).json({"Error" : "First Name parameter wasn't formatted properly"})
        }
    });



//@route    POST api/volunteers
//@desc     Create a new Volunteer in the Database
//@access   ADMIN
router.post("/", [
        //Validates to ensure that required fields are as needed
        check("firstName", "First Name field can't be empty").not().isEmpty(),
        check("lastName", "Last Name field can't be empty").not().isEmpty(),
        check("emailAddress", "Must Enter a Valid Email Address").not().isEmpty().isEmail(),
        check("backGroundCheck", "BackGround Check requires a True or False").isIn(["true", "false"]),
        check("preferences").optional(),
        check("ministries").optional(),
        check("phoneNumber").optional()
    ],
    (req, res) => {
   //     console.log("req.body.firstName: " + req.body.firstName);
        if (requestHasErrors(req)) {            
            const newVolunteer = new Volunteers({
                firstName : req.body.firstName,
                lastName : req.body.lastName,
                emailAddress : req.body.emailAddress,
                backGroundCheck : req.body.backGroundCheck,
                phoneNumber : req.body.phoneNumber,
                preferences : req.body.preferences,
                ministries : req.body.ministries
        });
        // Saving new Volunteer to MongoDB    
        newVolunteer
            .save()
            .then(volunteers => {
                res.json(volunteers)//,
            //    console.log("volunteer._id:" + volunteers._id)
            })           
            .catch(error => { console.log(error);
            });
        } else {
            return res.status(422).json({ "Error" : "A Parameter format wasn't properly used" });
        }        
});

// //@route    PATCH api/volunteers
// //@desc     Edit an Existing Volunteer's Resources/Information
// //@access   ADMIN
// router.patch("/", [
//         check("firstName", "First Name field can't be empty").optional(),//.not().isEmpty(),
//         check("lastName", "Last Name field can't be empty").optional(),//.not().isEmpty(),
//         check("emailAddress", "Must Enter a Valid Email Address").optional(),//.not().isEmpty().isEmail(),
//         check("backGroundCheck", "BackGround Check requires a True or False").optional().isIn(["true", "false"]),
//         check("preferences").optional(),
//         check("ministries").optional(),
//         check("phoneNumber").optional()
// ],
//     (req, res) => {
//         console.log('patch reqbody: ' + JSON.stringify(req.body));
//         if(requestHasErrors(req)){
//             //This will require that each PATCH Request sends the whole object's data, including unchanged data
//             Volunteers.findById(req.body._id)
//             .then(volunteer => 
//                 volunteer.updateOne({$set : {
//                     "firstName" : req.body.firstName,
//                     "lastName" : req.body.lastName,
//                     "emailAddress" : req.body.emailAddress,
//                     "backGroundCheck" : req.body.backGroundCheck,
//                     "preferences" : req.body.preferences,
//                     "ministries" : req.body.ministries,
//                     "phoneNumber" : req.body.phoneNumber
//             }}))
//             .then(() => res.json({ "New Volunteer info" : volunteer}))
//             .catch(error => res.status(404).json({ "Error Message" : error}))
//         }
//         else {
//             return res.status(422).json({"Error" : "Parameters weren't formatted properly"});
//         }
//     }
// )

const requestHasErrors = (req) => {
    const validationErrors = validationResult(req);
    //console.log("validation errors: " + JSON.stringify(validationErrors));
    
    if (!(validationErrors.isEmpty())) {
        return false;
    }
    else{
    
        return true;
    }
}


module.exports = router;
