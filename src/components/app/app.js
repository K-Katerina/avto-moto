import React from 'react';
import {Redirect, Switch, Route, BrowserRouter} from 'react-router-dom';
import {CarPage} from '../../pages/car-page';

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={'/'} component={CarPage}/>
                <Redirect to={'/'}/>
            </Switch>
        </BrowserRouter>
    );
};

export default App;
