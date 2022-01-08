import React from 'react';
import {Route , Switch} from "react-router-dom";
import Home from './core/home';
import Menu from './core/menu';

import Signup from './user/signup';
import Signin from './user/signin';
import Profile from './user/profile';
import Users from './user/user';




const MainRouter = () => (
    <div>
        <Menu/>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/users" component={Users} />

            <Route exact path="/signup" component={Signup} />
            <Route exact path="/signin" component={Signin} />
            <Route exact path="/user/:userId" component={Profile} />

        </Switch>

    </div>

    
);

export default MainRouter;