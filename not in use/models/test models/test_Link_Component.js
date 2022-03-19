import React from 'react';
//import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';


export const test_Link_Component = (ministryData) => {
    return(    
        <Button color="blue">{ministryData.backgroundCheckRequired}</Button>
    )};
// class test_Link_Component extends React.Component {
//     constructor(ministryData){
//         <Link to={ministryData.roleName }>{ministryData.backgroundCheckRequired}</Link>
//     }
// }

// export default test_Link_Component;