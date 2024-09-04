import * as S from './styles'

import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'
import { useSelector } from 'react-redux'

import {
  selecionarFavoritosQuantidade,
  selecionarProdutoCarrinho,
  selecionarValorTotal
} from '../../store/reducers/carrinho.seletor'

const Header = () => {
  const valorTotal = useSelector(selecionarValorTotal)
  const quantidade = useSelector(selecionarProdutoCarrinho)
  const favoritos = useSelector(selecionarFavoritosQuantidade)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{favoritos} favoritos</span>
        <img src={cesta} />
        <span>
          {quantidade} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
