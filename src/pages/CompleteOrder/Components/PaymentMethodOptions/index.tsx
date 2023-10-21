import { PaymentMethodInput } from '../PaymentMethodInput';
import { PaymentMethodOptionsContainer } from './styles';
import { CreditCard, Bank, Money } from 'phosphor-react';
import { useFormContext } from 'react-hook-form';
import { RegularText } from '../../../../components/Typography';

export const paymentMethods = {
  credit: {
    label: 'Cartão de crédito',
    icon: <CreditCard size={16} />,
  },
  debit: {
    label: 'Cartão de débito',
    icon: <Bank size={16} />,
  },
  money: {
    label: 'Dinheiro',
    icon: <Money size={16} />,
  }
}

export function PaymentMethodOptions() {
  const { register, formState: { errors } } = useFormContext();

  const paymentMethodError = errors?.paymentMethod?.message as unknown as string;

  return (
    <PaymentMethodOptionsContainer>
      {Object.entries(paymentMethods).map(([key, { label, icon }]) => (
        <PaymentMethodInput
          key={label}
          icon={icon}
          label={label}
          id={key}
          value={key}
          {...register('paymentMethod')}
        />
      ))}
      {paymentMethodError && <RegularText>{paymentMethodError}</RegularText>}
    </PaymentMethodOptionsContainer>
  );
}
