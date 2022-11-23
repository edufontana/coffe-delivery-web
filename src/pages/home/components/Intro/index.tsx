import { Container, IntroContent } from './styles'
import introImg from '../../../../assets/intro-img.png'

export function Intro() {
  return (
    <Container>
      <IntroContent className="container">
        <div></div>
        <img src={introImg}></img>
      </IntroContent>
    </Container>
  )
}
