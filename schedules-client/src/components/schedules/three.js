import React from 'react';
//import { connect } from 'react-redux';
import {  Tab } from 'semantic-ui-react';

//import  Ministry_Link_Tab  from './Ministry_Link_Tab';
import  {ministry_Test}  from '../../models/test models/ministry_Test';

//class three extends React.Component {
    
    
    // createButtons = (array) =>  {
    //     array.map(() => 
    //         <div className='button'>
    //             <Button>arrayOfButtons</Button>
    //         </div>
            
    //     );
    // }
  //  render () {
      //  console.log(Ministry_Link_Tab);
        // const arrayOfButtons = [{"name" : "THREEE"}, {"name" : "3"}, {"name" :"Steve"}];
        // const listButtons = arrayOfButtons.map((name) => <Button>{name.name}</Button>)

        const panes = ministry_Test.rolesArray.map(route => ({             
            menuItem : route.roleName,
            render : () => <Tab.Pane attached={false}>{route.backgroundCheckRequired}</Tab.Pane>
    })
    )
    // panes.forEach(element => {
    //     console.log("menuItem: " + element);
    // })
        // const panes = [
        //     { menuItem: 'Tab 1', render: () => <Tab.Pane>Tab 1 Content</Tab.Pane> },
        //     { menuItem: 'Tab 2', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
        //     { menuItem: 'Tab 3', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
        //   ]
          
          const three = () => (
            <Tab menu={{ fluid: true, horizontal: true, tabular: true }} panes={panes} />
          )
    //};
          export default three;
//         return (
//             <div>
//                 <div>three.js </div>                           
//                 <div>{paneView}</div>
//                 <div>djdjd</div>
//             </div>
//         );
//     };
// }

// export default three;