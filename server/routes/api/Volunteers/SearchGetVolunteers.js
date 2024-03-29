const express = require('express');
const router = express.Router();
const { body, validationResult, oneOf } = require("express-validator");

//Volunteers Model (Schema)
const Volunteers = require('../../../../models/Volunteers');

//@route    GET api/volunteers/search
//@desc     Get volunteer(s) based on the firstName & lastName parameters in the body of the request
//@access   ADMIN
router.post("/", oneOf(
    [
        body("firstName", "First Name field can't be empty").exists(),
        body("lastName", "Last Name field can't be empty").exists()
    ]),
    (req, res) =>{
        //console.log("req.body Stringify: " + JSON.stringify(req.body));
    if(requestHasErrors(req)){
        Volunteers.createIndexes([{ "firstName" : "text"}, {"lastName" : "text"}]);
        if(req.body.firstName && req.body.lastName){
           Volunteers.find({ $text: ({$search : req.body.firstName} ,{$search : req.body.lastName})})
            .sort({ lastName : 1 })
            .then(volunteers => res.json(volunteers))
            .catch(error => res.json(error));
        }
        else if(req.body.firstName && !req.body.lastName){
            Volunteers.find({ $text: {$search : req.body.firstName}})
            .sort ({ lastName: 1 })
            .then(volunteers => res.json(volunteers))
            .catch(error => res.json(error));
        }
        else if(!req.body.firstName && req.body.lastName){
            Volunteers.find({ $text: {$search : req.body.lastName}})
            .sort ({ lastName: 1 })
            .then(volunteers => res.json(volunteers))
            .catch(error => res.json(error));
        }
        else{
            return res.status(202).json( {"Search Not Found" : "The Request has been process, but no results found based on your search." });
        }
    } else {
        return res.status(422).json({"Error" : "Error in passing some of the parameters"})
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