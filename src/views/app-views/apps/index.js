import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from 'react-router-dom';
import Loading from 'components/shared-components/Loading';

const Apps = ({ match }) => (
  <Suspense fallback={<Loading cover="content"/>}>
    <Switch>
      <Route path={`${match.url}/mail`} component={lazy(() => import(`./mail`))} />
      <Route path={`${match.url}/chat`} component={lazy(() => import(`./chat`))} />
      <Route path={`${match.url}/review`} component={lazy(() => import(`./review`))} />
      <Route path={`${match.url}/analytics`} component={lazy(() => import(`./analytics`))} />
      <Route path={`${match.url}/getreview`} component={lazy(() => import(`./getreview`))} />
      <Route path={`${match.url}/showcase`} component={lazy(() => import(`./showcase`))} />
      <Route path={`${match.url}/integrations`} component={lazy(() => import(`./integrations`))} />
      <Route path={`${match.url}/calendar`} component={lazy(() => import(`./calendar`))} />
      <Route path={`${match.url}/project`} component={lazy(() => import(`./project`))} />
      <Route path={`${match.url}/ecommerce`} component={lazy(() => import(`./e-commerce`))} />
      <Redirect from={`${match.url}`} to={`${match.url}/review`} />
    </Switch>
  </Suspense>
);

export default Apps;