import styled from 'styled-components'
import introBackGroundImg from '../../../../assets/intro-background.png'
import { rgba } from 'polished'
import { TitleText } from '../../../../components/Typography'
export const Container = styled.div`
  width: 100%;
  height: 34rem;
  background: ${({ theme }) => `url(${introBackGroundImg}) no-repeat center,
      linear-gradient(
        0deg,
        ${theme.colors['base-white']} 0%,
        ${rgba(theme.colors['base-background'], 0.2)} 50%,
        ${theme.colors['base-background']} 100%
      )`};
  background-size: cover;
`

export const IntroContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;
`

export const IntroTitle = styled(TitleText)`
  margin-bottom: 1rem;
`
