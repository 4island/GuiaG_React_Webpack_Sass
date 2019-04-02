import React from 'react';
import { Row, Col} from 'react-bootstrap';
import './Resultado.scss';

export const Resultado = props => {
    const { cliente } = props;

    return (
        <Row className="show-grid text-left">
            <Col xs={12} md={6}>
                    <p className="card-text">
                        <strong>
                        &nbsp;
                        {cliente.name} - Categoria: {cliente.categoria}   <br />

                        &nbsp;Toca / haz click para acceder a mas info  ↓ <br /><br />

                        
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <a className="wtsp-link" href={`https://api.whatsapp.com/send?phone=549${cliente.telefono}&text=Hola%2C%20quiero%20saber%20mas`}>
                            <i className="fab fa-whatsapp fa-2x"></i>&nbsp;{cliente.telefono} 
                        </a>
                        <br /><br />

                        
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <a  href={`https://${cliente.web}`}>
                        <i className="fas fa-link fa-2x"></i>&nbsp;{cliente.web}
                        </a>

                        </strong>
                    </p>
            </Col>  
        </Row>
    );
};

