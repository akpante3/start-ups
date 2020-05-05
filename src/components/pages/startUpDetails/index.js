import React from 'react';
import Details from './Details'
import './StartUpDetails.css'
import { withRouter } from 'react-router-dom'
import axios from 'axios';
import backButton from "../../icons/direction.svg";

/**
 * @description startup detail page
 * @returns {object} the component
 */
class StartUpDetails extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      organizations: {}
    }
  }
  componentDidMount () { 
    const organizations = new Promise((resolve) => resolve(axios.get('http://localhost:8008/organizations.json')))
    organizations.then((data) => {
      // fetch single data
      const payload = data.data.organizations.filter((data) => this.props.match.params.id == data.id )
      this.setState(...this.state, { organization: payload })
    })
  }


  render() {
    return (
      <div className='start-up-details'>
        <div className='start-up-details__back-button'>
          <span dangerouslySetInnerHTML={{__html: backButton }} />
        </div>
        <div className="wrapper wrapper--detail">
            <Details organization={this.state.organization} />
        </div>
      </div>
    );
  }
}

export default withRouter(StartUpDetails);