import { Routes, Route } from 'react-router-dom'

import Contatos from '../Contatos'
import { MainContainer } from './styles'
import FormularioContato from '../../components/FormularioCadastro'

const Content = () => {
  return (
    <MainContainer>
      <Routes>
        <Route path="/" element={<Contatos />} />
        <Route path="/cadastro" element={<FormularioContato />} />
        <Route path="/cadastro/:id" element={<FormularioContato />} />
      </Routes>
    </MainContainer>
  )
}

export default Content
