import React, { Component } from "react";
import "./App.css";
import { Row } from "react-materialize";

import Sidebar from "./components/Sidebar";
import IncidentMap from "./components/IncidentMap";
require("dotenv").config();

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <Row id="content"
             style={{marginBottom: "0px" }}>
          <IncidentMap />
        </Row>
      </div>
    );
  }
}
