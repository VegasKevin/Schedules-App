const express = require('express');
const router = express.Router();

const ScheduleTemplateSchema = require("../../../../models/ScheduleTemplateSchema");

/**
 * @description POST endpoint for creating a new Schedule Template
 * @Route   POST  /api/schedules  ??? this endpoint may be different than just 'schedules'
 * @access  admin
 */
router.post("/", 
    (req, res) => {
        console.log("template post: " + JSON.stringify(req.body));
        const newScheduleTemplate = new ScheduleTemplateSchema({
            //MinistryArray is an Array of Ministry objects
            MinistryArray : req.body.ministryArray
        });

        newScheduleTemplate
            .save()
            .then(newTemplate => {
                res.status(201).json({ "newTemplate" : newTemplate})
            })
            .catch(error => {
                console.log("Error in createScheduleTemplate.js:  " + error);
                res.status(500).json({ "templateCreationError" : error})
            });
    }

);

module.exports = router;