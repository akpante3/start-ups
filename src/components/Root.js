import React from 'react';
import './styles.css';
import Routes from '../routes'
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
      <div className='root'>
        <Router>
          <Routes />
        </Router>
      </div>
    );
  }
}

export default Root;
