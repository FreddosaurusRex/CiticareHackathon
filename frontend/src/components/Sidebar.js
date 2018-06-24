import React, { Component } from "react";
import { SideNav, SideNavItem, Icon, Badge } from "react-materialize";

export default class Sidebar extends Component {
  state = {
    cases: [
      {
        isHome: false,
        name: "Jasmine OurGirl",
        notifications: 1
      },
      {
        isHome: true,
        name: "68 Wadsworth St",
        notifications: 0
      },
      {
        isHome: true,
        name: "8 Grand St",
        notifications: 3
      }
    ]
  };
  render() {
    let SideNavItemPage = props => (
      <SideNavItem
        className={props.page == this.props.page ? "active" : null}
        onClick={() => {
          console.log(props.page);
          this.props.setPage(props.page);
        }}
        {...props}
      >
        {props.children}
      </SideNavItem>
    );
    return (
      <SideNav className="sidenav sidenav-fixed" id="sidebar">
        <SideNavItem
          userView
          user={{
            background:
              "https://cmkt-image-prd.global.ssl.fastly.net/0.1.0/ps/1234685/300/200/m1/fpc/wm0/jndkt9hi4wl8d9ryurfaeaff9ybhjkgevz0vh1pom8ztm6roz4lmyi7lvgkjpqf4-.jpg?1462294980&s=cfb75443e02e4d745da2fa6070f1b955",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/YMCA-SVG-Common_International.svg/1200px-YMCA-SVG-Common_International.svg.png",
            name: "Lauren OurGirl",
            email: "lauren@ymca.com"
          }}
        />

        <SideNavItem subheader icon="hearing">
          INCIDENTS
        </SideNavItem>
        <SideNavItemPage icon="update" page={0}>
          Last 24 Hours
        </SideNavItemPage>
        <SideNavItemPage icon="update" page={1}>
          Last 7 Days
        </SideNavItemPage>
        <SideNavItem divider />
        <SideNavItemPage icon="question_answer" page={2}>
          Medical Q&A
          <Badge newIcon>1</Badge>
        </SideNavItemPage>
        <SideNavItemPage icon="folder_shared" page={3}>
          Resources
        </SideNavItemPage>
        <SideNavItem divider />
        <SideNavItemPage subheader icon="business_center" page={4}>
          CASES
          <Badge>
            <Icon>settings</Icon>
          </Badge>
        </SideNavItemPage>
        {this.state.cases.map((openCase, i) => (
          <SideNavItem
            key={i}
            waves
            icon={openCase.isHome ? "home" : "person_pin"}
          >
            {openCase.name}{" "}
            {openCase.notifications > 0 ? (
              <Badge newIcon>{openCase.notifications}</Badge>
            ) : null}
          </SideNavItem>
        ))}
      </SideNav>
    );
  }
}
