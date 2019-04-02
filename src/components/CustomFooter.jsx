import React, { Component } from 'react';
import { Navbar, Label } from 'react-bootstrap';
import './CustomFooter.scss';

export default class CustomLeftter extends Component {
  render() {
    return (
      <Navbar default collapseOnSelect className="Footer">

        <h1>
          <Label className="Publicidad_Footer">85x180</Label>
          <Label className="Publicidad_Footer">85x180</Label>
        </h1>

      </Navbar>
    )
  }
}
