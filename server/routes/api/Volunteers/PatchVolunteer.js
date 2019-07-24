const express = require('express');
const router = express.Router();
const { check, validationResult } = require("express-validator");

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
    if(requestHasErrors(req)){
        //This will require that each PATCH Request sends the whole object's data, including unchanged data
        Volunteers.findById(req.body._id)
        .then(volunteer => 
            volunteer.updateOne({$set : {
                "firstName" : (req.body.firstName) ?  req.body.firstName : volunteer.firstName,
                 "lastName" : (req.body.lastName) ? req.body.lastName : volunteer.lastName,
                 "emailAddress" : (req.body.emailAddress) ? req.body.emailAddress : volunteer.emailAddress,
                "backGroundCheck" : (req.body.backGroundCheck) ? req.body.backGroundCheck : volunteer.backGroundCheck,
                 "preferences" : (req.body.preferences) ? req.body.preferences : volunteer.preferences, 
                 "ministries" : (req.body.ministries) ? req.body.ministries : volunteer.ministries,
                 "phoneNumber" : (req.body.phoneNumber) ? req.body.phoneNumber : volunteer.phoneNumber
         }}),
         res.status(204).json(),
    )
        //.then(res.status(204).json())
        // .catch(error => {
        //     res.status(404).json({ "Error Message" : error})})
    }
    else {
        return res.status(422).json({"Error" : "Parameters weren't formatted properly"});
    }
});

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