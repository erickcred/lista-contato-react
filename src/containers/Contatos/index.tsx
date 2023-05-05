import TituloPagina from '../../components/TituloPagina'
import { Table, Button, ButtonExclir } from './styles'

const contatos = [
  {
    id: 1,
    nome: 'Fulano da Silva',
    telefone: '41 999990000',
    email: 'fulano@email.com'
  },
  {
    id: 2,
    nome: 'Siclno da Silva',
    telefone: '41 999991111',
    email: 'siclano@email.com'
  },
  {
    id: 3,
    nome: 'Astou da Silva',
    telefone: '41 999992222',
    email: 'astou@email.com'
  },
  {
    id: 4,
    nome: 'Ferdin da Silva',
    telefone: '41 999993333',
    email: 'ferdin@email.com'
  }
]

const Contatos = () => {
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
          {contatos.map((contato) => (
            <tr key={contato.id}>
              <td>{contato.id}</td>
              <td>{contato.nome}</td>
              <td>{contato.telefone}</td>
              <td>{contato.email}</td>
              <td>
                <Button>Editar</Button>
                <ButtonExclir>Excluir</ButtonExclir>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  )
}

export default Contatos
