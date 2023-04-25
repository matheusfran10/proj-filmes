import Pagina from '@/components/Pagina'
import apiFilmes from '@/services/apiFilmes'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button, Card, CardGroup, Col, Collapse, Container, Row } from 'react-bootstrap'

const index = ({ filmes }) => {

    return (
        <>
            <Pagina titulo="Filmes">

                

                <Container>
                    <Row md={3}>
                        {filmes.map(item => (

                            <Col key={item.id}>
                                <CardGroup>
                                    <Card className='mb-5'>
                                        <Card.Img src={'https://image.tmdb.org/t/p/w500/' + item.backdrop_path} variant='top' className='bsPrefix' />
                                        <Card.Body>
                                            <Card.Title><h3>{item.title}</h3></Card.Title>
                                            <p >Lançamento: {item.release_date} </p>
                                            <p>Avaliação: {item.vote_average} </p>
                                            <Link href={'/filmes/' + item.id} className='btn btn-dark'>Detalhes</Link>

                                        </Card.Body>
                                    </Card>
                                </CardGroup>

                            </Col>

                        ))}

                    </Row>
                </Container>
            </Pagina>
        </>

    )
}

export default index

export async function getServerSideProps(context) {

    const resultado = await apiFilmes.get('/movie/popular?language=pt-BR')
    const filmes = resultado.data.results

    return {
        props: { filmes }, // will be passed to the page component as props
    }
}