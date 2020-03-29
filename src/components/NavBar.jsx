import React from "react";
import { Navbar, NavbarBrand, Badge } from "reactstrap";
import { connect } from 'react-redux'

const mapStateToProps = state => ( {count: state.counters.filter(el => el.value !== 0).length} )

const NavBar = props => {
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">
          Cart<Badge className="mx-2">{props.count}</Badge>
        </NavbarBrand>
      </Navbar>
    </div>
  );
};

export default connect(mapStateToProps)(NavBar);
