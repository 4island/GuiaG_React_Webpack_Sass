import React, { Component } from 'react';
import { Route, HashRouter } from 'react-router-dom';

import Navbar from './components/CustomNavbar';
import Footer from './components/CustomFooter';

import Home from './home/Home';

import Quienes from './menuPages/Quienes';
import Trabaja from './menuPages/Trabaja';
import Contacto from './menuPages/Contacto';
import Como from './menuPages/Como';

import Profesional from './home/categorias/Profesional';
import Servicios from './home/categorias/Servicios';

import { Provider } from './context';

/* Estilos Globales */
import './styles/main.scss';


class App extends Component {

  render() {
    return (
      <Provider>
        <HashRouter>
          <div>
            <Navbar />
            <Route exact path="/" component={Home} />

            <Route path="/quienessomos" component={Quienes} />
            <Route path="/trabaja" component={Trabaja} />
            <Route path="/contacto" component={Contacto} />
            <Route path="/como" component={Como} />

            <Route path="/profesional" component={Profesional} />
            <Route path="/servicios" component={Servicios} />
            <Footer />
          </div>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;