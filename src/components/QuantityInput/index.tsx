import { Minus, Plus } from 'phosphor-react'
import { QuantityInputContainer, IconWrapper } from './styles'

interface QuantityInputProps {
  size?: 'medium' | 'small'
  onIncrease: () => void
  onDecrease: () => void
  quantity: number
}

export function QuantityInput({
  onIncrease,
  onDecrease,
  quantity,
  size = 'medium',
}: QuantityInputProps) {
  return (
    <QuantityInputContainer size={size}>
      <IconWrapper onClick={onDecrease}>
        <Minus size={14} width="fill" />
      </IconWrapper>
      <input type="number" readOnly value={quantity}></input>
      <IconWrapper onClick={onIncrease}>
        <Plus size={14} width="fill" />
      </IconWrapper>
    </QuantityInputContainer>
  )
}
