import { CurrencyDollar, MapPin, Clock } from 'phosphor-react';
import { InfoWithIcon } from '../../components/InfoWithIcon';
import { RegularText, TitleText } from '../../components/Typography';
import { OrderConfirmedPageContainer, OrderDetailContainer } from './styles';
import confirmedOrderIllustration from '../../assets/confirmed-order.svg';
import { useTheme } from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import { OrderData } from '../CompleteOrder';
import { paymentMethods } from '../CompleteOrder/Components/PaymentMethodOptions';
import { useEffect } from 'react';

interface LocationType {
  state: OrderData
}

export function OrderConfirmedPage() {
  const { colors } = useTheme();
  const { state } = useLocation() as unknown as LocationType;
  const navigate = useNavigate();

  useEffect(() => {
    if (!state) {
      navigate('/');
    }
  }, []);
  if (!state) return <></>

  return (
    <OrderConfirmedPageContainer className='container'>
      <div>
        <TitleText size='l'>Uhu! pedido confirmado</TitleText>
        <RegularText size='s' color='subtitle'>
          Agora é só aguardar que logo o café chegará até você.
        </RegularText>
      </div>
      <section>
        <OrderDetailContainer>
          <InfoWithIcon
            icon={<MapPin weight='fill' />}
            iconBg={colors['brand-purple']}
            text={<RegularText size='s' color='subtitle'>Entrega Em <strong>{state.street},{state.number}</strong> <br />
              {state.district} ,{state.city} - {state.uf}</RegularText>}
            title=''
          />
          <InfoWithIcon
            icon={<Clock weight='fill' />}
            iconBg={colors['brand-yellow']}
            text={<RegularText size='s' color='subtitle'>Previsão de entrega <br />
              <strong>20 min - 30 min</strong></RegularText>}
            title=''
          />
          <InfoWithIcon
            icon={<CurrencyDollar weight='fill' />}
            iconBg={colors['brand-yellow-dark']}
            text={<RegularText size='s' color='subtitle'>Pagamento da entrega <br />
              <strong>{paymentMethods[state.paymentMethod].label}</strong></RegularText>} title=''
          />
        </OrderDetailContainer>
        <img src={confirmedOrderIllustration} />
      </section>
    </OrderConfirmedPageContainer >
  );
}


