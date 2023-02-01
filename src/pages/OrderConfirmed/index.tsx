import { RegularText, TitleText } from '../../components/Typography'
import { OrderConfirmedContainer } from './styles'

export function OrderConfirmed() {
  return (
    <OrderConfirmedContainer className="container">
      <div>
        <TitleText size="l">Uhu! Pedido confirmado</TitleText>
        <RegularText color="subtitle" size="l">
          Agora é só aguardar que logo o café chegará até você
        </RegularText>
      </div>

      <section></section>
    </OrderConfirmedContainer>
  )
}
