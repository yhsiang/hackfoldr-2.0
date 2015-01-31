import React from "react/addons";
import jQuery from "jquery";
import SideBarNav from "./SideBarNav.jsx";
import TopBar from "./TopBar.jsx";
import Toc from "./Toc.jsx";
import "./SideBar.sass";
var $ = jQuery;

export default React.createClass({
  displayName: "SideBar",
  componentDidMount () {
    $('.ui.dropdown').dropdown();
  },

  render () {
    return (
      <nav id="sidebar"
           className="desktop-expanded-layout">
        <SideBarNav />
        <TopBar />
        <Toc />
      </nav>
    );
  }
});