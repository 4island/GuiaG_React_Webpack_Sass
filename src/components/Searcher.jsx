import React, { Component } from 'react'
import { Jumbotron, Row, Col, Form, Button, FormControl, FormGroup } from 'react-bootstrap';
import { Consumer } from '../context';


class Searcher extends Component {

    state = {
        categoriaCliente: ''
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    findCustomers = (dispatch, e) => {
        e.preventDefault()
        let busqueda = this.state.categoriaCliente.trim().toLowerCase();
        dispatch({ type: 'SEARCH_CUSTOMERS', payload: busqueda })
    }

    render() {
        return (
            <Consumer>
                {
                    value => {
                        const { dispatch } = value
                        return (

                            <Jumbotron className="jumbo-buscador">
                                <Form
                                    inline
                                    // onKeyPress ={this.findCustomers.bind(this, dispatch)}
                                    onSubmit ={this.findCustomers.bind(this, dispatch)}
                                    >
                                    <FormGroup bsSize="lg">
                                        <Row className="show-grid text-center">

                                            <Col xs={12} md={12}>
                                                <Row>
                                                    <Col xs={9} sm={11}>
                                                        <FormControl
                                                            type="text"
                                                            placeholder="¿Qué buscás?"
                                                            name="categoriaCliente"
                                                            value={this.state.categoriaCliente}
                                                            onChange={this.onChange}
                                                        />
                                                    </Col>
                                                    <Col xs={1} sm={1}>
                                                        <Button type="submit" className="btnBuscar" bsSize="lg">
                                                            <i className="fas fa-search"></i>
                                                        </Button>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </FormGroup>
                                </Form>
                            </Jumbotron>
                        )
                    }
                }
            </Consumer>
        )
    }

}

export default Searcher