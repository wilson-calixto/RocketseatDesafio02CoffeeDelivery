import { QuantityInput } from '../../../../components/QuantityInput';
import { RegularText } from '../../../../components/Typography';
import { CoffeeCartCardContainer, ActionsContainer, RemoveButtonContainer } from './styles';
import { Trash } from 'phosphor-react';
import { CartItem } from '../../../../Contexts/CartContext';
import { formatMoney } from '../../../../utils/formatMoney';
import { useCart } from '../../../../hooks/useCart';

interface CoffeeCartCardProps {
  coffee: CartItem;
}

export function CoffeeCartCard({ coffee }: CoffeeCartCardProps) {
  const { changeCartItemQuantity, removeCartItem } = useCart();

  const coffeeTotal = coffee.price * coffee.quantity;

  const formattedprice = formatMoney(coffeeTotal);

  function handleIncrease() {
    changeCartItemQuantity(coffee.id, 'increase');
  }

  function handleDecrease() {
    changeCartItemQuantity(coffee.id, 'decrease');
  }

  function handleRemove() {
    removeCartItem(coffee.id);
  }

  return (
    <CoffeeCartCardContainer>
      <div>
        <img src={`/coffees/${coffee.photo}`} />
        <div>
          <RegularText color='subtitle'>{coffee.name}</RegularText>
          <ActionsContainer>
            <QuantityInput
              size='small'
              quantity={coffee.quantity}
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
            />
            <RemoveButtonContainer
              onClick={handleRemove}
            >
              <Trash size={22} />
              Remover
            </RemoveButtonContainer>
          </ActionsContainer>
        </div>
      </div>
      <p>R$ {formattedprice}</p>
    </CoffeeCartCardContainer>
  );
}
