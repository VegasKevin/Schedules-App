const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VolunteerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    emailAddress: {
        type: String,
        required: true
    },
    backGroundCheck: {
        type : Boolean,
        required : true
    },
    phoneNumber: {
        type : String,
        required : false
    },
    preferences: {
        type : [],
        required : false
    },
    ministries: {
        type: [],
        required: false
    }
});

module.exports = Volunteers = mongoose.model('volunteer', VolunteerSchema);