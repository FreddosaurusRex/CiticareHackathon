import React, { Component } from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const MapWithAMarker = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
      <Marker position={{ lat: -34.397, lng: 150.644 }} />
    </GoogleMap>
  ))
);
export default class IncidentMap extends Component {
  render() {
    return (
      <div>
        <p>andi {process.env.REACT_APP_CRM_NAME}</p>
        <MapWithAMarker
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${
            process.env.REACT_APP_GMAPS_API_KEY
          }`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%`, width: `400px` }} />}
        />
      </div>
    );
  }
}
