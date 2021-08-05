import 'antd/dist/antd.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { NotFound, PrivateRoute } from './components/common';
import { AdminLayout } from './components/layout';
import { AuthFeature } from './features/auth';

function App() {
    return (
        <Switch>
            <Route path="/login">
                <AuthFeature></AuthFeature>
            </Route>

            <PrivateRoute path="/admin">
                <AdminLayout />
            </PrivateRoute>

            <Route >
                <NotFound />
            </Route>

        </Switch>
    );
}

export default App;
