import Pagina from '@/components/Pagina'
import apiFilmes from '@/services/apiFilmes'
import React, { useEffect, useState } from 'react'
import { Button, Card, CardGroup, Col, Collapse, Container, Row } from 'react-bootstrap'

const index = () => {

    const [open, setOpen] = useState(false);
    const [filmes, setFilmes] = useState([])

    useEffect(() => {

        apiFilmes.get('/movie/popular').then(resultado => {
            setFilmes(resultado.data.results)
        })

    }, [])

    return (

        <>
            <Pagina titulo="Filmes">
                <Container>

                    {filmes.map(item => (
                        
                            <Col >
                                <CardGroup>
                                    <Card className='mb-3'>
                                        <Card.Img src={'https://image.tmdb.org/t/p/w500/' + item.backdrop_path} variant='top' className='bsPrefix' />
                                        <Card.Body>
                                            <Card.Title>{item.title}</Card.Title>
                                            <p >Lançamento: {item.release_date} </p>
                                            <p>Avaliação: {item.vote_average} </p>
                                            <div>
                                                <Button
                                                    variant='danger '
                                                    onClick={() => setOpen(!open)}
                                                    aria-controls="example-collapse-text"
                                                    aria-expanded={open}
                                                    className='bt-'

                                                >
                                                    Detalhes
                                                </Button>
                                                <Collapse in={open}>
                                                    <div className='mt-2' id="example-collapse-text">
                                                        <p>{item.overview}</p>

                                                    </div>

                                                </Collapse>
                                            </div>

                                        </Card.Body>
                                    </Card>
                                </CardGroup>

                            </Col>
                        
                    ))}


                </Container>
            </Pagina>
        </>

    )
}

export default index