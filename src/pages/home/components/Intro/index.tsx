import {
  BenefitsContainer,
  Container,
  IntroContent,
  IntroTitle,
} from './styles'
import introImg from '../../../../assets/intro-img.png'
import { RegularText } from '../../../../components/Typography'
import { InfoIcon } from '../../../../components/InfoIcon'
import { ShoppingCart } from 'phosphor-react'
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
              icon={<ShoppingCart width="fill" />}
              text="compra segura"
              iconBg={colors['brand-yellow-dark']}
            ></InfoIcon>
            <InfoIcon
              icon={<ShoppingCart width="fill" />}
              text="compra segura"
              iconBg={colors['brand-yellow-dark']}
            ></InfoIcon>

            <InfoIcon
              icon={<ShoppingCart width="fill" />}
              text="compra segura"
              iconBg={colors['brand-yellow-dark']}
            ></InfoIcon>
          </BenefitsContainer>
        </div>
        <img src={introImg}></img>
      </IntroContent>
    </Container>
  )
}
