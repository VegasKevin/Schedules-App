//import roles from "./roles";
//import React from 'react';
import React from 'react';



//const mongoose = require("mongoose");
//const Schema = mongoose.Schema;

class ministry extends React.Component{
    constructor(ministryName, rolesArray) {
        super();
        this.ministryName = ministryName;
        this.rolesArray = rolesArray;
    }
}

export default ministry;

// export const MinistrySchema = new Schema ({
//     roles_First : {
//         type : {},
//         required : true
//     }
// });

//module.exports = Ministry = mongoose.model("ministry", MinistrySchema);    