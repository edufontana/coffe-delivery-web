import { RegularText, TitleText } from '../../components/Typography'
import { OrderConfirmedContainer, OrderDetailsContainer } from './styles'
import ConfirmedOrderImage from '../../assets/confirmed-order.svg'
import { InfoIcon } from '../../components/InfoIcon'
import { MapPin, Clock, CurrencyDollar } from 'phosphor-react'
import { useTheme } from 'styled-components'

export function OrderConfirmed() {
  const { colors } = useTheme()

  return (
    <OrderConfirmedContainer className="container">
      <div>
        <TitleText size="l">Uhu! Pedido confirmado</TitleText>
        <RegularText color="subtitle" size="l">
          Agora é só aguardar que logo o café chegará até você
        </RegularText>
      </div>

      <section>
        <OrderDetailsContainer>
          <InfoIcon
            icon={<MapPin weight="fill" />}
            iconBg={colors['brand-purple']}
            text={
              <RegularText>
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                <br />
                Ferrapos - Porto Alegre, RS
              </RegularText>
            }
          />
          <InfoIcon
            icon={<Clock weight="fill" />}
            iconBg={colors['brand-yellow']}
            text={
              <RegularText>
                Previsão de engrega
                <br />
                <strong>20min - 30min</strong>
              </RegularText>
            }
          />
          <InfoIcon
            icon={<CurrencyDollar weight="fill" />}
            iconBg={colors['brand-yellow']}
            text={
              <RegularText>
                Pagamento na entrega
                <br />
                <strong>Cartão de Crédito</strong>
              </RegularText>
            }
          />
        </OrderDetailsContainer>
        <img src={ConfirmedOrderImage} alt="" />
      </section>
    </OrderConfirmedContainer>
  )
}
