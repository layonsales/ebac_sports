import { useDispatch, useSelector } from 'react-redux'
import { Produto as ProdutoType } from '../../App'
import * as S from './styles'

import { adicionar, favoritar } from '../../store/reducers/carrinho'

import { selecionarEhFavorito } from '../../store/reducers/carrinho.seletor'
import { RootReducer } from '../../store'

type Props = {
  produto: ProdutoType
}

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

const ProdutoComponent = ({ produto }: Props) => {
  const dispatch = useDispatch()

  const adicionarAoCarrinho = () => dispatch(adicionar(produto))
  const favorito = () => dispatch(favoritar(produto.id))
  const ehFavorito = useSelector((root: RootReducer) =>
    selecionarEhFavorito(root.carrinho.favoritos, produto.id)
  )

  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Prices>
        <strong>{paraReal(produto.preco)}</strong>
      </S.Prices>
      <S.BtnComprar onClick={favorito} type="button">
        {ehFavorito ? '- Remover dos favoritos' : '+ Adicionar aos favoritos'}
      </S.BtnComprar>
      <S.BtnComprar onClick={adicionarAoCarrinho} type="button">
        Adicionar ao Carrinho
      </S.BtnComprar>
    </S.Produto>
  )
}

export default ProdutoComponent
