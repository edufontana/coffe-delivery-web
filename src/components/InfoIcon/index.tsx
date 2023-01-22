import React, { ReactNode } from 'react'

import { IconContainer, InfoWithIconContainer } from './styles'

interface InfoIconProps {
  icon: ReactNode
  text: string | ReactNode
  iconBg: string
}

export function InfoIcon({ icon, iconBg, text }: InfoIconProps) {
  return (
    <InfoWithIconContainer>
      <IconContainer iconBg={iconBg}>{icon}</IconContainer>
      {typeof text === 'string' ? <p>{text}</p> : text}
    </InfoWithIconContainer>
  )
}
