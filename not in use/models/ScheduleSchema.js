import Ministry from './Ministry';

const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const ScheduleSchema = new Schema ({
    ministriesArray: {
        type: [Ministry],
        required : true
    },
    scheduleDate : {
        type: Date,
        required: true
    },
});

module.exports = ScheduleSchema = mongoose.model('Schedules', ScheduleSchema);
