import React from "react";
import StartUps from '../components/pages/startUps'
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
      <Route exact path='/hello' component={StartUps} />
  </Switch>
);

export default Routes;