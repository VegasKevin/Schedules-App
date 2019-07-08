import React from 'react';
import { withRouter } from 'react-router-dom';
import { Tab} from 'semantic-ui-react';

import  {ministry_Test}  from '../../models/test models/ministry_Test';

//class Ministry_Link_Tab extends React.Component{
    

const render_Ministry_Tabs = 
        ministry_Test.rolesArray.map(route => ({             
                "menuItem" : route.roleName,
                "render" : <Tab.Pane attached={false}>{route.roleName}</Tab.Pane>
        })
        )
        //console.log("render_Ministry_Tabs: "  + render_Ministry_Tabs);
        render_Ministry_Tabs.forEach(element => {
            console.log("element: " + element.ministyName);
        });
        // const panes = [
        // { "menuItem" : ministry_Test.rolesArray[2].roleName, "render" : () => <Tab.Pane attached={false}>ministry_Test.rolesArray[2].roleName</Tab.Pane> }

        // ]

// function getMinistryTabs(ministry_Test){
//     return ministry_Test.rolesArray.map( function(aRole){
//         return {
//             menuItem : aRole.roleName,
//             render : () => 
//                 <Tab.Pane attached={false}>{aRole.roleName}</Tab.Pane>
                
//         }
//     })
    
// }
//console.log("~~~~~~~~~~ " + getMinistryTabs(ministry_Test).roleName);
        const Ministry_Link_Tab = () => (
            <Tab menu={{ secondary : true }} panes={render_Ministry_Tabs}/>
        )
    
//}

export default withRouter(Ministry_Link_Tab);