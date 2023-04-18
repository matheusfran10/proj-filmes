import 'bootstrap/dist/css/bootstrap.min.css';
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Pagina from '@/components/Pagina';
import { Container } from 'react-bootstrap';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Pagina titulo="Página Inicial" >

        <Container>
          <h1>Hello Word</h1>
          <p>Paragrafo 1</p>
          <p>Paragrafo 2</p>
          <p>Paragrafo 3</p>
        </Container>
      </Pagina>

    </>
  )
}
