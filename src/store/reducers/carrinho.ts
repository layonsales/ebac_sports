import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type carrinhoState = {
  itens: Produto[]
  favoritos: number[]
}

const initialState: carrinhoState = {
  itens: [],
  favoritos: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload

      if (state.itens.find((product) => product.id === produto.id)) {
        alert('Item já adicionado')
      } else {
        state.itens.push(produto)
      }
    },
    favoritar: (state, action: PayloadAction<number>) => {
      const favorito = action.payload

      if (state.favoritos.includes(favorito)) {
        state.favoritos = state.favoritos.filter((id) => id !== action.payload)
      } else {
        state.favoritos = [...state.favoritos, action.payload]
        console.log(`Lista: ${state.favoritos}`)
      }
    }
  }
})

export const { adicionar, favoritar } = carrinhoSlice.actions
export default carrinhoSlice.reducer
