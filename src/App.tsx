import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import { Container, EstiloGlobal } from './styles'
import BarraLateral from './containers/BarraLateral'
import Content from './containers/Content'
import store from './store'

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <EstiloGlobal />

        <Container>
          <BarraLateral />
          <Content />
        </Container>
      </BrowserRouter>
    </Provider>
  )
}

export default App
