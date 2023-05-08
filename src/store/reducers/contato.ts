import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

type contatoState = {
  itens: Contato[]
}

const initialState: contatoState = {
  itens: [
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
    }
  ]
}

const contatoSlice = createSlice({
  name: 'contato',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const nomeExiste = state.itens.find(
        (iten) => iten.nome === action.payload.nome
      )
      const emailExiste = state.itens.find(
        (iten) => iten.email === action.payload.email
      )

      if (nomeExiste) {
        alert(
          'Nome de contato já cadastrado, por favor acesso ele e altera o dado!'
        )
      } else if (emailExiste) {
        alert(
          'Nome de contato já cadastrado, por favor acesso ele e altera o dado!'
        )
      } else {
        const utimoContato = state.itens[state.itens.length - 1]
        const novoContato = {
          ...action.payload,
          id: utimoContato ? utimoContato.id + 1 : 1
        }
        state.itens.push(novoContato)
      }
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const contatoEditar = state.itens.findIndex(
        (iten) => iten.id === action.payload.id
      )
      if (contatoEditar >= 0) {
        state.itens[contatoEditar] = action.payload
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((iten) => iten.id !== action.payload)
    }
  }
})

export const { adicionar, editar, remove } = contatoSlice.actions
export default contatoSlice.reducer
