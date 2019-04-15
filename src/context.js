import React, { Component } from 'react';

const Context = React.createContext();

const customers_list = [
    {
        name: "Nadin Fernández",
        telefono: "1155806097",
        categoria:'Profesores',
        descripcion: "Profesora de canto particular. Av. Boedo 105",
        web: 'clasesdecanto.negocio.site',
        mapa:'goo.gl/maps/CG37D5pnKCU2',
        id: '1'
    },
    {
        name: "Priscilla",
        telefono: "1151510872",
        categoria: "Comercio",
        descripcion: "Bijouterie & Regaleria Cristiana. Ventas x mayor y menor. Envíos a todo el país. Visitanos en Boedo 63. CABA. ",
        web: 'priscillaregaleriacristiana.com/',        
        mapa:'goo.gl/maps/uYaH2q3ShnJ2',
        id: '2'
    },
    {
        name: "Alan Martin",
        telefono: "1167468781",
        categoria: "Web",
        descripcion: " Desarrollo UI - WebApps - Diseño UX",
        web: 'pentity.com',      
        mapa:'goo.gl/maps/MCtruH7LDR82',
        id: '3'
    },
    {
        name: "Emanuel Leguizamo",
        telefono: "1168540278",
        categoria:'Peluqueria',
        descripcion: "Peluqueria a domicilio",
        web: '',
        mapa:'',
        id: '4'
    },
    {
        name: "Iglesia Cristiana de Ceres",
        telefono: "1157973380",
        categoria: 'Iglesias',
        descripcion: "Perteneciente a la Iglesia Cuadrangular de Argentina. Av. Milano 124. Ceres. Santa Fe. Pastores: Rolando Aranda y Liliana Escalera.",
        web: '',
        mapa:'goo.gl/maps/xkf5c6DBgXC2',
        id: '5'
    },
    {
        name: "Iglesia Cristiana de Abasto",
        telefono: "1157973380",
        categoria: 'Iglesias',
        descripcion: "Perteneciente a la Iglesia Cuadrangular de Argentina. Lavalle 3209  3.  CABA. Pastores: Rolando Aranda y Liliana Escalera.",
        web: '',
        mapa: 'goo.gl/maps/QYc11qUXjSR2',
        id: '6'
    },
    {
        name: "Aquila",
        telefono: "1169472665",
        categoria: 'Comercio',
        descripcion: "Regalería Cristiana. Ventas x mayor y menor.Envíos a todo el país. Boedo 89 CABA.",
        web: 'priscillaregaleriacristiana.com/',
        mapa: 'goo.gl/maps/pJPRmPYKH1R2',
        id: '7'
    },
    {
        name: "MFD Mauro",
        telefono: "1127650711",
        categoria: 'Comercio',
        descripcion: "Foto & Diseño. Mail:mfdmauro@gmail.com. Estamos en CABA, y vamos también al interior del Pais.",
        web: '',
        mapa: '',
        id: '8'
    },
    {
        name: "VERINO",
        telefono: "1154728882",
        categoria: 'Comercio',
        descripcion: "Estudio Inmobiliario. Compra/Venta. Alquileres. Tasaciones. Emprendimientos. Av Callao 1290 esq. Juncal. CABA",
        web: 'verinoinmobiliaria.com.ar',
        mapa: 'goo.gl/maps/sXbUG43W4Xz',
        id: '9'
    },
    {
        name: "Iglesia Cristiana - El Verbo de Dios",
        telefono: "1154728882",
        categoria: 'Iglesias',
        descripcion: "El lugar de la Fé y los Milagros. Comedor Comunitario. Av Belgrano 3212 y Loria. CABA. Ptores: Raúl y Viviana Mamoykoff.",
        web: 'puertademilagros.net',
        mapa: 'goo.gl/maps/xtT3GzP2EaG2',
        id: '10'
    },
    {
        name: "El Buen Samaritano",
        telefono: "1154728882",
        categoria: 'Iglesias',
        descripcion: "Pastores: Eliseo Ruiz Diaz Y Juana Niz. Arroyo Blanco 1028 y Av. Ceibal B°Marabó - Gral Rodriguez",
        web: '',
        mapa: 'goo.gl/maps/hGax5ZNUwnx',
        id: '11'
    }
];


const resultado = (filtro) => customers_list.filter(function (cliente) {
    return cliente.categoria.toLowerCase().match(filtro); 
});


const reducer = (state, action) => {
    switch (action.type) {
        case 'SEARCH_CUSTOMERS':
            return { ...state, customers_list: resultado(action.payload), showList: true }
        case 'CLEAR_CATEGORY':
            return {...state, customers_list: customers_list, showList:false, backALevel: true }
        default:
            return state
    }
}

export class Provider extends Component {

    state = {
        customers_list: customers_list,
        dispatch: action => this.setState(state => reducer(state, action)),
        showList: false,
        backALevel: false
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