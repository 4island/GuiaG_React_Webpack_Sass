import React, { Component } from 'react';
import { BrowserRouter as Router, Route, hashHistory} from 'react-router-dom';

import Navbar from './components/CustomNavbar';
import Footer from './components/CustomFooter';

import Home from './home/Home';

import Quienes from './menuPages/Quienes';
import Trabaja from './menuPages/Trabaja';
import Contacto from './menuPages/Contacto';

import Profesional from './home/categorias/Profesional';
import Servicios from './home/categorias/Servicios';

import { Provider } from './context';

/* Estilos Globales */
import './styles/main.scss';


class App extends Component {

  render() {
    return (
      <Provider>
        <Router history={hashHistory}>
          <div>
            <Navbar />
            <Route exact path="/" component={Home} />

            <Route path="/quienessomos" component={Quienes} />
            <Route path="/trabaja" component={Trabaja} />
            <Route path="/contacto" component={Contacto} />

            <Route path="/profesional" component={Profesional} />
            <Route path="/servicios" component={Servicios} />
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;