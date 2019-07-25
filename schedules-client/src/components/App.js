import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import history from '../history';
//import { ministry_Test } from '../../../models/test models/ministry_Test';
//import {ministry_Test} from '../models/test models/ministry_Test';
//import {Button} from 'semantic-ui-react';
// import { test_Link_Component } from '../models/test models/test_Link_Component';
// import  main  from './schedules/main';
// import two from './schedules/two';
// import three from './schedules/three';
import ministry_Tabs_Bar from './schedules/ministry_Tabs_Bar';

//Components
import MainVolunteersView from './volunteers/Main_Volunteers_View';
import CreateVolunteerView from './volunteers/CreateVolunteerView';
import UpdateVolunteerView from './volunteers/UpdateVolunteerView';
import DeleteVolunteerView from './volunteers/DeleteVolunteerView';

//const RouteArray = [{"key":"1", "path" : "/","component":main}, {"key":"2", "path":"/two","component":two}, {"key":"3", "path":"/three", "component":three}];

/*console.log(RouteArray);
console.log("roleTest: " + ministry_Test.context);
*/


// const ministryMap = ministry_Test.rolesArray.map((route) => <Route key={route.roleName} path={`/${route.roleName}`} exact component={ministry_Tabs_Bar}/>);


// ministry_Test.rolesArray.forEach(element => {
//     console.log(element.roleName + "    " + element.backgroundCheckRequired);    
//});


//const routeMap = RouteArray.map((route) => <Route key={route.key} path={route.path} exact component={route.component}/>  ); 
//const listButtons = arrayOfButtons.map((name) => <Button>{name.name}</Button>)
//<Route path='/' exact component={main} />                                        
//console.log("routeMap: " + routeMap);
const App = () => {
    return (
        <div className='ui container'>
            <Router history={history}>                    
                <Switch>
                    {/* {ministryMap}                                    */}
                    <Route path="/volunteers" exact component={() => <MainVolunteersView/>}/>
                    <Route path="/volunteers/create" exact component={props => <CreateVolunteerView {...props}/>} />
                    <Route path="/volunteers/update" exact component={props => <UpdateVolunteerView {...props}/>} />
                    <Route path="/volunteers/delete" exact component={props => <DeleteVolunteerView  {...props} />}/>
                </Switch>
            </Router>            
        </div>
    );
};

export default App;