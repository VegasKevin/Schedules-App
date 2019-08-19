//import roles from "./roles";
//import React from 'react';
//import React from 'react';
const React = require("react");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Roles = require('./RolesSchema').schema;

const MinistrySchema = new Schema({
    ministryName: {
        type: String,
        required: true
    },
    ministryObject : {
        type: [Roles],
        required: true
        //default: undefined
    } 
});

module.exports = aMinistry = mongoose.model("Ministry", MinistrySchema);



// class Ministry extends React.Component{
//     constructor(ministryName, rolesArray) {
//         super();
//         this.ministryName = ministryName;
//         this.rolesArray = rolesArray;
//     }
// }

// //export default Ministry;
// module.exports = Ministry;

// export const MinistrySchema = new Schema ({
//     roles_First : {
//         type : {},
//         required : true
//     }
// });

//module.exports = Ministry = mongoose.model("ministry", MinistrySchema);    