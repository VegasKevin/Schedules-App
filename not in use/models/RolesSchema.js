import React from 'react';
//const mongoose = require("mongoose");
//const Schema = mongoose.Schema;

class RolesSchema extends React.Component{

    constructor(roleName, backGroundCheckRequired) {
        super();
        this.roleName = roleName;
        this.backGroundCheckRequired = backGroundCheckRequired;
    }
}

export default RolesSchema;
// export const RolesSchema = new Schema({
//     roleName: {
//         type: String,
//         required : true
//     },
//     backgroundCheckRequired : {
//         type : Boolean,
//         required : true
//     }
// });

//module.exports = Role = mongoose.model("role", RolesSchema);    