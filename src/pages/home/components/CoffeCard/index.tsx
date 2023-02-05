import { QuantityInput } from '../../../../components/QuantityInput'
import { RegularText, TitleText } from '../../../../components/Typography'
import {
  CoffeCardContainer,
  Tags,
  Name,
  Description,
  CardFooter,
  AddCartWrapper,
} from './styles'
import { ShoppingCart } from 'phosphor-react'
import { formatNumber } from '../../../../utils/formatMoney'
import { useCart } from '../../../../hooks/useCart'
import { useState } from 'react'

export interface Coffee {
  id: number
  tags: string[]
  name: string
  description: string
  photo: string
  price: number
}

interface CoffeeProps {
  coffee: Coffee
}

export function CoffeCard({ coffee }: CoffeeProps) {
  const [quantity, setQuantity] = useState(1)

  function handleIncrease() {
    setQuantity((state) => state + 1)
  }

  function handleDecrease() {
    setQuantity((state) => state - 1)
  }

  const { addCoffeToCart } = useCart()

  function handleAddToCart() {
    const coffeeToAdd = {
      ...coffee,
      quantity: 1,
    }
    addCoffeToCart(coffeeToAdd)
  }

  const formattedPrice = formatNumber(coffee.price)

  return (
    <CoffeCardContainer>
      <img src={`/coffees/${coffee.photo}`} />
      <Tags>
        {coffee.tags.map((item) => (
          <span key={`${coffee.id}${item}`}>{item}</span>
        ))}
      </Tags>
      <Name>{coffee.name}</Name>
      <Description>{coffee.description}</Description>

      <CardFooter>
        <div>
          <RegularText size="s">R$</RegularText>
          <TitleText size="m" color="text" as="strong">
            {formattedPrice}
          </TitleText>
        </div>

        <AddCartWrapper>
          <QuantityInput
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            quantity={quantity}
          />
          <button onClick={handleAddToCart}>
            <ShoppingCart size={22} weight="fill" />
          </button>
        </AddCartWrapper>
      </CardFooter>
    </CoffeCardContainer>
  )
}
