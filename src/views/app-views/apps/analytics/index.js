import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
// import GetReviews from "../get-review/get-reviews";
import Benchmark from "./Benchmark";
import Invitation from "./Invitation-conversion";
import OrganicReach from "./Organic-reach";
import Overview from "./Overview";
import ServiceReview from "./Service-review-ratings";
import TrustScore from "./TrustScore-insights";
// import Loading from 'components/shared-components/Loading';

const Analytics = ({ match }) => (
  <Switch>
			<Redirect exact from={`${match.url}`} to={`${match.url}/overview`} />
			<Route path={`${match.url}/overview`} component={Overview} />
            <Route path={`${match.url}/trustscore`} component={TrustScore} />
            <Route path={`${match.url}/Servicereviewratings`} component={ServiceReview} />
            <Route path={`${match.url}/Invitationconversion`} component={Invitation} />
            <Route path={`${match.url}/organicreach`} component={OrganicReach} />
            <Route path={`${match.url}/benchmark`} component={Benchmark} />
		</Switch>
);

export default Analytics;