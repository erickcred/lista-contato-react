import Tr from '../../components/TbodyTr'
import { MainContainer } from '../../styles'
import { Tabela } from './styles'

const ListaContato = () => {
  return (
    <MainContainer>
      <Tabela>
        <thead>
          <tr>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Telefone</th>
            <th colSpan={2}>Ações</th>
          </tr>
        </thead>
        <tbody>
          <Tr
            nome="Fulano da Silva"
            email="email@email.com"
            telefone="(41) 9 9999-9999"
          />
          <Tr
            nome="Siclano da Silva"
            email="email@email.com"
            telefone="(41) 9 9999-9999"
          />
          <Tr
            nome="Beltrano da Silva"
            email="email@email.com"
            telefone="(41) 9 9999-9999"
          />
        </tbody>
      </Tabela>
    </MainContainer>
  )
}

export default ListaContato
