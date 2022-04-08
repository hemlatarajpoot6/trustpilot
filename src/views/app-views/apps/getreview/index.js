import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import AutomaticFedback from "./automic";
import GetReviews from "./getreviews";
import InvitationsHistory from "./invitation";
import GetInvitation from "./invitation";
import InvitationSetting from "./invitation-setting";
import Overview from "./overview";
import ServiceInvite from "./getreviews/inviteCustomer/SimpleFile";
import TemplateEditor from "./template-editor";
import Unlock from "./unlock/Unlock";
import BasicInvitation from "./getreviews/inviteCustomer/BasicInvitation";
// import Loading from 'components/shared-components/Loading';

const getReviews = ({ match }) => (
  <Switch>
			<Redirect exact from={`${match.url}`} to={`${match.url}/overview`} />
			<Route path={`${match.url}/overview`} component={Overview} />
			<Route path={`${match.url}/unlock`} component={Unlock} />
			<Route path={`${match.url}/invitationsHistory`} component={InvitationsHistory} />
            <Route path={`${match.url}/getreviews`} component={GetReviews} />
			<Route path={`${match.url}/invitecustomer`} component={ServiceInvite} />
			<Route path={`${match.url}/basicinvitation`} component={BasicInvitation} />
			<Route path={`${match.url}/Invitationstatus`} component={GetInvitation} />
			<Route path={`${match.url}/AutomaticFeedbackService`} component={AutomaticFedback} />
			<Route path={`${match.url}/Templateeditor`} component={TemplateEditor} />
			<Route path={`${match.url}/Invitationsettings`} component={InvitationSetting} />
		</Switch>
);

export default getReviews;