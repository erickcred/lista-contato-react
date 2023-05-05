import { Input, Container, Botao } from './styles'

const FormularioContato = () => {
  return (
    <form>
      <Container>
        <div>
          <Input type="text" placeholder="Nome Completo" />
        </div>
        <Input type="text" placeholder="Telefone" />
        <Input type="text" placeholder="E-mail" />
      </Container>
      <Botao>Cadastrar</Botao>
    </form>
  )
}

export default FormularioContato
