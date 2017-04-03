import React from "react";
import {Router, Route, hashHistory, IndexRoute} from "react-router";
import Main from "../shared/Main";

import DashboardContainer from "../home/DashboardContainer";
import DistributorsContainer from "../distributors/DistributorsContainer";
import MainInfo from "../topic/MainInfo";
import ProductsList from "../products/ProductsList";


const routeJsx = (


    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <Route path="dashboard" component={DashboardContainer} />
            <Route path="distributors" component={DistributorsContainer} />
            <Route path="topic" component={MainInfo} />
            <Route path="products" component={ProductsList} />
            <IndexRoute component={DashboardContainer} />
        </Route>
    </Router>
    );

export {routeJsx};
