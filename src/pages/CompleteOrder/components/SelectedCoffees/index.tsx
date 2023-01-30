import { TitleText } from '../../../../components/Typography'
import { SelectedCoffeesContainer, DetailsContainer } from './styles'

export function SelectedCoffees() {
  return (
    <SelectedCoffeesContainer>
      <TitleText size="xs" color="subtitle">
        Cafés Selecionados
      </TitleText>
      <DetailsContainer>
        <p>itens</p>
      </DetailsContainer>
    </SelectedCoffeesContainer>
  )
}
