import { QuantityInput } from '../../../../components/QuantityInput';
import { RegularText, TitleText } from '../../../../components/Typography';
import { ShoppingCart } from 'phosphor-react';
import {
  CoffeeCardContainer,
  Tags,
  Name,
  Description,
  CardFooter,
  AddCardWrapper
} from './styles';
import { formatMoney } from '../../../../utils/formatMoney';
import { useCart } from '../../../../hooks/useCart';
import { useState } from 'react';
interface CoffeeCardProps {
  coffee: Coffee;
}

export interface Coffee {
  id: number;
  name: string;
  description: string;
  price: number;
  tags: string[];
  photo: string;
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const [quantity, setQuantity] = useState(1);

  function handleIncrease() {
    setQuantity(quantity + 1);
  }

  function handleDecrease() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  const { addCoffeeToCart } = useCart();

  const formattedPrice = formatMoney(coffee.price);

  function handleAddToCart() {
    const coffeeToAdd = {
      ...coffee,
      quantity,
    };
    addCoffeeToCart(coffeeToAdd);
  }
  return (
    <CoffeeCardContainer>
      <img src={`/coffees/${coffee.photo}`} />
      <Tags>
        {coffee.tags.map(tag => (
          <span key={`${coffee.id}${tag}`}>{tag}</span>
        ))}
      </Tags>
      <Name>{coffee.name}</Name>
      <Description>{coffee.description}</Description>
      <CardFooter>
        <div>
          <RegularText size='s'>R$</RegularText>
          <TitleText size='m' color='text' as='strong'>{formattedPrice}</TitleText>
        </div>
        <AddCardWrapper>
          <QuantityInput
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            quantity={quantity}
          />
          <button
            onClick={handleAddToCart}
          >
            <ShoppingCart size={22} weight='fill' />
          </button>
        </AddCardWrapper>
      </CardFooter>
    </CoffeeCardContainer >
  );
}
