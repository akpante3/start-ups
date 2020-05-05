import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  "maxWidth": '800px',
  height: '300px',
};

export class MapContainer extends Component {
  render() {
    return (
      <div className="map">
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{
          lat: -1.2884,
          lng: 36.8233
          }}
        />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ''
})(MapContainer);