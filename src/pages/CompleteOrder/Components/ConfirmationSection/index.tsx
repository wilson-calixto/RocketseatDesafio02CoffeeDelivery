import { Button } from '../../../../components/Button';
import { RegularText } from '../../../../components/Typography';
import { ConfirmationSectionContainer } from './styles';
import { useCart } from '../../../../hooks/useCart';
import { formatMoney } from '../../../../utils/formatMoney';

const DELIVERY_PRICE = 3.5;

export function ConfirmationSection() {
  const { cartItemsTotal, cartQuantity } = useCart();

  const formattedItemsTotal = formatMoney(cartItemsTotal);
  const cartTotal = cartItemsTotal + DELIVERY_PRICE;
  const formattedCartTotal = formatMoney(cartTotal);
  const formattedDeliveryPrice = formatMoney(DELIVERY_PRICE);
  return (
    <ConfirmationSectionContainer>
      <div>
        <RegularText color='subtitle'>Total de Itens</RegularText>
        <RegularText color='subtitle'> R${formattedItemsTotal} </RegularText>
      </div>
      <div>
        <RegularText color='subtitle'>Entrega</RegularText>
        <RegularText color='subtitle'>R$ {formattedDeliveryPrice}</RegularText>
      </div>
      <div>
        <RegularText color='subtitle'>Total</RegularText>
        <RegularText color='subtitle'>R$ {formattedCartTotal}</RegularText>
      </div>
      <Button text='Confirmar pedido' disabled={cartQuantity < 0} type="submit" />
    </ConfirmationSectionContainer>
  );
}
