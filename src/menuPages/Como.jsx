import React, { Component } from 'react'
import { Grid, Jumbotron } from 'react-bootstrap';
import './menuPages.scss';

export default class Trabaja extends Component {
    render() {
        return (
            <div className="parallax_about">
                <Grid>
                    <Jumbotron className="jumbotron_about">
                        <h2 style={{ color: "rgb(104, 104, 104)" }}>Como Suscribirme</h2><br />
                        <p>
                            La suscripción a GUIA GOSPEL, tiene un costo de $ 720.- por el período de 2 años, desde el momento que se sube la información a la Web.
                            Las mismas serán publicadas, al hacer efectivo el pago a GUÍA GOSPEL.
                        </p>
                        <p>
                            Para suscribirte:
                            A través de whatsapp, contáctate con nosotros, ó con cualquiera de los puntos de venta asociados a GUÍA GOSPEL mas abajo descriptos.
                        </p>
                        <p>
                            Contacto 1157973380 Clic ↓
                        </p>
                        <a class="wtsp-link-contacto" href="https://api.whatsapp.com/send?phone=5491157973380&text=Hola%2C%20quiero%20saber%20mas">
                            <i class="fab fa-whatsapp fa-7x"></i><br /><br />
                        </a>

                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Guía Gospel Almagro<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Una Visión con Propósito"<br /><br />
                        </p>
                    </Jumbotron>
                </Grid>
            </div>
        )
    }
}
