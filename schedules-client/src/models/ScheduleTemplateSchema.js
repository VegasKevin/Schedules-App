import Ministry from './Ministry';

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ScheduleTemplateSchema = new Schema({
    MinistryArray: {
        type : [Ministry],
        required : true
    }
})

module.exports = ScheduleTemplate = mongoose.model('Schedule Templates', ScheduleTemplateSchema);