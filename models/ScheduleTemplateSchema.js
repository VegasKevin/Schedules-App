const MinistrySchema = require("./MinistrySchema").schema;

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ScheduleTemplateSchema = new Schema({
    NumberOfServices:{
        type: Number,
        required: true
    },
    MinistryArray: {
        type : [MinistrySchema],
        required : true
    },
    ScheduleTemplateName: {
        type: String, 
        required : true
    }
    
})

module.exports = ScheduleTemplate = mongoose.model('Schedule Templates', ScheduleTemplateSchema);