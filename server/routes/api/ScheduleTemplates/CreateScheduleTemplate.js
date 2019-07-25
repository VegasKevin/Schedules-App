const express = require('express');
const router = express.Router();

const ScheduleTemplate = require("/../../../../models/ScheduleTemplateSchema");

/**
 * @description POST endpoint for creating a new Schedule Template
 * @Route   POST  /api/schedules  ??? this endpoint may be different than just 'schedules'
 * @access  admin
 */
router.post("/", 
    (req, res) => {
        const newScheduleTemplate = new ScheduleTemplate({
            //MinistryArray is an Array of Ministry objects
            MinistryArray : req.body.ministryArray
        });

        newScheduleTemplate
            .save()
            .then(newTemplate => {
                res.status(201).json({ "newTemplate" : newTemplate})
            })
            .catch(error => {
                console.log("Error in createScheduleTemplate.js");
                res.status(500).json({ "templateCreationError" : error})
            });
    }

);

module.exports = router;