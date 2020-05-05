import React from 'react';
import './styles.css';
import Routes from '../routes'
import history from '../helpers/history'
import {
  BrowserRouter as Router,
} from "react-router-dom";

/**
 * @description Root component
 * @returns {object} the component
 */
class Root extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Routes />
      </Router>
    );
  }
}

export default  Root;
