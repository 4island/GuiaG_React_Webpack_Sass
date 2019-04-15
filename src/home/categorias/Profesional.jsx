import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, NavItem, Nav } from 'react-bootstrap';
import './categorias.scss'; //UPPER
import Searcher from '../../components/Searcher';
import  Volver  from '../../components/Volver';
import { Resultado } from '../../components/Resultado';
import { Consumer } from '../../context';

export default class Profesional extends Component {
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
                                        <Searcher/>
                                        <Volver/>

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
                                        <Searcher/>
                                        <Volver/>

                                        <Jumbotron className="jumbo-categoria">
                                            <Row className="show-grid text-center">

                                                <Col xs={6} md={2}>
                                                    <Nav >
                                                        <NavItem eventKey={1} componentClass={Link} href="#" to="#"
                                                            onClick={() => {
                                                                dispatch({ type: 'SEARCH_CUSTOMERS', payload: 'web' })
                                                            }}>
                                                            <i className="fas fa-laptop fa-7x"></i>
                                                            <h3>Diseño - Web</h3>
                                                        </NavItem>
                                                    </Nav>
                                                </Col>

                                                <Col xs={6} md={2}>
                                                    <Nav >
                                                        <NavItem eventKey={1} componentClass={Link} href="#" to="#">
                                                            <i className="fas fa-user-tie fa-7x"></i>
                                                            <h3>Abogados</h3>
                                                        </NavItem>
                                                    </Nav>
                                                </Col>
                                                <Col xs={6} md={2}>
                                                    <Nav>
                                                        <NavItem eventKey={1} componentClass={Link} href="#" to="#">
                                                            <i className="fas fa-user-md fa-7x"></i>
                                                            <h3>Médicos</h3>
                                                        </NavItem>
                                                    </Nav>
                                                </Col>

                                                <Col xs={6} md={2}>
                                                    <Nav>
                                                        <NavItem eventKey={1} componentClass={Link} href="#" to="#"
                                                            onClick={() => {
                                                                dispatch({ type: 'SEARCH_CUSTOMERS', payload: 'profesor' })
                                                            }}>
                                                            <i className="fas fa-chalkboard-teacher fa-7x"></i>
                                                            <h3>Profesores</h3>
                                                        </NavItem>
                                                    </Nav>
                                                </Col>
                                                <Col xs={6} md={2}>
                                                    <Nav>
                                                        <NavItem eventKey={1} componentClass={Link} href="#" to="#">
                                                            <i className="fas fa-shapes fa-7x"></i>
                                                            <h3>Psicólogos</h3>
                                                        </NavItem>
                                                    </Nav>
                                                </Col>
                                                <Col xs={6} md={2}>
                                                    <Nav>
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