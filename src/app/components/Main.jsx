import React from 'react';
import {Provider} from 'react-redux';
import {store} from '../store';
import {ConnectedDashboard} from './Dashboard';
import {ConnectedLogin} from './Login';
import { BrowserRouter, Route } from 'react-router-dom';
import {history} from '../store/history';
import {Redirect} from 'react-router';
import {ConnectedNavigation} from './Navigation';
import {ConnectedTaskDetail} from './TaskDetail';

const RouteGuard = Component => ({match}) => {
    console.info("Route guard", match);
    if (!store.getState().session.authenticated) {
        return <Redirect to="/" />
    } else {
        return <Compoent match={match} />;
    }
}

export const Main = () => (
    <BrowserRouter history={history}>
        <Provider store={store}>
            <div>
                <ConnectedNavigation />
                <Route exact path="/dashboard" render={RouteGuard(ConnectedDashboard)}/>
                <Route exact path="/task/:id" render={RouteGuard(ConnectedTaskDetail)} />
            </div>
        </Provider>
    </BrowserRouter>
)