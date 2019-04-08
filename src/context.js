import React, { Component } from 'react';

const Context = React.createContext();

const customers_list = [
    {
        name: "Nadin Fernández",
        telefono: "1155806097",
        categoria: "Profesora de canto particular",
        web: 'clasesdecanto.negocio.site',
        id: '1'
    },
    {
        name: "Priscilla",
        telefono: "1175003414",
        categoria: "Comercio de regaleria cristiana",
        web: 'priscillaregaleriacristiana.com/',
        id: '2'
    },
    {
        name: "Alan Martin",
        telefono: "1167468781",
        categoria: " Desarrollo I.T - WebApps",
        web: 'www.pentity.com',
        id: '3'
    },
    {
        name: "Emanuel Leguizamo",
        telefono: "1168540278",
        categoria: "Peluqueria a domicilio",
        web: '',
        id: '4'
    }
];


const resultado = (filtro) => customers_list.filter(function (cliente) {
    return cliente.categoria.toLowerCase().match(filtro); //if de varios parametros
});


const reducer = (state, action) => {
    switch (action.type) {
        case 'SEARCH_CUSTOMERS':
            return { ...state, customers_list: resultado(action.payload), showList: true }
        default:
            return state
    }
}

export class Provider extends Component {

    state = {
        customers_list: customers_list,
        dispatch: action => this.setState(state => reducer(state, action)),
        showList: false
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

export const Consumer = Context.Consumer;