import Produto from '../components/Produto'
import { useGetProdutoQuery } from '../services/api'

import * as S from './styles'

const ProdutosComponent = () => {
  const { data: produtos, isLoading } = useGetProdutoQuery()
  {
    if (isLoading)
      return (
        <S.Carregando>
          <h1>CARREGANDO</h1>
        </S.Carregando>
      )
  }

  return (
    <>
      <S.Produtos>
        {produtos?.map((produto) => (
          <Produto key={produto.id} produto={produto} />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
