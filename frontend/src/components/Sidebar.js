import React, { Component } from "react";
import { SideNav, SideNavItem } from "react-materialize";

export default class Sidebar extends Component {
  render() {
    return (
      <SideNav fixed>
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
        <SideNavItem waves href="#">
          Third Link With Waves
        </SideNavItem>
      </SideNav>
    );
  }
}
