import React, { Component, Fragment } from "react";
import {
  Navbar,
  Row,
  Col,
  NavItem,
  Icon,
  Card,
  CardTitle,
  Collection,
  CollectionItem
} from "react-materialize";

// name: Downtown YMCA
// link: http://www.ghymca.org/branch.cfm?bid=01
// physical address: 90 State House Square, Hartford, CT 06103
// img link: http://www.ghymca.org/images/layout/yLogoBlue.png
// name: Hartford Public Library, Park Street Branch
// link: https://www.hplct.org/
// physical address: 744 Park St, Hartford, CT 06106
// img link: https://www.hplct.org/assets/images/template/header_logo.jpg

export default class Resources extends Component {
  state = {
    websites: [
      {
        name: "Anxiety and Depression Association of America",
        link: "https://adaa.org/"
      },
      {
        name: "Mental Health America",
        link: "http://www.mentalhealthamerica.net/"
      },
      {
        name: "National Alliance on Mental Illness",
        link: "https://www.nami.org/"
      }
    ],
    locations: [
      {
        name: "Hartford Behavioral Health",
        address: "1 Main St, Hartford, CT 06106",
        logo: "https://www.hbh1.org/images/clientid_277/HBH_40TH_logo-2.png",
        description: "See Mary in the second floor office."
      },
      {
        name: "Dept. of Mental Health and Addiction Services",
        address: "410 Capitol Ave, Hartford, CT 06134",
        logo: "http://www.ct.gov/dmhas/lib/dmhas/v4/v4_l_header_01.gif",
        description: "Go to room 06-112."
      },
      {
        name: "Downtown YMCA",
        address: "90 State House Square, Hartford, CT 06103",
        logo: "http://www.ghymca.org/images/layout/yLogoBlue.png",
        description: "Ask for Anthony at the front office."
      }
    ]
  };

  render() {
    return (
      <div>
        <Navbar right brand="Resources" />
        <div style={{ padding: "40px" }}>
          <h5>Websites</h5>
          <Collection>
            {this.state.websites.map(site => (
              <CollectionItem href={site.link}>
                <p>{site.name}</p>
              </CollectionItem>
            ))}
          </Collection>
          <h5>Locations</h5>
          <Row>
            {this.state.locations.map(loc => {
              return (
                <Col s={4}>
                  <Card
                    header={<CardTitle image={loc.logo} />}
                    actions={[<a href="#">DIRECTIONS</a>]}
                  >
                    <h5>{loc.name}</h5>
                    <b>{loc.address}</b>
                    <br />
                    {loc.description}
                  </Card>
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
    );
  }
}
