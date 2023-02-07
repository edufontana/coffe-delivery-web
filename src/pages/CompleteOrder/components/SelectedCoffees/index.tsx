import { Button } from '../../../../components/Button'
import { TitleText } from '../../../../components/Typography'
import { useCart } from '../../../../hooks/useCart'
import { CoffeeCartCard } from '../CoffeeCartCard'
import { ConfirmationSections } from './ConfirmationSections'
import { SelectedCoffeesContainer, DetailsContainer } from './styles'

export function SelectedCoffees() {
  const { cartItems } = useCart()

  return (
    <SelectedCoffeesContainer>
      <TitleText size="xs" color="subtitle">
        Cafés Selecionados
      </TitleText>
      <DetailsContainer>
        {cartItems.map((item) => (
          <CoffeeCartCard key={item.id} coffee={item}></CoffeeCartCard>
        ))}

        <ConfirmationSections></ConfirmationSections>
        <Button text={'Confimar Pedido'}></Button>
      </DetailsContainer>
    </SelectedCoffeesContainer>
  )
}
