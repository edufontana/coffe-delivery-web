import { TitleText } from '../../../../components/Typography'
import { CoffeeCartCard } from '../CoffeeCartCard'
import { SelectedCoffeesContainer, DetailsContainer } from './styles'

export function SelectedCoffees() {
  return (
    <SelectedCoffeesContainer>
      <TitleText size="xs" color="subtitle">
        Cafés Selecionados
      </TitleText>
      <DetailsContainer>
        <CoffeeCartCard></CoffeeCartCard>
        <CoffeeCartCard></CoffeeCartCard>
        <CoffeeCartCard></CoffeeCartCard>
      </DetailsContainer>
    </SelectedCoffeesContainer>
  )
}
