const express = require('express');
const router = express.Router();


const ScheduleTemplate = require("../../../../models/ScheduleTemplateSchema");

/*@route    GET 
@desc
@access
*/
router.get('/',
    (req, res) => {
        ScheduleTemplate.find({})
        .then(template => res.json(template))
        .catch(error => res.json(error));        
    }    
)

module.exports = router;