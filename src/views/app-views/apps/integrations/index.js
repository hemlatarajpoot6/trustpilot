import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
// import Loading from 'components/shared-components/Loading';
import Ecommerce from "../e-commerce";
import Payment from "./payment";
import Developers from "./developers";
import Marketing from "./marketing";
import CustomerSupport from "./customer-support";
import Labs from "./labs";

const Review = ({ match }) => (
  <Switch>
			<Redirect exact from={`${match.url}`} to={`${match.url}/ecommerce`} />
			<Route path={`${match.url}/ecommerce`} component={Ecommerce} />
			<Route path={`${match.url}/payment`} component={Payment} />
            <Route path={`${match.url}/Developers`} component={Developers} />
            <Route path={`${match.url}/Marketing`} component={Marketing} />
            <Route path={`${match.url}/Customersupport`} component={CustomerSupport} />
            <Route path={`${match.url}/Labs`} component={Labs} />
            
		</Switch>
);

export default Review;