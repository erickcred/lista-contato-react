import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Container, EstiloGlobal } from './styles'
import BarraLateral from './containers/BarraLateral'
import Content from './containers/Content'

const App = () => {
  return (
    <BrowserRouter>
      <EstiloGlobal />

      <Container>
        <BarraLateral />
        <Content />
      </Container>
    </BrowserRouter>
  )
}

export default App
