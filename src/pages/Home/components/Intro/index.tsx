import {
  IntroContainer,
  IntroContent,
  IntroTitle,
  BenefitsContainer,
} from './styles';
import {
  Coffee,
  Package,
  ShoppingCart,
  Timer
} from 'phosphor-react';
import cupofcoffee from '../../../../assets/cupofcoffee.svg';
import { RegularText } from '../../../../components/Typography';
import { InfoWithIcon } from '../../../../components/InfoWithIcon';
import { useTheme } from 'styled-components';


export function Intro() {
  const { colors } = useTheme();
  return (
    <IntroContainer>
      <IntroContent className='container'>
        <div>
          <section>
            <IntroTitle size="xl">
              Encontre o café perfeito <br />
              para qualquer hora do dia
            </IntroTitle>
            <RegularText size='l' color='subtitle' as='h3'>
              Com o Coffee Delivery você recebe seu
              café onde estiver, a qualquer hora.
            </RegularText>
          </section>
          <BenefitsContainer>
            <InfoWithIcon
              iconBg={colors['brand-yellow-dark']}
              icon={<ShoppingCart weight='fill' />}
              text='Compra simples e segura' title={''}
            />
            <InfoWithIcon
              iconBg={colors['base-text']}
              icon={<Package weight='fill' />}
              text='Embalagem mantém o café intacto' title={''}
            />
            <InfoWithIcon
              iconBg={colors['brand-yellow']}
              icon={<Timer weight='fill' />}
              text='Entrega rápida e rastreada' title={''}
            />
            <InfoWithIcon
              iconBg={colors['brand-purple']}
              icon={<Coffee weight='fill' />}
              text='O café chega fresquinho até você' title={''}
            />
          </BenefitsContainer>
        </div>
        <img src={cupofcoffee} alt='Copo de café' />
      </IntroContent>
    </IntroContainer>
  );
}
