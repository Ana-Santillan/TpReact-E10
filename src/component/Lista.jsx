import React from 'react';
import { ListGroup, Row } from 'react-bootstrap';
import Elemento from './Elemento';

const Lista = ({ListaPeliculas, eliminarPelicula}) => {
    return (
        <ListGroup>
            <Row>
                {ListaPeliculas.map((Pelicula, index)=>{
                    return (
                        <Elemento Pelicula={Pelicula} key={index} eliminarPelicula={eliminarPelicula} index={index}/>
                    )
                })}
            </Row>
        </ListGroup>
    );
};

export default Lista;