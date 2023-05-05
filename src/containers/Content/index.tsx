import { Routes, Route } from 'react-router-dom'

import Contatos from '../Contatos'
import Cadastro from '../Cadastro'
import { MainContainer } from './styles'

const Content = () => {
  return (
    <MainContainer>
      <Routes>
        <Route path="/" element={<Contatos />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </MainContainer>
  )
}

export default Content
