import React from "react";
import PropTypes from "prop-types";
import { Navbar, NavbarBrand } from "shards-react";
import { connect } from 'react-redux';

import {appActions} from "../../../redux/app/actions"

class SidebarMainNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.handleToggleSidebar = this.handleToggleSidebar.bind(this);
  }

  handleToggleSidebar() {
    // Toggle sidebar
    const {toggleSidebar} = this.props;
    toggleSidebar();
  }

  render() {
    const { hideLogoText } = this.props;
    return (
      <div className="main-navbar">
        <Navbar
          className="align-items-stretch bg-white flex-md-nowrap border-bottom p-0"
          type="light"
        >
          <NavbarBrand
            className="w-100 mr-0"
            href="#"
            style={{ lineHeight: "30px" }}
          >
            <div className="d-table ml-3">
              <img
                id="main-logo"
                className="d-inline-block align-top"
                style={{ maxWidth: "30px" }}
                src={require("../../../images/horse.svg")}
                alt="iCT Gaming Zone"
              />
              {!hideLogoText && (
                <span className="d-none d-md-inline ml-1" style={{fontSize: "20px", fontWeigtht: "bolder"}}>
                  iCTGames
                </span>
              )}
            </div>
          </NavbarBrand>
          {/* eslint-disable-next-line */}
          <a
            className="toggle-sidebar d-sm-inline d-md-none d-lg-none"
            onClick={this.handleToggleSidebar}
          >
            <i className="material-icons">&#xE5C4;</i>
          </a>
        </Navbar>
      </div>
    );
  }
}

SidebarMainNavbar.propTypes = {
  /**
   * Whether to hide the logo text, or not.
   */
  hideLogoText: PropTypes.bool
};

SidebarMainNavbar.defaultProps = {
  hideLogoText: false
};


const mapStateToProps = (state) => ({
})

const mapDispatchToProps = {
  toggleSidebar: appActions.toggleSidebar
}


export default connect(mapStateToProps, mapDispatchToProps)(SidebarMainNavbar);