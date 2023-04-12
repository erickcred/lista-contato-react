type Props = {
  nome: string
  email: string
  telefone: string
}

const Tr = ({ nome, email, telefone }: Props) => {
  return (
    <tr>
      <td>{nome}</td>
      <td>{email}</td>
      <td>{telefone}</td>
      <td>
        <button type="button">Editar</button>
      </td>
      <td>
        <button type="button">Excluir</button>
      </td>
    </tr>
  )
}

export default Tr
