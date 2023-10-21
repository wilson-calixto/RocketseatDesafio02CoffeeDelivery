import { TitleText } from '../../../../components/Typography';
import { coffees } from '../../../../data/coffees';
import { CoffeeCard } from '../CoffeeCard';
import { OurCoffeesContainer, OurCoffeeList } from './styles';

export function OurCoffees() {
  return (
    <OurCoffeesContainer className='container'>
      <TitleText size='l' color='subtitle'>Nossos Cafés</TitleText>
      <OurCoffeeList>
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </OurCoffeeList>
    </OurCoffeesContainer>
  );
}
