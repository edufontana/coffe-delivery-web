import { TitleText } from '../../../../components/Typography'
import { CoffeCard } from '../CoffeCard'
import { OurCoffeesContainer, CoffeList } from './styles'

export function OurCoffes() {
  return (
    <OurCoffeesContainer className="container">
      <TitleText size="l" color="subtitle">
        Nossos Cafés
      </TitleText>

      <CoffeList>
        <CoffeCard></CoffeCard>
        <CoffeCard></CoffeCard>
        <CoffeCard></CoffeCard>
        <CoffeCard></CoffeCard>
        <CoffeCard></CoffeCard>
        <CoffeCard></CoffeCard>
      </CoffeList>
    </OurCoffeesContainer>
  )
}
