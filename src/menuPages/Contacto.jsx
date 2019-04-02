import React, { Component } from 'react'
import { Grid, Jumbotron } from 'react-bootstrap';
import './menuPages.scss';

export default class Contacto extends Component {
  render() {
    return (
      <div className="parallax_about">
        <Grid>
          <Jumbotron className="jumbotron_about">
            <h2 style={{ color: "rgb(104, 104, 104)" }}>Contacto</h2><br/>
              <p> 
              <p>
              Hacé clic en el siguiente boton de whatsapp y comunicate con nosotros ->
              </p>
								<a class="wtsp-link" href="https://api.whatsapp.com/send?phone=5491157973380&text=Hola%2C%20quiero%20saber%20mas">
									<i class="fab fa-whatsapp fa-7x"></i><br/><br/>
								</a>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tel. 011-5797-3380<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Guía Gospel<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Una Visión con Propósito"<br/><br/>
            </p>
          </Jumbotron>
        </Grid>
      </div>
    )
  }
}
