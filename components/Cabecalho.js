import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const Cabecalho = () => {
  return (
    <>
    <Navbar bg="dark" variant="dark"  >
      <Container>
        <Navbar.Brand href="/">Sistema Acadêmico</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/filmes">Filmes</Nav.Link>  
          <Nav.Link href="#pagina2">Página 2</Nav.Link>
          <Nav.Link href="#array">Array</Nav.Link>
          <Nav.Link href="#carros">Carros</Nav.Link>
        </Nav>
      </Container>
    </Navbar>


  </>
  )
}

export default Cabecalho