import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, NavItem, Nav } from 'react-bootstrap';

import { Consumer } from '../context';
import { Resultado } from '../components/Resultado';
import Volver from '../components/Volver';
import Searcher from '../components/Searcher';
import './Home.scss';

export default class Home extends Component {
  render() {
    return (
      <Consumer>
        {
          (value) => {
            const { customers_list, showList, dispatch } = value;
            if (customers_list.length > 0 && showList) {
              return (
                <div className="parallax_home">
                  <Grid>
                    <Searcher></Searcher>
                    <Volver></Volver>

                    {customers_list.map(item => (
                      <Jumbotron className="jumbo-resultado">
                        <Resultado key={item.id} cliente={item} />
                      </Jumbotron>
                    ))}

                  </Grid>
                </div>
              )
            } else {
              return (
                <div className="parallax_home">
                  <Grid>
                    <Searcher></Searcher>
                    <Jumbotron className="jumbo-categoria">
                      <Row className="show-grid text-center">

                      <Col xs={4} md={2}>
                          <Nav >
                            <NavItem eventKey={1} componentClass={Link} href="#" to="#"
                                onClick={() => {
                                  dispatch({ type: 'SEARCH_CUSTOMERS', payload: 'iglesias' })
                                }}>
                              <i className="fas fa-church fa-7x"></i>
                              <h3>Iglesias y Ministerios</h3>
                            </NavItem>
                          </Nav>
                        </Col>

                        <Col xs={4} md={2}>
                          <Nav >
                            <NavItem eventKey={1} componentClass={Link} href="/profesional" to="/profesional">
                              <i className="far fa-address-card fa-7x"></i>
                            </NavItem>
                          </Nav>
                          <h3>Profesionales</h3>
                        </Col>

                        <Col xs={4} md={2}>
                          <Nav >
                            <NavItem eventKey={1} componentClass={Link} href="#" to="#"
                                onClick={() => {
                                  dispatch({ type: 'SEARCH_CUSTOMERS', payload: 'comercio' })
                                }}>
                              <i className="far fa-building fa-7x"></i>
                              <h3>Comercios e Industrias</h3>
                            </NavItem>
                          </Nav>
                        </Col>

                        <Col xs={4} md={2}>
                          <Nav >
                            <NavItem eventKey={1} componentClass={Link} href="/servicios" to="/servicios">
                              <i className="fas fa-users fa-7x"></i>
                            </NavItem>
                          </Nav>
                          <h3>Empresas de Servicio</h3>
                        </Col>

                        <Col xs={4} md={2}>
                          <Nav >
                            <NavItem eventKey={1} componentClass={Link} href="#" to="#">
                              <i className="fas fa-globe-americas fa-7x"></i>
                            </NavItem>
                          </Nav>
                          <h3>Eventos</h3>
                        </Col>

                        <Col xs={4} md={2}>
                          <Nav >
                            <NavItem eventKey={1} componentClass={Link} href="#" to="#">
                              <i className="fas fa-bullhorn fa-7x"></i>
                            </NavItem>
                          </Nav>
                          <h3>Educación y ONG</h3>
                        </Col>

                      </Row>
                    </Jumbotron>
                  </Grid>
                </div>
              )
            }
          }
        }
      </Consumer>
    )
  }
}
