import { Intro } from './components/Intro'
import { OurCoffes } from './components/OurCoffees'
import { HomeContainer } from './styles'

export function HomePage() {
  return (
    <HomeContainer>
      <Intro></Intro>
      <OurCoffes></OurCoffes>
    </HomeContainer>
  )
}
