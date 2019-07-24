const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RolesSchema = new Schema({
    roleName: {
        type: String,
        required : true
    },
    backgroundCheckRequired : {
        type : Boolean,
        required : true
    }
});

module.exports = Role = mongoose.model("role", RolesSchema);    