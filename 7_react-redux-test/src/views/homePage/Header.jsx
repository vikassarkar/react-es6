
import React from 'react';
import { Button, Navbar } from 'react-bootstrap';

export const Header = (props) => {

  return (
    <Navbar inverse >
      <Navbar.Header>
        <Navbar.Brand>
          <a onClick={props.goToHomePage}>HOME</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Navbar.Text>
          <Navbar.Link onClick={props.toggleUserpage} >Redirect To user Page</Navbar.Link>
        </Navbar.Text>
        <Navbar.Text pullRight>Welcome!</Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
}