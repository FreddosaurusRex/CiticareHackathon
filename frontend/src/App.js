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

require("dotenv").config();

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
        </Row>
      </div>
    );
  }
}
