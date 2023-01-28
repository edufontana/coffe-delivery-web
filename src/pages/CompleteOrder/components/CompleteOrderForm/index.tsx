import { TitleText } from '../../../../components/Typography'
import { SectionTitle } from '../SectionTitle'
import { CompleteOrderFormContainer, FormSectionContainer } from './styles'
import { MapPinLine } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { AdressForm } from './AdressForm'

export function CompleteOrderForm() {
  const { colors } = useTheme()

  return (
    <CompleteOrderFormContainer>
      <TitleText size="xs" color="subtitle">
        Complete seu pedido
      </TitleText>

      <FormSectionContainer>
        <SectionTitle
          title="Endereço de entrega"
          subtitle="Informe o endereço onde deseja receber o pedido"
          icon={<MapPinLine size={22} color={colors['brand-yellow-dark']} />}
        />
        <AdressForm />
      </FormSectionContainer>
    </CompleteOrderFormContainer>
  )
}
