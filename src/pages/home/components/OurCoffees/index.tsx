import { TitleText } from '../../../../components/Typography'
import { coffees } from '../../../../data/coffees'
import { CoffeCard } from '../CoffeCard'
import { OurCoffeesContainer, CoffeList } from './styles'

export function OurCoffes() {
  return (
    <OurCoffeesContainer className="container">
      <TitleText size="l" color="subtitle">
        Nossos Cafés
      </TitleText>

      <CoffeList>
        {coffees.map((item) => (
          <CoffeCard key={item.id} coffee={item}></CoffeCard>
        ))}
      </CoffeList>
    </OurCoffeesContainer>
  )
}
