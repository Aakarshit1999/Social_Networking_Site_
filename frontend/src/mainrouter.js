import React from 'react';
import { Route, Switch } from "react-router-dom";
import Home from "./core/home";
import Menu from './core/menu';
import Signup from './user/signup';
import Signin from './user/signin';
const Mainrouter = () => (
    <div>
        <Menu />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/signin" component={Signin} />
        </Switch>
    </div>
);

export default Mainrouter;