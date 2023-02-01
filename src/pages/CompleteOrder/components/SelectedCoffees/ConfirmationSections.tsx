import { RegularText } from '../../../../components/Typography'
import { ConfirmationSectionContainer } from './styles'

export function ConfirmationSections() {
  return (
    <ConfirmationSectionContainer>
      <div>
        <RegularText size="s">Total de itens</RegularText>
        <RegularText>R$ 9,90</RegularText>
      </div>
      <div>
        <RegularText size="s">Entrega</RegularText>
        <RegularText>R$ 3,50</RegularText>
      </div>
      <div>
        <RegularText weight="700" size="l" color="subtitle">
          Total
        </RegularText>
        <RegularText weight="700" size="l" color="subtitle">
          R$ 29,90
        </RegularText>
      </div>
    </ConfirmationSectionContainer>
  )
}
