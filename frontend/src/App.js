import React, { Component } from "react";
import "./App.css";
import {
  Collapsible,
  CollapsibleItem,
  Row,
  Col,
  SideNav,
  SideNavItem,
  Button
} from "react-materialize";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
require("dotenv").config();

const MapWithAMarker = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
      <Marker position={{ lat: -34.397, lng: 150.644 }} />
    </GoogleMap>
  ))
);

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <SideNav
          fixed
          trigger={<Button>SIDE NAV DEMO</Button>}
          options={{ closeOnClick: true }}
        >
          <SideNavItem
            userView
            user={{
              background: "https://react-materialize.github.io/img/office.jpg",
              image: "https://react-materialize.github.io/img/yuna.jpg",
              name: "John Doe",
              email: "jdandturk@gmail.com"
            }}
          />
          <SideNavItem href="#!icon" icon="cloud">
            First Link With Icon
          </SideNavItem>
          <SideNavItem href="#!second">Second Link</SideNavItem>
          <SideNavItem divider />
          <SideNavItem subheader>Subheader</SideNavItem>
          <SideNavItem waves href="#!third">
            Third Link With Waves
          </SideNavItem>
        </SideNav>
        <Row style={{ paddingLeft: "320px" }}>
          <p>andi {process.env.REACT_APP_CRM_NAME}</p>
          <MapWithAMarker
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${
              process.env.REACT_APP_GMAPS_API_KEY
            }`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%`, width: `400px` }} />}
          />
        </Row>
      </div>
    );
  }
}
