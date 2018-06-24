import React, { Component, Fragment } from "react";
import { Navbar, NavItem, Icon } from "react-materialize";

export default class CasePage extends Component {
  render() {
    return (
      <div>
        <Navbar
          right
          brand={
            <Fragment>
              <h5 style={{ marginTop: "6px", marginBottom: "6px" }}>
                Jasmine Hudson
              </h5>
              <h6 style={{ marginTop: 0, marginBottom: 0 }}>60 Wadsworth St</h6>
            </Fragment>
          }
        >
          <NavItem className="active" ref="#">
            <p>Resources</p>
          </NavItem>
          <NavItem href="#">
            <p>Checklist</p>
          </NavItem>
          <NavItem href="#">
            <p>Reminders</p>
          </NavItem>
          <NavItem href="#">
            <p>Archive</p>
          </NavItem>
          <NavItem>
            <p>{"                  "}</p>
          </NavItem>
          <NavItem>
            <Icon>delete</Icon>
          </NavItem>
        </Navbar>
        <div style={{ background: "#f5f5f5", padding: "20px" }}>
          <div style={{ display: "inline-block", textAlign: "center" }}>
            <img
              style={{ width: "80px" }}
              src="https://www.denverymca.org/sites/all/themes/ymca/logo.svg"
            />
            <br />
            <b>YMCA</b>
            <p style={{ color: "grey" }}>0.7mi</p>
          </div>
        </div>
        <p>AHA!</p>
      </div>
    );
  }
}
