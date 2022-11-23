import { HeaderButton, HeaderButtonsContainer, HeaderContainer } from './styles'
import CoffeLogoImg from '../../assets/LogoHeader.svg'

export function Header() {
  return (
    <HeaderContainer>
      <div className="container">
        <img src={CoffeLogoImg} alt="" />
        <HeaderButtonsContainer>
          <HeaderButton>a</HeaderButton>
        </HeaderButtonsContainer>
      </div>
    </HeaderContainer>
  )
}
