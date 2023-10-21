import { HeaderContainer, HeaderButtonsContainer, HeaderButton } from './styles';
import logoIgnite from '../../assets/logoIgnite.png';
import { MapPin, ShoppingCart } from 'phosphor-react';
import { useCart } from '../../hooks/useCart';
import { NavLink } from "react-router-dom"

export function Header() {
  const { cartQuantity } = useCart();
  return (
    <HeaderContainer>
      <div className="container">
        <NavLink to={"/"} >
          <img src={logoIgnite} />
        </NavLink>
        <HeaderButtonsContainer>
          <HeaderButton variant="purple">
            <MapPin size={20} weight="fill" />
            Manaus, AM
          </HeaderButton>
          <NavLink to={"/completeOrder"}>
            <HeaderButton variant="yellow">
              {cartQuantity >= 1 && <span>{cartQuantity}</span>}
              <ShoppingCart size={20} weight="fill" />
            </HeaderButton>
          </NavLink>
        </HeaderButtonsContainer>
      </div>
    </HeaderContainer>
  )
}
