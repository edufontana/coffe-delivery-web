import { createContext, ReactNode, useState } from 'react'
import { Coffee } from '../pages/home/components/CoffeCard'
import { produce } from 'immer'

export interface CartItem extends Coffee {
  quantity: number
}

interface CartContextType {
  cartItems: CartItem[]
  addCoffeToCart: (coffee: CartItem) => void
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  function addCoffeToCart(coffee: CartItem) {
    const coffeAlreadyExistsInCart = cartItems.findIndex(
      (cartItem) => cartItem.id === coffee.id,
    )

    const newCart = produce(cartItems, (draft) => {
      if (coffeAlreadyExistsInCart < 0) {
        draft.push(coffee)
      } else {
        draft[coffeAlreadyExistsInCart].quantity += coffee.quantity
      }
    })

    setCartItems(newCart)
  }

  return (
    <CartContext.Provider value={{ cartItems, addCoffeToCart }}>
      {children}
    </CartContext.Provider>
  )
}
