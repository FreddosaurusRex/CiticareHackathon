import React, { Component, Fragment } from "react";
import {Navbar, NavItem, Icon, Button, CardTitle, Card, Row, Col} from "react-materialize";

export default class CasePage extends Component {
  state = {
    locations: [
      {
        name: "Hartford Public Library",
        address: "744 Park St, Hartford, CT 06106",
        logo:
          "https://media.discordapp.net/attachments/271648227319742466/460492800199491595/Untitled.png",
        description: "Get others to sign up for the program!",
        dist: 0.6
      },
      {
        name: "Downtown YMCA",
        address: "90 State House Square, Hartford, CT 06103",
        logo: "http://www.ghymca.org/images/layout/yLogoBlue.png",
        description: "Ask for Anthony at the front office.",
        dist: 0.8
      },
      {
        name: "Boys & Girls Club of Hartford",
        address: "170 Sigourney St, Hartford, CT 06105",
        logo:
          "https://cdn.discordapp.com/attachments/460089829615599617/460493268430618644/BoysGirlsClubLOGO.png",
        description: "Get your kids to join and participate in fun activities!",
        dist: 1.5
      }
      // {
      //   name: "Catholic Family Services",
      //   logo: "https://ccaoh.org/wp-content/uploads/2017/07/logo-264x80.jpg",
      //   dist: 1
      // }
      //   name: Boys & Girls Clubs of Hartford
      // link: https://bgchartford.org/
      // physical address: 170 Sigourney St, Hartford, CT 06105
      // img link: https://i1.wp.com/bgchartford.org/wp-content/uploads/2016/12/mainlogo.png?zoom=1.25&fit=480%2C140&ssl=1
      // name: Catholic Family Services
      // link: https://www.hplct.org/
      // physical address: 45 Wadsworth St # 4, Hartford, CT 06106
      // img link: https://www.hplct.org/assets/images/template/header_logo.jpg
    ]
  };

  render() {
    return (
      <div>
        <Button
          floating
          icon="contact_support"
          large
          style={{ position: "fixed", bottom: "45px", right: "45px" }}
        />
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
            <Icon>delete</Icon>
          </NavItem>
        </Navbar>
        <div
          style={{
            background: "#f5f5f5",
            padding: "20px"
          }}
        >
          <Row>
            {this.state.locations.map(loc => {
              return (
                <Col s={12} m={3}>
                  <Card className='small'
                        header={<CardTitle image={loc.logo} />}>
                    <b>{loc.name}</b>
                    <p style={{ color: "grey" }}>{loc.dist}mi</p>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </div>
        <div style={{ padding: "40px" }}>
          <h5>
            <Icon small>error</Icon> Recent Incidents
          </h5>
          <p>3 incidents in the last week</p>
          <h5>
            <Icon small>person</Icon> Contacts Made
          </h5>
          <ul>
            <li>Mary - 36</li>
            <li>Jasmine - 10</li>
            <li>
              <a href="#">Add a contact...</a>
            </li>
          </ul>
          <h5>
            <Icon small>notes</Icon> Notes
          </h5>
          <ul>
            <li>
              Jasmine is enrolled in fit-to-win and visits the library every few
              days.
            </li>
            <li>
              <a href="#">Add a note...</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
