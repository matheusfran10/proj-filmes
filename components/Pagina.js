import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Cabecalho from './Cabecalho';
import { Container } from 'react-bootstrap';
import Rodape from './Rodape';

const Pagina = (props) => {
    return (
        <>
            <Cabecalho />
            <div className='bg-secondary py-5 text-white text-center mb-3'>
                <Container>
                    <h1>
                        {props.titulo}
                    </h1>
                </Container>
            </div>

            <Container className='mb-5 pb-4'>
                {props.children}
            </Container>


            <Rodape />

        </>
    )
}

export default Pagina