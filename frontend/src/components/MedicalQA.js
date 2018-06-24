import React, {Component} from "react";
import {Col, Icon, Input, Navbar, NavItem, Row} from "react-materialize";

const headerText = {
  fontSize: '30px',
  textAlign: 'center',
};

export default class MedicalQA extends Component {
  render() {
    return (
      <div>
        <Navbar right brand="Your Q&A" style={{backgroundColor:'#F0F0F0', color:"#707070"}}>
          <NavItem style={{color:"#707070"}}>Home</NavItem>
          <NavItem>Ask</NavItem>
          <NavItem>Notification</NavItem>
          <Input type='search' label='search' icon='search' style={{padding:'25px', width:'30vw'}}/>
        </Navbar>
        <Row>
          <Col s={2}>1</Col>
          <Col s={10}>2</Col>
        </Row>
      </div>
    );
  }
}
