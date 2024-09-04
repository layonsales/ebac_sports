import { RootReducer } from '../'

export const selecionarProdutoCarrinho = (root: RootReducer) =>
  root.carrinho.itens.length

export const selecionarValorTotal = (root: RootReducer) =>
  root.carrinho.itens.reduce((acc, item) => {
    acc += item.preco
    return acc
  }, 0)

export const selecionarFavoritosQuantidade = (root: RootReducer) =>
  root.carrinho.favoritos.length

export const selecionarEhFavorito = (favoritos: number[], id: number) =>
  favoritos.some((produtoid) => produtoid === id)
