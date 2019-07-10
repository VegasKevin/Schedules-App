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
        type : [String],
        required : false
    },
    ministries: {
        type: [String],
        required: false
    }
});

module.exports = Volunteer = mongoose.model('volunteer', VolunteerSchema);