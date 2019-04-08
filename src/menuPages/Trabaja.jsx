import React, { Component } from 'react'
import { Grid, Jumbotron } from 'react-bootstrap';
import './menuPages.scss';

export default class Trabaja extends Component {
  render() {
    return (
      <div className="parallax_about">
        <Grid>
          <Jumbotron className="jumbotron_about">
            <h2 style={{ color: "rgb(104, 104, 104)" }}>Trabaja con nosotros</h2><br />
            <p>
              Estamos en la búsqueda y selección de emprendedores en todo el país, con el propósito de sumar suscripciones a GUÍA GOSPEL.
              Si sos un hno/a de la Fé, mayor de 21 años y tenés una membresía contínua de al menos dos años, con deseos y/ó necesidad de sumar activos a tu economía.
              NO DUDES EN CONTACTARNOS.
            </p>
            <p>
              La función ó el cargo que ocupes en tu ministerio no es ninguna barrera para trabajar junto a nosotros. Necesitamos personas que deseen ser bendición y a la vez ser bendecidas.
            <br /></p>
            <p>
              Las funciones a desarrollar en GUÍA GOSPEL son:<br />
              1. Sumar suscripciones a la misma con un crédito directo del 30 % del valor de la suscripción.<br />
              2. Promotor/a en stands de diferentes eventos que se den, en tu ciudad, provincia como así también a nivel nacional.<br />
              Es muy fácil..!! No es necesaria ninguna experiencia..!!
              Solamente contar con telefonía móvil que posea whatsapp instalado para poder contactarnos.
              Aclaramos que las suscripciones se publicarán, cuando se haya informado y hecho efectivo el pago a GUÍA GOSPEL.
              <br /><br />
              SUMATE al STAFF de GUÍA GOSPEL y empezá a recibir de manera inmediata los beneficios de la misma.
            <br /><br /></p>

            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Guía Gospel<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Una Visión con Propósito"<br /><br />
            </p>
          </Jumbotron>
        </Grid>
      </div>
    )
  }
}
