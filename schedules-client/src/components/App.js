import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

//import history from '../history';

const App = () => {
    return (
        <div className='ui container'>
            
            <Router>
                <Switch>
                    <Route path='/' />
                </Switch>
            </Router>
        </div>
    );
};

export default App;