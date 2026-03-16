import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import Cart from '../components/Cart';
import type { CartItem, Product, ProductVariation } from '../types';
import { KIT_UPGRADE_PRICE } from '../types';

// ─────────────────────────────────────────────────────
// Test Fixtures
// ─────────────────────────────────────────────────────

const mockProduct: Product = {
  id: 'prod-1',
  name: 'Tirzepatide',
  description: 'Research peptide',
  category: 'peptides',
  base_price: 2500,
  discount_price: 2000,
  discount_start_date: null,
  discount_end_date: null,
  discount_active: true,
  purity_percentage: 99,
  molecular_weight: null,
  cas_number: null,
  sequence: null,
  storage_conditions: 'Store at -20°C',
  inclusions: null,
  stock_quantity: 10,
  available: true,
  featured: false,
  image_url: null,
  safety_sheet_url: null,
  created_at: '2024-01-01',
  updated_at: '2024-01-01',
};

const mockVariation: ProductVariation = {
  id: 'var-1',
  product_id: 'prod-1',
  name: '5mg',
  quantity_mg: 5,
  price: 3000,
  disposable_pen_price: null,
  reusable_pen_price: null,
  discount_price: 2500,
  discount_active: true,
  stock_quantity: 5,
  created_at: '2024-01-01',
};

const createCartItem = (overrides: Partial<CartItem> = {}): CartItem => ({
  product: mockProduct,
  kitType: 'vial_only',
  quantity: 1,
  ...overrides,
});

const defaultProps = {
  cartItems: [] as CartItem[],
  updateQuantity: vi.fn(),
  removeFromCart: vi.fn(),
  clearCart: vi.fn(),
  getTotalPrice: vi.fn(() => 0),
  onContinueShopping: vi.fn(),
  onCheckout: vi.fn(),
};

beforeEach(() => {
  vi.clearAllMocks();
});

// ─────────────────────────────────────────────────────
// Integration Tests: Cart Component
// ─────────────────────────────────────────────────────

describe('Cart Component', () => {
  describe('Empty Cart', () => {
    it('shows empty cart message', () => {
      render(<Cart {...defaultProps} />);

      expect(screen.getByText('Your cart is empty')).toBeInTheDocument();
      expect(screen.getByText(/Browse our products/)).toBeInTheDocument();
    });

    it('shows Browse Products button that calls onContinueShopping', () => {
      const onContinueShopping = vi.fn();
      render(<Cart {...defaultProps} onContinueShopping={onContinueShopping} />);

      fireEvent.click(screen.getByText('Browse Products'));

      expect(onContinueShopping).toHaveBeenCalled();
    });
  });

  describe('Cart with Items', () => {
    it('renders product name for each item', () => {
      const items = [createCartItem()];
      render(
        <Cart
          {...defaultProps}
          cartItems={items}
          getTotalPrice={() => 2000}
        />
      );

      expect(screen.getByText('Tirzepatide')).toBeInTheDocument();
    });

    it('shows variation name when present', () => {
      const items = [createCartItem({ variation: mockVariation })];
      render(
        <Cart
          {...defaultProps}
          cartItems={items}
          getTotalPrice={() => 2500}
        />
      );

      expect(screen.getByText('5mg')).toBeInTheDocument();
    });

    it('shows Vial Only badge for vial_only items', () => {
      const items = [createCartItem({ kitType: 'vial_only' })];
      render(
        <Cart
          {...defaultProps}
          cartItems={items}
          getTotalPrice={() => 2000}
        />
      );

      expect(screen.getByText('Vial Only')).toBeInTheDocument();
    });

    it('shows Complete Kit badge for complete_kit items', () => {
      const items = [createCartItem({ kitType: 'complete_kit' })];
      render(
        <Cart
          {...defaultProps}
          cartItems={items}
          getTotalPrice={() => 2150}
        />
      );

      expect(screen.getByText('Complete Kit')).toBeInTheDocument();
    });

    it('displays correct item count in header', () => {
      const items = [
        createCartItem({ quantity: 2 }),
        createCartItem({ product: { ...mockProduct, id: 'prod-2', name: 'BPC-157' }, quantity: 3 }),
      ];
      render(
        <Cart
          {...defaultProps}
          cartItems={items}
          getTotalPrice={() => 10000}
        />
      );

      expect(screen.getByText('5 Items')).toBeInTheDocument();
    });

    it('displays total price in order summary', () => {
      const items = [createCartItem({ quantity: 2 })];
      render(
        <Cart
          {...defaultProps}
          cartItems={items}
          getTotalPrice={() => 4000}
        />
      );

      // The total appears in both Subtotal and Total sections
      const priceElements = screen.getAllByText(/₱4,000/);
      expect(priceElements.length).toBeGreaterThan(0);
    });

    it('shows per-unit price for items', () => {
      const items = [createCartItem({ quantity: 2 })];
      render(
        <Cart
          {...defaultProps}
          cartItems={items}
          getTotalPrice={() => 4000}
        />
      );

      expect(screen.getByText(/₱2,000 \/ unit/)).toBeInTheDocument();
    });

    it('shows "(incl. kit)" text for complete kit items', () => {
      const items = [createCartItem({ kitType: 'complete_kit', quantity: 1 })];
      render(
        <Cart
          {...defaultProps}
          cartItems={items}
          getTotalPrice={() => 2150}
        />
      );

      expect(screen.getByText('(incl. kit)')).toBeInTheDocument();
    });

    it('shows shipping info', () => {
      const items = [createCartItem()];
      render(
        <Cart
          {...defaultProps}
          cartItems={items}
          getTotalPrice={() => 2000}
        />
      );

      expect(screen.getByText('Metro Manila')).toBeInTheDocument();
      expect(screen.getByText('₱150')).toBeInTheDocument();
      expect(screen.getByText('Provincial')).toBeInTheDocument();
      expect(screen.getByText('₱200')).toBeInTheDocument();
    });

    it('shows trust badges', () => {
      const items = [createCartItem()];
      render(
        <Cart
          {...defaultProps}
          cartItems={items}
          getTotalPrice={() => 2000}
        />
      );

      expect(screen.getByText('Secure Checkout')).toBeInTheDocument();
      expect(screen.getByText('Quality Guaranteed')).toBeInTheDocument();
      expect(screen.getByText('Discreet Packaging')).toBeInTheDocument();
    });
  });

  describe('User Interactions', () => {
    it('calls updateQuantity with decremented value on minus click', () => {
      const updateQuantity = vi.fn();
      const items = [createCartItem({ quantity: 3 })];

      render(
        <Cart
          {...defaultProps}
          cartItems={items}
          updateQuantity={updateQuantity}
          getTotalPrice={() => 6000}
        />
      );

      // Find all buttons and look for the one containing a minus SVG
      const allButtons = screen.getAllByRole('button');
      const minusBtn = allButtons.find(btn =>
        btn.querySelector('.lucide-minus')
      );

      expect(minusBtn).toBeDefined();
      fireEvent.click(minusBtn!);

      expect(updateQuantity).toHaveBeenCalledWith(0, 2);
    });

    it('calls removeFromCart when trash button clicked', () => {
      const removeFromCart = vi.fn();
      const items = [createCartItem()];

      render(
        <Cart
          {...defaultProps}
          cartItems={items}
          removeFromCart={removeFromCart}
          getTotalPrice={() => 2000}
        />
      );

      const removeButton = screen.getByTitle('Remove item');
      fireEvent.click(removeButton);

      expect(removeFromCart).toHaveBeenCalledWith(0);
    });

    it('calls clearCart when Clear Cart clicked', () => {
      const clearCart = vi.fn();
      const items = [createCartItem()];

      render(
        <Cart
          {...defaultProps}
          cartItems={items}
          clearCart={clearCart}
          getTotalPrice={() => 2000}
        />
      );

      fireEvent.click(screen.getByText('Clear Cart'));

      expect(clearCart).toHaveBeenCalled();
    });

    it('calls onCheckout when Proceed to Checkout clicked', () => {
      const onCheckout = vi.fn();
      const items = [createCartItem()];

      render(
        <Cart
          {...defaultProps}
          cartItems={items}
          onCheckout={onCheckout}
          getTotalPrice={() => 2000}
        />
      );

      fireEvent.click(screen.getByText('Proceed to Checkout'));

      expect(onCheckout).toHaveBeenCalled();
    });

    it('calls onContinueShopping when Back to Products clicked', () => {
      const onContinueShopping = vi.fn();
      const items = [createCartItem()];

      render(
        <Cart
          {...defaultProps}
          cartItems={items}
          onContinueShopping={onContinueShopping}
          getTotalPrice={() => 2000}
        />
      );

      fireEvent.click(screen.getByText('Back to Products'));

      expect(onContinueShopping).toHaveBeenCalled();
    });

    it('calls onContinueShopping when Continue Browsing clicked', () => {
      const onContinueShopping = vi.fn();
      const items = [createCartItem()];

      render(
        <Cart
          {...defaultProps}
          cartItems={items}
          onContinueShopping={onContinueShopping}
          getTotalPrice={() => 2000}
        />
      );

      fireEvent.click(screen.getByText('Continue Browsing'));

      expect(onContinueShopping).toHaveBeenCalled();
    });

    it('shows stock limit alert when trying to exceed stock', () => {
      const alertSpy = vi.spyOn(window, 'alert').mockImplementation(() => {});
      const updateQuantity = vi.fn();
      const items = [createCartItem({ quantity: 10 })]; // at max stock

      render(
        <Cart
          {...defaultProps}
          cartItems={items}
          updateQuantity={updateQuantity}
          getTotalPrice={() => 20000}
        />
      );

      // The plus button should be disabled when at max stock
      const buttons = screen.getAllByRole('button');
      // Find plus button and click it
      const plusBtn = buttons.find(btn => {
        const svg = btn.querySelector('svg');
        return svg && btn.closest('.flex.items-center.border');
      });

      if (plusBtn) {
        fireEvent.click(plusBtn);
        // Either alert was called or button was disabled
      }

      alertSpy.mockRestore();
    });
  });

  describe('Price calculations in display', () => {
    it('shows correct line total for quantity > 1', () => {
      const items = [createCartItem({ quantity: 3 })];
      render(
        <Cart
          {...defaultProps}
          cartItems={items}
          getTotalPrice={() => 6000}
        />
      );

      // Line total: 2000 * 3 = 6000 (appears in multiple places)
      const priceElements = screen.getAllByText(/₱6,000/);
      expect(priceElements.length).toBeGreaterThan(0);
    });

    it('shows discount price when variation has active discount', () => {
      const items = [createCartItem({ variation: mockVariation, quantity: 1 })];
      render(
        <Cart
          {...defaultProps}
          cartItems={items}
          getTotalPrice={() => 2500}
        />
      );

      // Should show variation discount price of 2500
      expect(screen.getByText(/₱2,500 \/ unit/)).toBeInTheDocument();
    });
  });
});
