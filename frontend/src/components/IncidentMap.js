import React, { Component } from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Circle
} from "react-google-maps";

// const icon = {
//   path: "M 0 0 L 200 0 L 100 200 z",
//   fillColor: "red",
//   strokeColor: "blue",
//   strokeWidth: 3
// };

const MapWithAMarker = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap defaultZoom={15} defaultCenter={{ lat: 41.763, lng: -72.68509 }}>
      <Circle
        center={{ lat: 41.763, lng: -72.68509 }}
        radius={152.4}
        options={{ strokeColor: "red", fillColor: "red" }}
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
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100vh` }} />}
          mapElement={<div style={{ height: `100%`, width: `100%` }} />}
        />
      </div>
    );
  }
}
