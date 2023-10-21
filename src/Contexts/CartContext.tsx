import { createContext, ReactNode, useState, useEffect } from "react";
import { Coffee } from '../pages/Home/components/CoffeeCard';
import { produce } from 'immer';

export interface CartItem extends Coffee {
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addCoffeeToCart: (coffee: CartItem) => void;
  cartQuantity: number;
  changeCartItemQuantity: (coffeeId: number, type: 'increase' | 'decrease') => void;
  cartItemsTotal: number;
  removeCartItem: (coffeeId: number) => void;
  cleanCart: () => void;
}

interface CartContextsProviderProps {
  children: ReactNode;
}

const COFFEE_ITEMS_STORAGE_KEY = '@Coffeeroasters:cartItems';

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: CartContextsProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storageCartItems = localStorage.getItem(COFFEE_ITEMS_STORAGE_KEY);

    if (storageCartItems) {
      return JSON.parse(storageCartItems);
    }
    return [];
  });


  const cartQuantity = cartItems.length;

  const cartItemsTotal = cartItems.reduce((total, item) => {
    return total + (item.price * item.quantity);
  }, 0);

  function addCoffeeToCart(coffee: CartItem) {
    const coffeeAlreadyExistsInCart = cartItems.findIndex(cartItem => cartItem.id === coffee.id);
    const newCart = produce(cartItems, (draft) => {
      if (coffeeAlreadyExistsInCart < 0) {
        draft.push(coffee);
      } else {
        draft[coffeeAlreadyExistsInCart].quantity += coffee.quantity;
      }

    });
    setCartItems(newCart);
    console.log(newCart)
  }

  function changeCartItemQuantity(cartItemId: number, type: 'increase' | 'decrease') {
    const newCart = produce(cartItems, (draft) => {
      const cartItemIndex = draft.findIndex(cartItem => cartItem.id === cartItemId);
      if (cartItemIndex < 0) {
        return;
      }
      if (cartItemIndex >= 0) {
        const item = draft[cartItemIndex];
        draft[cartItemIndex].quantity = type === 'increase' ? item.quantity + 1 : item.quantity - 1;
      }
    });
    setCartItems(newCart);
  }

  function removeCartItem(cartItemId: number) {
    const newCart = produce(cartItems, (draft) => {
      const cartItemIndex = draft.findIndex(cartItem => cartItem.id === cartItemId);
      if (cartItemIndex < 0) {
        return;
      }
      if (cartItemIndex >= cartItems.length) {
        draft.splice(cartItemIndex, 1);
      }
    });
    setCartItems(newCart);
  }

  function cleanCart() {
    setCartItems([]);
  }

  useEffect(() => {
    localStorage.setItem(COFFEE_ITEMS_STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addCoffeeToCart,
        cartItemsTotal,
        cartQuantity,
        changeCartItemQuantity,
        removeCartItem,
        cleanCart,
      }}>
      {children}
    </CartContext.Provider>

  );
}
