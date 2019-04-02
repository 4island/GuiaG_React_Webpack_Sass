import React, { Component } from 'react'
import { Grid, Jumbotron } from 'react-bootstrap';
import './menuPages.scss';

export default class Trabaja extends Component {
  render() {
    return (
      <div className="parallax_about">
        <Grid>
          <Jumbotron className="jumbotron_about">
            <h2 style={{ color: "rgb(104, 104, 104)" }}>Trabaja con nosotros</h2><br/>
            <p>
            Estamos en la búsqueda de emprendedores en todo el país, a los efectos de sumar suscripciones a la Guía Gospel, para el período 2019-2020.
            Si sos un hno/a de la Fé, mayor de 18 años y tenés una membresía contínua de al menos un año, con deseos y/ó necesidad de sumar activos a tu economía. 
            No dudes en contactárnos.</p>
            <p>
            La función ó el cargo que ocupes en tu ministerio no es ninguna barrera para trabajar junto a nosotros en Guía Gospel.
            Pues toda aquella persona que desee ser bendición y a la vez ser bendecida, podrá sumarse a ésta Visión con Propósito.
            Las funciones a desarrollar en Guía Gospel son:1. Ser oferente y sumar suscripciones a la misma con un rédito directo del 15 % del valor de la suscripción.
            2. Promotor en stands de diferentes eventos, que se den, en tu ciudad, provincia como así también a nivel nacional.
            Es muy fácil..!!
            No es necesaria ninguna experiencia..!!<br/></p>
            <p>
            Solamente contar con telefonía móvil que posea whatsapp instalado para poder contactarnos.
            Aclaramos que Guía Gospel, sin excepciones, no publicará suscripciones que no hayan hecho efectivo el pago de la misma para los períodos 2019-2020.
            SUMATE al STAFF de Guía Gospel y empezá a recibir de manera inmediata los beneficios de la misma.
            <br/><br/></p>
            
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Guía Gospel<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Una Visión con Propósito"<br/><br/>
            </p>
          </Jumbotron>
        </Grid>
      </div>
    )
  }
}
