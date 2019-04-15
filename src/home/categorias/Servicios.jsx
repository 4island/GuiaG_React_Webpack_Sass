import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, NavItem, Nav } from 'react-bootstrap';
import './categorias.scss'; //UPPER
import Searcher from '../../components/Searcher';
import Volver from '../../components/Volver';
import { Resultado } from '../../components/Resultado';
import { Consumer } from '../../context';

export default class Servicios extends Component {
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

                                        <Volver></Volver>

                                        <Jumbotron className="jumbo-categoria">
                                            <Row className="show-grid text-center">

                                                <Col xs={6} md={2}>
                                                    <Nav >
                                                        <NavItem eventKey={1} componentClass={Link} href="#" to="#">
                                                            <i className="fab fa-accessible-icon fa-7x"></i>
                                                            <h3>A. Terapéutica</h3>
                                                        </NavItem>
                                                    </Nav>
                                                </Col>

                                                <Col xs={6} md={2}>
                                                    <Nav >
                                                        <NavItem eventKey={1} componentClass={Link} href="#" to="#">
                                                            <i className="fas fa-broom fa-7x"></i>
                                                            <h3>Limpieza</h3>
                                                        </NavItem>
                                                    </Nav>
                                                </Col>
                                                <Col xs={6} md={2}>
                                                    <Nav >
                                                        <NavItem eventKey={1} componentClass={Link} href="#" to="#">
                                                            <i className="fas fa-utensils fa-7x"></i>
                                                            <h3>Catering</h3>
                                                        </NavItem>
                                                    </Nav>
                                                </Col>
                                                <Col xs={6} md={2}>
                                                    <Nav >
                                                        <NavItem eventKey={1} componentClass={Link} href="#" to="#"
                                                            onClick={() => {
                                                                dispatch({ type: 'SEARCH_CUSTOMERS', payload: 'peluqueria' })
                                                            }}>
                                                            <i className="fas fa-cut fa-7x"></i>
                                                            <h3>Peluquería</h3>
                                                        </NavItem>
                                                    </Nav>
                                                </Col>
                                                <Col xs={6} md={2}>
                                                    <Nav >
                                                        <NavItem eventKey={1} componentClass={Link} href="#" to="#">
                                                            <i className="fas fas fa-toolbox fa-7x"></i>
                                                            <h3>Construcción</h3>
                                                        </NavItem>
                                                    </Nav>
                                                </Col>
                                                <Col xs={6} md={2}>
                                                    <Nav >
                                                        <NavItem eventKey={1} componentClass={Link} href="#" to="#">
                                                            <i className="fas fas fa-wrench fa-7x"></i>
                                                            <h3>Mantenimiento</h3>
                                                        </NavItem>
                                                    </Nav>
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