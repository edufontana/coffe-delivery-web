import styled from 'styled-components'

export const InfoWithIconContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  gap: 0.75rem;
  flex-direction: row;
`
interface IconContainerProps {
  iconBg: string
}

export const IconContainer = styled.div<IconContainerProps>`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors['base-white']};
  background-color: ${({ iconBg }) => iconBg};
  justify-content: center;
`
