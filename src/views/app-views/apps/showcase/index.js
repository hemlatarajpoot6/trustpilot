import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
// import Loading from 'components/shared-components/Loading';
import WebsiteWidgets from "./Website-widgets";
import SocialSharing from "./Social-sharing";
import EmailWidgets from "./Email-widgets";
import MarketingAssests from "./Marketing-assets";

const Showcase = ({ match }) => (
  <Switch>
			<Redirect exact from={`${match.url}`} to={`${match.url}/website`} />
			<Route path={`${match.url}/website`} component={WebsiteWidgets} />
			<Route path={`${match.url}/social`} component={SocialSharing} />
            <Route path={`${match.url}/Emailwidgets`} component={EmailWidgets} />
            <Route path={`${match.url}/Marketingassets`} component={MarketingAssests} />
		</Switch>
);

export default Showcase;