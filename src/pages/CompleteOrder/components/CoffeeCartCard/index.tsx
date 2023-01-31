import { QuantityInput } from '../../../../components/QuantityInput'
import { RegularText } from '../../../../components/Typography'
import {
  CoffeeCartCardContainer,
  ActionsContainer,
  RemoveButton,
} from './styles'
import { Trash } from 'phosphor-react'

export function CoffeeCartCard() {
  return (
    <CoffeeCartCardContainer>
      <div>
        <img src={`https://github.com/edufontana.png`} alt="" />
        <div>
          <RegularText color="subtitle">Expresso tradi</RegularText>
          <ActionsContainer>
            <QuantityInput size="small"></QuantityInput>
            <RemoveButton>
              <Trash size={16}>Remover</Trash>
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>

      <p>Rs 9,90</p>
    </CoffeeCartCardContainer>
  )
}
