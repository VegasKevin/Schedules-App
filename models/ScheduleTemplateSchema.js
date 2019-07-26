const MinistrySchema = require("./MinistrySchema").schema;

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ScheduleTemplateSchema = new Schema({
    MinistryArray: {
        type : [MinistrySchema],
        required : true
    },
    numberOfServices:{
        type: Number,
        required: true
    }
})

module.exports = ScheduleTemplate = mongoose.model('Schedule Templates', ScheduleTemplateSchema);