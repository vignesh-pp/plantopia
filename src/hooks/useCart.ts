import { useState } from 'react';
import { CartState, CartItem, Plant } from '../types';

export const useCart = () => {
  const [cart, setCart] = useState<CartState>({
    items: [],
    isOpen: false,
    total: 0
  });

  const calculateTotal = (items: CartItem[]) => {
    return items.reduce((total, item) => total + (item.plant.price * item.quantity), 0);
  };

  const addToCart = (plant: Plant, quantity: number = 1) => {
    setCart(prev => {
      const existingItem = prev.items.find(item => item.plant.id === plant.id);
      let newItems;
      
      if (existingItem) {
        newItems = prev.items.map(item =>
          item.plant.id === plant.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        newItems = [...prev.items, { plant, quantity }];
      }

      const newTotal = calculateTotal(newItems);

      return {
        ...prev,
        items: newItems,
        total: newTotal
      };
    });
  };

  const removeFromCart = (plantId: string) => {
    setCart(prev => {
      const newItems = prev.items.filter(item => item.plant.id !== plantId);
      const newTotal = calculateTotal(newItems);
      
      return {
        ...prev,
        items: newItems,
        total: newTotal
      };
    });
  };

  const updateQuantity = (plantId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(plantId);
      return;
    }

    setCart(prev => {
      const newItems = prev.items.map(item =>
        item.plant.id === plantId
          ? { ...item, quantity }
          : item
      );
      const newTotal = calculateTotal(newItems);
      
      return {
        ...prev,
        items: newItems,
        total: newTotal
      };
    });
  };

  const toggleCart = () => {
    setCart(prev => ({ ...prev, isOpen: !prev.isOpen }));
  };

  const closeCart = () => {
    setCart(prev => ({ ...prev, isOpen: false }));
  };

  return {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    toggleCart,
    closeCart
  };
};