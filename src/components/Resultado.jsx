import React from 'react';
import { Row, Col, ButtonToolbar, Button } from 'react-bootstrap';
import './Resultado.scss';

export const Resultado = props => {
    const { cliente } = props;

    return (
        <Row className="show-grid text-left">
            <Col xs={12} md={6}>
                <p className="card-text">
                    <strong>
                        Categoria: {cliente.categoria} - {cliente.name} <br />

                        Toca / haz click para acceder a mas info  ↓ 


                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <ButtonToolbar>
                            <Button variant="outline-primary">
                                <a className="wtsp-link" href={`https://api.whatsapp.com/send?phone=549${cliente.telefono}&text=Hola%2C%20quiero%20saber%20mas`}>
                                    <i className="fab fa-whatsapp fa-2x"></i>&nbsp;{cliente.telefono}
                                </a>
                            </Button> 
                            <Button variant="outline-primary">
                                <a className="web-link" href={`https://${cliente.web}`}>
                                    <i className="fas fa-link fa-2x"></i>&nbsp;{cliente.web}
                                </a>
                            </Button>
                        </ButtonToolbar>

                    </strong>
                </p>
            </Col>
        </Row>
    );
};

