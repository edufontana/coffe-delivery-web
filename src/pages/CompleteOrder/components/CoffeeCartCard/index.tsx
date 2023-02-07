import { QuantityInput } from '../../../../components/QuantityInput'
import { RegularText } from '../../../../components/Typography'
import {
  CoffeeCartCardContainer,
  ActionsContainer,
  RemoveButton,
} from './styles'
import { Trash } from 'phosphor-react'
import { CartItem } from '../../../../contexts/CartContext'
import { formatNumber } from '../../../../utils/formatMoney'

interface CoffeeCartCardProps {
  coffee: CartItem
}

export function CoffeeCartCard({ coffee }: CoffeeCartCardProps) {
  const coffeeTotal = coffee.price * coffee.quantity
  const formattedPrice = formatNumber(coffeeTotal)

  return (
    <CoffeeCartCardContainer>
      <div>
        <img src={`/coffees/${coffee.photo}`} alt="" />
        <div>
          <RegularText color="subtitle">Expresso tradi</RegularText>
          <ActionsContainer>
            <QuantityInput
              size="small"
              quantity={coffee.quantity}
            ></QuantityInput>
            <RemoveButton>
              <Trash size={16}>Remover</Trash>
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>

      <p>{formattedPrice}</p>
    </CoffeeCartCardContainer>
  )
}
