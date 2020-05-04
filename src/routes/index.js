import React from "react";
import StartUps from '../components/pages/startUps'
import StartUpDetails from '../components/pages/startUpDetails'
import {
  Switch,
  Route,
} from "react-router-dom";

/**
 * @description Routes list
 * @returns {object} the component
 */
const Routes = () => ( 
  <Switch>
      <Route exact path='/' component={StartUps} />
      <Route path='/:id' component={StartUpDetails} />
  </Switch>
);

export default Routes;