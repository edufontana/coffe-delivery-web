import { Container, IntroContent, IntroTitle } from './styles'
import introImg from '../../../../assets/intro-img.png'

export function Intro() {
  return (
    <Container>
      <IntroContent className="container">
        <div>
          <section>
            <IntroTitle size="xl">
              Encontre o café perfeito para qualquer hora do dia
            </IntroTitle>
          </section>
        </div>
        <img src={introImg}></img>
      </IntroContent>
    </Container>
  )
}
