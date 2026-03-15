import { useState, useEffect } from 'react';
import type { CartItem, Product, ProductVariation, KitType } from '../types';
import { KIT_UPGRADE_PRICE } from '../types';

export function useCart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('peptide_cart');
    if (savedCart) {
      try {
        const parsed = JSON.parse(savedCart);
        // Migrate old cart items that don't have kitType
        const migrated = parsed.map((item: CartItem) => ({
          ...item,
          kitType: item.kitType || 'vial_only',
        }));
        setCartItems(migrated);
      } catch (error) {
        console.error('Error loading cart from localStorage:', error);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('peptide_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product: Product, variation?: ProductVariation, quantity: number = 1, kitType: KitType = 'vial_only') => {
    // Check stock availability
    const availableStock = variation ? variation.stock_quantity : product.stock_quantity;

    if (availableStock === 0) {
      alert(`Sorry, ${product.name}${variation ? ` ${variation.name}` : ''} is out of stock.`);
      return;
    }

    // Find existing item matching product, variation, AND kitType
    const existingItemIndex = cartItems.findIndex(
      item => item.product.id === product.id &&
        (variation ? item.variation?.id === variation.id : !item.variation) &&
        item.kitType === kitType
    );

    if (existingItemIndex > -1) {
      const currentQuantity = cartItems[existingItemIndex].quantity;
      const newQuantity = currentQuantity + quantity;

      if (newQuantity > availableStock) {
        const remainingStock = availableStock - currentQuantity;
        if (remainingStock > 0) {
          alert(`Only ${remainingStock} item(s) available in stock. Added ${remainingStock} to your cart.`);
          quantity = remainingStock;
        } else {
          alert(`Sorry, you already have the maximum available quantity (${currentQuantity}) in your cart.`);
          return;
        }
      }

      const updatedItems = [...cartItems];
      updatedItems[existingItemIndex].quantity += quantity;
      setCartItems(updatedItems);
    } else {
      if (quantity > availableStock) {
        alert(`Only ${availableStock} item(s) available in stock. Added ${availableStock} to your cart.`);
        quantity = availableStock;
      }

      const newItem: CartItem = {
        product,
        variation,
        kitType,
        quantity
      };
      setCartItems([...cartItems, newItem]);
    }
  };

  const updateQuantity = (index: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(index);
      return;
    }

    const item = cartItems[index];
    const availableStock = item.variation ? item.variation.stock_quantity : item.product.stock_quantity;

    if (quantity > availableStock) {
      alert(`Only ${availableStock} item(s) available in stock.`);
      quantity = availableStock;
    }

    const updatedItems = [...cartItems];
    updatedItems[index].quantity = quantity;
    setCartItems(updatedItems);
  };

  const removeFromCart = (index: number) => {
    const updatedItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedItems);
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem('peptide_cart');
  };

  const getItemPrice = (item: CartItem) => {
    const basePrice = item.variation
      ? (item.variation.discount_active && item.variation.discount_price != null ? item.variation.discount_price : item.variation.price)
      : (item.product.discount_active && item.product.discount_price != null ? item.product.discount_price : item.product.base_price);
    const kitUpgrade = item.kitType === 'complete_kit' ? KIT_UPGRADE_PRICE : 0;
    return basePrice + kitUpgrade;
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      return total + (getItemPrice(item) * item.quantity);
    }, 0);
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return {
    cartItems,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    getTotalPrice,
    getTotalItems,
    getItemPrice
  };
}
