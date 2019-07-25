const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RolesSchema = new Schema({
    roleName: {
        type: String,
        required : true
    },
    backGroundCheckRequired : {
        type : Boolean,
        required : true
    }
});

module.exports = Roles = mongoose.model("role", RolesSchema);    