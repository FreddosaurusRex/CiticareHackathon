import React, {Component} from "react";
import {Circle, GoogleMap, InfoWindow, withGoogleMap, withScriptjs} from "react-google-maps";
import InfoBox from "react-google-maps/lib/components/addons/InfoBox";
import {Button, Card, CardTitle, Col} from "react-materialize";

// const icon = {
//   path: "M 0 0 L 200 0 L 100 200 z",
//   fillColor: "red",
//   strokeColor: "blue",
//   strokeWidth: 3
// };


const MapWithAMarker = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap defaultZoom={15} defaultCenter={{lat: 41.759903, lng: -72.679145}}>
      <Circle
        center={{lat: 41.759903, lng: -72.679145}}
        radius={152.4}
        options={{strokeColor: "red", fillColor: "red"}}
      />
      <InfoWindow position={{lat: 41.759468, lng: -72.679152}}>
        <div style={{ lineHeight: 1.8}}>
          <b>68 Wadsworth Street</b>
          <br />
          3 recent incidents
          <br />
          Last incident: 2h
          <br />
          <Button style={{marginLeft: "20px"}} waves='light'>Take Case</Button>
        </div>
      </InfoWindow>
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
          loadingElement={<div style={{height: `100%`}}/>}
          containerElement={<div style={{height: `100vh`}}/>}
          mapElement={<div style={{height: `100%`, width: `100%`}}/>}
        />
      </div>
    );
  }
}
