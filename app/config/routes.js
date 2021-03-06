import React from "react";
import {Router, Route, hashHistory, IndexRoute} from "react-router";
import Main from "../shared/Main";

import DashboardContainer from "../home/DashboardContainer";
import MainInfo from "../topic/MainInfo";
import Categories from "../products/Categories";


const routeJsx = (


    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <Route path="dashboard" component={DashboardContainer} />
            <Route path="topic/:id" component={MainInfo} />
            <Route path="categories" component={Categories} />
            <IndexRoute component={DashboardContainer} />
        </Route>
    </Router>
    );

export {routeJsx};
