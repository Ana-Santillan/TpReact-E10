import { React, useState, useEffect } from 'react';
import { Form, Card, Button } from 'react-bootstrap';
import Lista from './Lista';

const Formulario = () => {
    const ListaPeliculasLS = JSON.parse(localStorage.getItem('Peliculas')) || [];
    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [genero, setGenero] = useState("");
    const [listaPeliculas, setPeliculas] = useState(ListaPeliculasLS);

    const handleSubmit = (e) => {
        e.preventDefault();
        let pelicula = {
            nombre: nombre,
            descripcion: descripcion,
            genero: genero == "" ? "Comedia" : genero,
        }
        setPeliculas([...listaPeliculas, pelicula])
        setNombre("")
        setDescripcion("")
        setGenero("")
    }

    const eliminarPelicula = (index) =>{
        let PeliculasActualizadas = listaPeliculas.filter((pelicula, indexPelicula)=>indexPelicula != index);
        setPeliculas(PeliculasActualizadas); 
    }

    useEffect(()=>{
        localStorage.setItem('Peliculas', JSON.stringify(listaPeliculas))
    },[listaPeliculas])

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Card>
                    <Card.Body>
                        <Card.Title className='text-center'>
                            <h3>Pelicula</h3>
                        </Card.Title>
                        <Form.Group>
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control required type='text' placeholder='Ingrese un nombre' onChange={(e)=>setNombre(e.target.value)} value={nombre}/>
                        </Form.Group>
                        <Form.Group className='mt-3'>
                            <Form.Label>Descripcion</Form.Label>
                            <Form.Control required as="textarea" placeholder='Ingrese una descripcion' rows={4} onChange={(e)=>setDescripcion(e.target.value)} value={descripcion}/>
                        </Form.Group>
                        <Form.Group className='mt-3'>
                            <Form.Select onChange={(e) => setGenero(e.target.value)} value={genero}>
                                <option value="Comedia">Comedia</option>
                                <option value="Drama">Drama</option>
                                <option value="Infantil">Infantil</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className='mt-3 text-end'>
                            <Button variant="primary" type="submit">Guardar</Button>
                        </Form.Group>
                    </Card.Body>
                </Card>
            </Form>
            <Lista ListaPeliculas={listaPeliculas} eliminarPelicula={eliminarPelicula}></Lista>
        </>

    );
};

export default Formulario;