const express = require('express');
const router = express.Router();
const { body, check, validationResult, oneOf } = require("express-validator");

//Volunteers Model (Schema)
const Volunteers = require('../../../../models/Volunteers');

//@route    PATCH api/volunteers
//@desc     Edit an Existing Volunteer's Resources/Information
//@access   ADMIN
router.patch("/", [
    check("firstName", "First Name field can't be empty").optional(),//.not().isEmpty(),
    check("lastName", "Last Name field can't be empty").optional(),//.not().isEmpty(),
    check("emailAddress", "Must Enter a Valid Email Address").optional(),//.not().isEmpty().isEmail(),
    check("backGroundCheck", "BackGround Check requires a True or False").optional().isIn(["true", "false"]),
    check("preferences").optional(),
    check("ministries").optional(),
    check("phoneNumber").optional()
],
(req, res) => {
    console.log('patch reqbody: ' + JSON.stringify(req.body));
    console.log("hasOwnProperty: " + req.body.hasOwnProperty("firstName"))
    if(requestHasErrors(req)){
        //This will require that each PATCH Request sends the whole object's data, including unchanged data
        Volunteers.findById(req.body._id)
        .then(volunteer => 
        //     volunteer.update({$set : { "firstName" : (req.body.firstName) ? req.body.firstName : this.volunteer.firstName }}),
        //    // volunteer.update({$set : { "lastName" : (req.body.lastName)  ? req.body.lastName : this.volunteer.lastName}}),
        //     volunteer.update({$set : { "emailAddress" : (req.body.emailAddress)  ? req.body.emailAddress : this.volunteer.emailAddress}}),
        //     volunteer.update({$set : { "backGroundCheck" : (req.body.backGroundCheck)  ? req.body.backGroundCheck : this.volunteer.backGroundCheck }}),
        //     volunteer.update({$set : { "preferences" : (req.body.preferences)  ? req.body.preferences : this.volunteer.preferences}}),
        //     volunteer.update({$set : { "ministries" : (req.body.ministries)  ? req.body.ministries : this.volunteer.ministries}}),
        //     volunteer.update({$set : { "phoneNumber" : (req.body.phoneNumber)  ? req.body.phoneNumber : this.volunteer.phoneNumber}})
        
         //res.state(411).json("Error" : "Volunteer wasn't found")}
            volunteer.update({$set : {
                "firstName" : (req.body.firstName) ?  req.body.firstName : volunteer.firstName,
                 "lastName" : (req.body.lastName) ? req.body.lastName : volunteer.lastName,
                 "emailAddress" : (req.body.emailAddress) ? req.body.emailAddress : volunteer.emailAddress,
                "backGroundCheck" : (req.body.backGroundCheck) ? req.body.backGroundCheck : volunteer.backGroundCheck,
                 "preferences" : (req.body.preferences) ? req.body.preferences : volunteer.preferences, 
                 "ministries" : (req.body.ministries) ? req.body.ministries : volunteer.ministries,
                 "phoneNumber" : (req.body.phoneNumber) ? req.body.phoneNumber : volunteer.phoneNumber
         }})
    )
        .then(() => res.json({ "New Volunteer info" : volunteer}))
        .catch(error => res.status(404).json({ "Error Message" : error}))
    }
    else {
        return res.status(422).json({"Error" : "Parameters weren't formatted properly"});
    }
});

checkRequestBody = (req, volunteer) => {
        if(req.body.hasOwnProperty("firstName")) { volunteer.updateOne({$set : { "firstName" : req.body.firstName }}); console.log("~~~firstName") }
        if(req.body.hasOwnProperty("lastName")) { volunteer.updateOne({$set : { "lastName" : req.body.lastName }}) }
        if(req.body.hasOwnProperty("emailAddress")) { volunteer.updateOne({$set : { "emailAddress" : req.body.emailAddress }}) }
        if(req.body.hasOwnProperty("backGroundCheck")) { volunteer.updateOne({$set : { "backGroundCheck" : req.body.backGroundCheck }}) }
        if(req.body.hasOwnProperty("preferences")) { volunteer.updateOne({$set : { "preferences" : req.body.preferences }}) }
        if(req.body.hasOwnProperty("ministries")) { volunteer.updateOne({$set : { "ministries" : req.body.ministries }}) }
        if(req.body.hasOwnProperty("phoneNumber")) { volunteer.updateOne({$set : { "phoneNumber" : req.body.phoneNumber }}) }
}

const requestHasErrors = (req) => {
    const validationErrors = validationResult(req);
    
    if (!(validationErrors.isEmpty())) {
        return false;
    }
    else{
        return true;
    }
}

module.exports = router;