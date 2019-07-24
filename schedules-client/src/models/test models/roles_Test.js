//import React from 'react';

import RolesSchema from '../RolesSchema';
const parking = new RolesSchema (
    "parking",     //roleName
    "false"         //backgroundCheckRequired
);

const roving = new RolesSchema(
    "roving",
    "true"
);

const lockUp = new RolesSchema(
    "lock up",
     "true"
);

const greeter = new RolesSchema (
    "greeter",
    "false"
);


export const roleTest = [parking, roving, lockUp, greeter];
