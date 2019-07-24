import React from 'react';

import role from '../roles';
const parking = new role ({
    name: "parking",
    backgroundCheckRequired : "false"
});

const roving = new role({
    name: "roving",
    backgroundCheckRequired: "true"
});

const lockUp = new role({
    name: "lock up",
    backgroundCheckRequired : "true"
});

const greeter = new role ({
    name: "greeter",
    backgroundCheckRequired: "false"
});


export const roleTest = () => {
    [parking, roving, lockUp, greeter]
}