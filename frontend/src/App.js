import React, { Component, Fragment } from "react";
import "./App.css";
import { Row } from "react-materialize";

import Sidebar from "./components/Sidebar";
import IncidentMap from "./components/IncidentMap";
import MedicalQA from "./components/MedicalQA";
import CasePage from "./components/CasePage";
import Resources from "./components/Resources";
require("dotenv").config();

export default class App extends Component {
  state = {
    page: 3
  };

  setPage = page => this.setState({ page });

  getPage() {
    switch (this.state.page) {
      case 0:
        return <IncidentMap />;
      case 2:
        return <MedicalQA />;
      case 3:
        return <Resources />;
      case 5:
        return <CasePage />;
      default:
        return <Fragment />;
    }
  }

  render() {
    return (
      <div className="App">
        <Sidebar page={this.state.page} setPage={this.setPage} />
        <Row id="content">{this.getPage()}</Row>
      </div>
    );
  }
}
