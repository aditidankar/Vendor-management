import React, { Component } from 'react';
import { Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {DropdownButton, MenuItem, Navbar, Nav, NavItem, NavDropdown} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Menu from'rc-menu';
import PieChart from 'react-simple-pie-chart';
import BarChart from 'react-bar-chart';

import './approve.css';
import BootstrapTable from 'react-router-bootstrap';
import TableHeaderColumn from 'react-router-bootstrap';

class approve extends Component {
render() { 
  return (
    <div>
    <Navbar inverse collapseOnSelect>
  <Navbar.Collapse>
    <Nav>
        <NavDropdown eventKey={1} title="Sourcing" id="basic-nav-dropdown">
        <MenuItem>
          <Button type="button" className={"btn btn-link"}> <Link to='/Sourcing/action'>Action </Link>
            </Button>
            </MenuItem>
           <MenuItem>
          <Button type="button" className={"btn btn-link"}> <Link to='/Sourcing/noaction'>No Action </Link>
            </Button>
            </MenuItem>
        </NavDropdown>
        <NavDropdown eventKey={2} title="Vendor Management" id="basic-nav-dropdown">
                <MenuItem>
          <Button type="button" className={"btn btn-link"}> <Link to='/vendormanagement/approve'>Approve </Link>
            </Button>
            </MenuItem>
            <MenuItem>
          <Button type="button" className={"btn btn-link"}> <Link to='/vendormanagement/reject'>Reject </Link>
            </Button>
            </MenuItem>
        </NavDropdown>
        <NavDropdown eventKey={3} title="Contracting" id="basic-nav-dropdown">
                  <MenuItem>
          <Button type="button" className={"btn btn-link"}> <Link to='/Contracting/searchcontract'>Search contract </Link>
            </Button>
            </MenuItem>
                    <MenuItem>
          <Button type="button" className={"btn btn-link"}> <Link to='/Contracting/addcontract'>Add Contract </Link>
            </Button>
            </MenuItem>
                    <MenuItem>
          <Button type="button" className={"btn btn-link"}> <Link to='/Contracting/mycalaender'>My calaender </Link>
            </Button>
            </MenuItem>
        </NavDropdown>
        <NavDropdown eventKey={4} title="Compliance" id="basic-nav-dropdown">
          <MenuItem eventKey={4.1}>Search Contract</MenuItem>
          <MenuItem eventKey={4.2}>Add Contract</MenuItem>
          <MenuItem eventKey={4.3}>My calender</MenuItem>
        </NavDropdown>
        <MenuItem eventKey={5}>Rep credentialising</MenuItem>
    </Nav>
    <Nav pullRight>
      <NavItem eventKey={1} href="#">
        Settings
      </NavItem>
    </Nav>
  </Navbar.Collapse>
</Navbar>;
<div>
<div>
</div>
    <div className="piechart">
    <PieChart
  slices={[
    {
      color: '#f4bf42',
      value: 10,
    },
    {
      color: '#41cdf4',
      value: 20,
    },
  ]}
/>
    </div>
    </div>
      </div>
      )
}
}

export default approve
