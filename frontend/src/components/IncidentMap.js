import React, { Component } from "react";
import {Icon} from "react-materialize"
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  Circle
} from "react-google-maps";

const icon = {
    path: 'M 0 0 L 200 0 L 100 200 z',
    fillColor: 'red',
    strokeColor: 'blue',
    strokeWidth: 3,
};

const MapWithAMarker = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
      <Marker
          position={{ lat: -34.397, lng: 150.644 }}
          icon={icon}
      />
    </GoogleMap>
  ))
);
export default class IncidentMap extends Component {
  render() {
    return (
      <div>
        <MapWithAMarker
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${
            process.env.REACT_APP_GMAPS_API_KEY
          }`}
          heatmapLibrary={true}
          heatmap={{}}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100vh` }} />}
          mapElement={<div style={{ height: `100%`, width: `100%` }} />}
        />
      </div>
    );
  }
}
