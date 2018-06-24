import React, { Component } from "react";
import "./App.css";
import { Row } from "react-materialize";

import Sidebar from "./components/Sidebar";
import IncidentMap from "./components/IncidentMap";
import ThirdPage from "./components/ThirdPage";
import MedicalQA from "./components/MedicalQA";
require("dotenv").config();

export default class App extends Component {
  state = {
    page: 0
  };

  setPage = page => this.setState({ page });

  getPage() {
    switch (this.state.page) {
      case 0:
        return <IncidentMap />;
      case 1:
        return <ThirdPage />;
      case 2:
        return <MedicalQA/>;
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
