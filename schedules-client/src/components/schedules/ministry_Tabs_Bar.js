import React from 'react';
//import { Link } from 'react-router-dom';
import { Tab, Menu } from 'semantic-ui-react';
//import history from '../../history';

import  {ministry_Test}  from '../../models/test models/ministry_Test';
//<Link to={route.roleName}>{route.roleName}</Link>

const panes = ministry_Test.rolesArray.map(route => ({             
        menuItem : (
            <Menu.Item key={route.roleName}>
                       {route.roleName}   
            </Menu.Item>),
        render : () => <Tab.Pane attached={false}>{route.backgroundCheckRequired}</Tab.Pane>,
       /* onClick()  {
            console.log("push: "+ route.roleName);
            history.push(`/${route.roleName}`)
        }*/   
    })
)
  
  const three = () => (    
        <Tab menu={{ fluid: true,/* horizontal: true, */tabular: true }} panes={panes} />
  )
  export default three;