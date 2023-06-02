import {React, useEffect} from 'react';
import { ListGroup, Card, Col, Button, Form } from 'react-bootstrap';
import "./Elemento.css"

const Elemento = ({ Pelicula , eliminarPelicula , index}) => {
    return (
        <Col xl={3} lg={4} md={6}>
            <ListGroup.Item className='mt-3 item'>
                <Card className='text-center Card'> 
                    <Card.Header className='titleCard'><h1>{Pelicula.nombre}</h1></Card.Header>
                    <Card.Body >
                        <p>{Pelicula.descripcion}</p>
                        <span>{Pelicula.genero}</span>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant='danger' onClick={()=>eliminarPelicula(index)}>Eliminar</Button>
                    </Card.Footer>
                </Card>
            </ListGroup.Item>
        </Col>
    );
};

export default Elemento;