import { useSelector, useDispatch } from 'react-redux'
import TituloPagina from '../../components/TituloPagina'
import { Table, Button, ButtonExclir } from './styles'
import { RootReducer } from '../../store'
import { useNavigate } from 'react-router-dom'
import { remove } from '../../store/reducers/contato'

const Contatos = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { contatos } = useSelector((state: RootReducer) => state)

  return (
    <>
      <TituloPagina>Lista de Contatos</TituloPagina>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Telefone</th>
            <th>E-mail</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {contatos.itens.map((contato) => (
            <tr key={contato.id}>
              <td>{contato.id}</td>
              <td>{contato.nome}</td>
              <td>{contato.telefone}</td>
              <td>{contato.email}</td>
              <td>
                <Button onClick={() => navigate(`/cadastro/${contato.id}`)}>
                  Editar
                </Button>
                <ButtonExclir onClick={() => dispatch(remove(contato.id))}>
                  Excluir
                </ButtonExclir>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  )
}

export default Contatos
