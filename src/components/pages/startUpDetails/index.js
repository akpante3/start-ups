import React from 'react';
import Details from './Details'
import './StartUpDetails.css'


/**
 * @description startup detail page
 * @returns {object} the component
 */
class StartUpDetails extends React.Component {
  render() {
    return (
      <div className='start-up-details'>
        <div className="wrapper wrapper--detail">
            <Details />
        </div>
      </div>
    );
  }
}

export default StartUpDetails;