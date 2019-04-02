
import React from 'react';
import { Button } from 'react-bootstrap';

export class Volver extends React.Component {
    render() {
        return (
            <div className="text-right">

                <Button className="botonesVolver" href="/">
                    <i className="fas fa-arrow-left fa-3x"></i>
                </Button>

                <Button className="botonesVolver" href="/">
                    <i className="fas fa-home fa-3x"></i>
                </Button>
            </div>
        )
    }

}