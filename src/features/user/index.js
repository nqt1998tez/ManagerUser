import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import MainPage from './pages/MainPage';

export default function UserFeature() {

    
    const match = useRouteMatch();
    console.log(match);

    return (
        <Switch>
            <Route path={match.path} exact>
                <MainPage />
            </Route>
        </Switch>
    )
}

