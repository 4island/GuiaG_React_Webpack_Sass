import React, { Component } from 'react'
import { Navbar, Nav, NavItem, Label, DropdownButton, MenuItem} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.scss';

export default class CustomNavbar extends Component {
  render() {
    return (
      <Navbar default className="CustomHeader" collapseOnSelect>
        <Navbar.Header >
        
          <Navbar.Brand >
              <Link to="/" >
                <div className="marca">
                      <section className="GG">
                      <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="40px"
                         viewBox="0 0 210 210" style={{enableBackground:'new 0 0 210 210'}} xmlSpace="preserve">
                         <path style={{fill:'#1d58c7'}} d="M148.5,85H210v20c0,57.9-47.1,105-105,105S0,162.9,0,105S47.1,0,105,0c23.4,0,45.5,7.5,64,21.8
                        l-24.4,31.7C133.2,44.7,119.5,40,105,40c-35.8,0-65,29.2-65,65s29.2,65,65,65c28.9,0,53.4-18.9,61.9-45h-17.6"/>
                      </svg>

                      <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="40px"
                        viewBox="0 0 210 210" style={{enableBackground:'new 0 0 210 210'}} xmlSpace="preserve">
                        <path style={{fill:'#1d58c7'}} d="M148.5,85H210v20c0,57.9-47.1,105-105,105S0,162.9,0,105S47.1,0,105,0c23.4,0,45.5,7.5,64,21.8
                        l-24.4,31.7C133.2,44.7,119.5,40,105,40c-35.8,0-65,29.2-65,65s29.2,65,65,65c28.9,0,53.4-18.9,61.9-45h-17.6"/>
                      </svg>
                      </section>
                </div>
              </Link>
          </Navbar.Brand>

          <Navbar.Brand className="logo-texto">
            <Link to="/" >
                <h2>&nbsp;
                    <svg version="1.1" className="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                      viewBox="0 0 210 210" style={{enableBackground:'new 0 0 210 210'}} xmlSpace="preserve">
                    <path style={{fill:'#FFFFFF'}} d="M148.5,85H210v20c0,57.9-47.1,105-105,105S0,162.9,0,105S47.1,0,105,0c23.4,0,45.5,7.5,64,21.8
                      l-24.4,31.7C133.2,44.7,119.5,40,105,40c-35.8,0-65,29.2-65,65s29.2,65,65,65c28.9,0,53.4-18.9,61.9-45h-17.6"/>
                    </svg>
                    uía&nbsp;
                    <svg version="1.1" className="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" 
                      viewBox="0 0 210 210" style={{enableBackground:'new 0 0 210 210'}} xmlSpace="preserve">
                    <path style={{fill:'#FFFFFF'}} d="M148.5,85H210v20c0,57.9-47.1,105-105,105S0,162.9,0,105S47.1,0,105,0c23.4,0,45.5,7.5,64,21.8
                      l-24.4,31.7C133.2,44.7,119.5,40,105,40c-35.8,0-65,29.2-65,65s29.2,65,65,65c28.9,0,53.4-18.9,61.9-45h-17.6"/>
                    </svg>
                    ospel
                </h2>

                <h6 className="slogan">&nbsp;&nbsp;&nbsp;"Una Visión con Propósito"</h6>
            </Link>
          </Navbar.Brand>


          <Navbar.Brand className="publicidad-navBar">
              <h1><Label >Publicidad</Label></h1>
          </Navbar.Brand>

          <Navbar.Toggle/>

        </Navbar.Header>

        <Navbar.Collapse >
            <Nav pullRight>
              <NavItem eventKey={1} componentClass={Link} href="/" to="/">
                Inicio
              </NavItem>
              <NavItem eventKey={2} componentClass={Link} href="/quienessomos" to="/quienessomos">
                Quienes Somos
              </NavItem>
              <NavItem eventKey={2} componentClass={Link} href="/trabaja" to="/trabaja">
                Trabaja con nosotros
              </NavItem>
              <NavItem eventKey={2} componentClass={Link} href="/contacto" to="/contacto">
                Contacto
              </NavItem>
            </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
