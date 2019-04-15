import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import { Consumer } from '../context';

class Searcher extends Component {
    render() {
        return (
            <Consumer>
                {
                    value => {
                        const { dispatch, showList, backALevel } = value;
                        {
                            if (!showList && backALevel) {
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
                            else {
                                return (
                                    <div className="text-right">
                                        <Button className="botonesVolver"
                                            onClick={() => {
                                                dispatch({ type: 'CLEAR_CATEGORY' })
                                            }}>
                                            <i className="fas fa-arrow-left fa-3x"></i>
                                        </Button>

                                        <Button className="botonesVolver" href="/">
                                            <i className="fas fa-home fa-3x"></i>
                                        </Button>
                                    </div>
                                )
                            }

                        }

                    }
                }
            </Consumer>
        )
    }
}
export default Searcher