import React from 'react';
import { Row, Col, ButtonToolbar, Button } from 'react-bootstrap';
import './Resultado.scss';

export const Resultado = props => {
    const { cliente } = props;

    return (
        <Row className="show-grid text-left">
            <Col xs={12} md={12}>
                <p className="card-text">
                    <strong>
                        <em>{cliente.name}</em><br/>
                        {cliente.descripcion}
                    </strong>
                </p>
            </Col>
            <Col xs={12} md={12}>
                <p className="card-contact">
                        <ButtonToolbar >
                                <Button variant="primary" className="wtsp-link" href={`https://api.whatsapp.com/send?phone=549${cliente.telefono}&text=Hola%2C%20te%20encontré%20por%20medio%20de%20GuíaGospel,%20quisiera%20saber%20sobre...%20`}>
                                    <i className="fab fa-whatsapp fa-2x"></i>&nbsp;Whats
                                </Button>

                                <Button variant="primary" className="web-link" href={`https://${cliente.web}`}>
                                    <i className="fas fa-link fa-2x"></i>&nbsp;Web
                                </Button>
                                <Button variant="primary" className="web-link" href={`https://${cliente.mapa}`}>
                                    <i class="fas fa-map-marked-alt fa-2x"></i>&nbsp;Mapa
                                </Button>
                        </ButtonToolbar>

                </p>
            </Col>
        </Row>
    );
};

