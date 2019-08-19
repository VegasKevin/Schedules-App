const express = require('express');
const router = express.Router();
const { check, validationResult } = require("express-validator");

//Volunteers Model (Schema)
const Volunteers = require('../../../../models/Volunteers');

//@route    DELETE api/volunteers
//@desc     Remove a Volunteer from the VOlunteers Database
//@access   ADMIN
router.delete("/", [
    check("_id").not().isEmpty()
],
(req, res) => {
    if (requestHasErrors(req)) {
        Volunteers.findOneAndDelete({ _id : req.body._id})
        .then(() => res.status(204).json())
    }else {
        return res.status(422).json({"error" : "id parameter format wasn't properly used"})
    }
    
})

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