import React from 'react'
import EstiloGlobal, { Container } from './styles'
import ListaContato from './container/ListaContato'
import BarraLateral from './container/BarraLateral'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <BarraLateral />
        <ListaContato />
      </Container>
    </>
  )
}

export default App
