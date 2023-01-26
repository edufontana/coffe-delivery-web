import { Minus, Plus } from 'phosphor-react'
import { QuantityInputContainer, IconWrapper } from './styles'

export function QuantityInput() {
  return (
    <QuantityInputContainer>
      <IconWrapper>
        <Minus size={14} width="fill" />
      </IconWrapper>
      <input type="number" readOnly value={1}></input>
      <IconWrapper>
        <Plus size={14} width="fill" />
      </IconWrapper>
    </QuantityInputContainer>
  )
}
