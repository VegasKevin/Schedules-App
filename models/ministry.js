import roles from "./roles";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MinistrySchema = new Schema ({
    roles_First : {
        type : {},
        required : true
    }
});

module.exports = Ministry = mongoose.model("ministry", MinistrySchema);    