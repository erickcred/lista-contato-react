import { useNavigate, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { Titulo } from '../TituloPagina/styles'
import { Input, Container, Botao } from './styles'
import { RootReducer } from '../../store'
import { useEffect, useState } from 'react'
import { adicionar, editar } from '../../store/reducers/contato'

const FormularioContato = () => {
  const { contatos } = useSelector((state: RootReducer) => state)
  const navigate = useNavigate()
  const dispath = useDispatch()
  const params = useParams()

  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')
  const [editando, setEditando] = useState(false)

  useEffect(() => {
    if (params.id !== undefined) {
      const id = parseInt(params.id)
      setEditando(true)
      contatos.itens.find((iten) => {
        if (iten.id === id) {
          setNome(iten.nome)
          setEmail(iten.email)
          setTelefone(iten.telefone)
        }
      })
    }
  }, [contatos.itens, editando, params.id])

  function adicionarContato(e: { preventDefault: () => void }) {
    e.preventDefault()
    if (nome === '' || email === '' || telefone === '') {
      alert('todos os campos devem ser preenchidos!')
    } else {
      dispath(
        adicionar({
          nome,
          email,
          telefone
        })
      )
      navigate('/')
    }
  }

  function editarContato(e: { preventDefault: () => void }) {
    e.preventDefault()
    dispath(
      editar({
        id: Number(params.id),
        nome,
        email,
        telefone
      })
    )
    navigate('/')
  }

  return (
    <>
      {editando ? (
        <Titulo>Editando Contato</Titulo>
      ) : (
        <Titulo>Cadastro Contato</Titulo>
      )}
      <form>
        <Container>
          <div>
            <Input
              type="text"
              placeholder="Nome Completo"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>

          <Input
            type="text"
            placeholder="Telefone"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
          />
          <Input
            type="text"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Container>

        {editando ? (
          <Botao onClick={editarContato}>Salvar</Botao>
        ) : (
          <Botao onClick={adicionarContato}>Cadastrar</Botao>
        )}
      </form>
    </>
  )
}

export default FormularioContato
