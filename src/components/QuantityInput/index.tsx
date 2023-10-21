import { QuantityInputContainer, IconWrapperContainer } from './styles';
import { Minus, Plus } from 'phosphor-react';

interface QuantityInputProps {
  size?: 'small' | 'medium';
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}


export function QuantityInput({ onDecrease, onIncrease, quantity, size = 'medium' }: QuantityInputProps) {
  return (
    <QuantityInputContainer size={size}>
      <IconWrapperContainer onClick={onDecrease}>
        <Minus size={14} weight='fill' />
      </IconWrapperContainer>
      <input type='number' readOnly value={quantity} />
      <IconWrapperContainer onClick={onIncrease}>
        <Plus size={14} weight='fill' />
      </IconWrapperContainer>
    </QuantityInputContainer>
  );
}
