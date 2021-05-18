import Dashboard from "./dashboard";
import Login from "./login";
import NotFound from "./notFound";
import Register from "./register";
import React from "react";
import {Route, BrowserRouter as Router, Switch, Redirect} from "react-router-dom";

const Routes = (props)=>(
    <Router {...props}>
        <Switch>
            <Route exact path="/">
                <Login/>
            </Route>
            <Route path="/login">
                <Login/>
            </Route>
            <Route path="/register">
                <Register/>
            </Route>
            <Route path="/dashboard">
                <Dashboard/>
            </Route>
            <Route path="*">
                <NotFound/>
            </Route>
        </Switch>
    </Router>
);
export default Routes;