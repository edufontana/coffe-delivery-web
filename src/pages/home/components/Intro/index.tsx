import {
  BenefitsContainer,
  Container,
  IntroContent,
  IntroTitle,
} from './styles'
import introImg from '../../../../assets/intro-img.png'
import { RegularText } from '../../../../components/Typography'
import { InfoIcon } from '../../../../components/InfoIcon'
import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'
import { useTheme } from 'styled-components'

export function Intro() {
  const { colors } = useTheme()
  return (
    <Container>
      <IntroContent className="container">
        <div>
          <section>
            <IntroTitle size="xl">
              Encontre o café perfeito para qualquer hora do dia
            </IntroTitle>
            <RegularText size="l" color="subtitle" as="h3">
              Com o Coffe Delivery você recebe seu café onde estiver, a qualquer
              hora
            </RegularText>
          </section>
          <BenefitsContainer>
            <InfoIcon
              icon={<ShoppingCart width="fill" />}
              text="compra segura"
              iconBg={colors['brand-yellow-dark']}
            ></InfoIcon>
            <InfoIcon
              icon={<Package width="fill" />}
              text="Embalagem mantém o café intacto"
              iconBg={colors['base-text']}
            ></InfoIcon>
            <InfoIcon
              icon={<Timer width="fill" />}
              text="Entrega rápida e rastreada"
              iconBg={colors['brand-yellow']}
            ></InfoIcon>

            <InfoIcon
              icon={<Coffee width="fill" />}
              text="O café chega fresquinho até você"
              iconBg={colors['brand-purple']}
            ></InfoIcon>
          </BenefitsContainer>
        </div>
        <img src={introImg}></img>
      </IntroContent>
    </Container>
  )
}
