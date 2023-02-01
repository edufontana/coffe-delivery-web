import { Button } from '../../../../components/Button'
import { TitleText } from '../../../../components/Typography'
import { CoffeeCartCard } from '../CoffeeCartCard'
import { ConfirmationSections } from './ConfirmationSections'
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

        <ConfirmationSections></ConfirmationSections>
        <Button text={'Confimar Pedido'}></Button>
      </DetailsContainer>
    </SelectedCoffeesContainer>
  )
}
