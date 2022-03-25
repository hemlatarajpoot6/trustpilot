import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
// import Loading from 'components/shared-components/Loading';
import review from "./service";
import Product from "./product";
import Upgrade from "./product/tabs/Upgrade";

const Review = ({ match }) => (
  <Switch>
			<Redirect exact from={`${match.url}`} to={`${match.url}/service`} />
			<Route path={`${match.url}/service`} component={review} />
			<Route path={`${match.url}/product`} component={Product} />
			<Route path={`${match.url}/upgrade`} component={Upgrade} />
		</Switch>
);

export default Review;