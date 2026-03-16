import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import MenuItemCard from '../components/MenuItemCard';
import type { Product, ProductVariation } from '../types';
import { KIT_UPGRADE_PRICE } from '../types';

// ─────────────────────────────────────────────────────
// Test Fixtures
// ─────────────────────────────────────────────────────

const baseProduct: Product = {
  id: 'prod-1',
  name: 'Tirzepatide 5mg',
  description: 'High-purity research peptide',
  category: 'peptides',
  base_price: 2500,
  discount_price: null,
  discount_start_date: null,
  discount_end_date: null,
  discount_active: false,
  purity_percentage: 99,
  molecular_weight: '4813.45',
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

const variation5mg: ProductVariation = {
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

const variation10mg: ProductVariation = {
  id: 'var-2',
  product_id: 'prod-1',
  name: '10mg',
  quantity_mg: 10,
  price: 5000,
  disposable_pen_price: null,
  reusable_pen_price: null,
  discount_price: null,
  discount_active: false,
  stock_quantity: 3,
  created_at: '2024-01-01',
};

const outOfStockVariation: ProductVariation = {
  id: 'var-3',
  product_id: 'prod-1',
  name: '20mg',
  quantity_mg: 20,
  price: 8000,
  disposable_pen_price: null,
  reusable_pen_price: null,
  discount_price: null,
  discount_active: false,
  stock_quantity: 0,
  created_at: '2024-01-01',
};

beforeEach(() => {
  vi.clearAllMocks();
});

// ─────────────────────────────────────────────────────
// Integration Tests: MenuItemCard Component
// ─────────────────────────────────────────────────────

describe('MenuItemCard Component', () => {
  describe('Rendering', () => {
    it('displays product name and description', () => {
      render(<MenuItemCard product={baseProduct} />);

      expect(screen.getByText('Tirzepatide 5mg')).toBeInTheDocument();
      expect(screen.getByText('High-purity research peptide')).toBeInTheDocument();
    });

    it('shows base price when no discount', () => {
      render(<MenuItemCard product={baseProduct} />);

      expect(screen.getByText(/₱2,500/)).toBeInTheDocument();
    });

    it('shows discounted price and strikethrough when discount active', () => {
      const discountedProduct = {
        ...baseProduct,
        discount_active: true,
        discount_price: 2000,
      };

      render(<MenuItemCard product={discountedProduct} />);

      expect(screen.getByText(/₱2,000/)).toBeInTheDocument();
      expect(screen.getByText(/₱2,500/)).toBeInTheDocument(); // strikethrough
    });

    it('shows Featured badge for featured products', () => {
      const featuredProduct = { ...baseProduct, featured: true };

      render(<MenuItemCard product={featuredProduct} />);

      expect(screen.getByText('Featured')).toBeInTheDocument();
    });

    it('shows discount percentage badge', () => {
      const discountedProduct = {
        ...baseProduct,
        discount_active: true,
        discount_price: 2000,
      };

      render(<MenuItemCard product={discountedProduct} />);

      expect(screen.getByText(/20% OFF/)).toBeInTheDocument();
    });

    it('shows Out of Stock overlay when no stock', () => {
      const outOfStockProduct = { ...baseProduct, stock_quantity: 0 };

      render(<MenuItemCard product={outOfStockProduct} />);

      expect(screen.getByText('Out of Stock')).toBeInTheDocument();
    });

    it('shows Unavailable overlay when product unavailable', () => {
      const unavailableProduct = { ...baseProduct, available: false };

      render(<MenuItemCard product={unavailableProduct} />);

      expect(screen.getByText('Unavailable')).toBeInTheDocument();
    });

    it('shows cart quantity badge when items in cart', () => {
      render(<MenuItemCard product={baseProduct} cartQuantity={3} />);

      expect(screen.getByText('3 in cart')).toBeInTheDocument();
    });

    it('does not show cart badge when cartQuantity is 0', () => {
      render(<MenuItemCard product={baseProduct} cartQuantity={0} />);

      expect(screen.queryByText(/in cart/)).not.toBeInTheDocument();
    });
  });

  describe('Variations', () => {
    it('renders variation buttons', () => {
      const productWithVariations = {
        ...baseProduct,
        variations: [variation5mg, variation10mg],
      };

      render(<MenuItemCard product={productWithVariations} />);

      expect(screen.getByText('5mg')).toBeInTheDocument();
      expect(screen.getByText('10mg')).toBeInTheDocument();
    });

    it('shows +N for more than 2 variations', () => {
      const productWith3Variations = {
        ...baseProduct,
        variations: [variation5mg, variation10mg, outOfStockVariation],
      };

      render(<MenuItemCard product={productWith3Variations} />);

      expect(screen.getByText('+1')).toBeInTheDocument();
    });

    it('disables out-of-stock variation button', () => {
      const productWithVariations = {
        ...baseProduct,
        variations: [variation5mg, outOfStockVariation],
      };

      render(<MenuItemCard product={productWithVariations} />);

      const outOfStockBtn = screen.getByText('20mg');
      expect(outOfStockBtn).toBeDisabled();
    });

    it('updates price when switching variation', () => {
      const productWithVariations = {
        ...baseProduct,
        variations: [variation5mg, variation10mg],
      };

      render(<MenuItemCard product={productWithVariations} />);

      // Initially shows variation5mg discounted price (2500)
      expect(screen.getByText(/₱2,500/)).toBeInTheDocument();

      // Click 10mg variation
      fireEvent.click(screen.getByText('10mg'));

      // Now shows variation10mg price (5000)
      expect(screen.getByText(/₱5,000/)).toBeInTheDocument();
    });
  });

  describe('Kit Toggle', () => {
    it('shows kit toggle for products with inclusions', () => {
      const productWithInclusions = {
        ...baseProduct,
        inclusions: ['vial', 'bac water'],
        variations: [variation5mg],
      };

      render(<MenuItemCard product={productWithInclusions} />);

      expect(screen.getByText('Vial Only')).toBeInTheDocument();
      expect(screen.getByText(`Kit +₱${KIT_UPGRADE_PRICE}`)).toBeInTheDocument();
    });

    it('does not show kit toggle for products without inclusions', () => {
      render(<MenuItemCard product={baseProduct} />);

      expect(screen.queryByText('Vial Only')).not.toBeInTheDocument();
    });

    it('updates price when toggling to complete kit', () => {
      const productWithInclusions = {
        ...baseProduct,
        inclusions: ['vial', 'bac water'],
      };

      render(<MenuItemCard product={productWithInclusions} />);

      // Base price initially: 2500
      expect(screen.getByText(/₱2,500/)).toBeInTheDocument();

      // Toggle to complete kit
      fireEvent.click(screen.getByText(`Kit +₱${KIT_UPGRADE_PRICE}`));

      // Price should now be 2500 + 150 = 2650
      expect(screen.getByText(/₱2,650/)).toBeInTheDocument();
    });
  });

  describe('Add to Cart', () => {
    it('calls onAddToCart when button clicked', () => {
      const onAddToCart = vi.fn();

      render(
        <MenuItemCard
          product={baseProduct}
          onAddToCart={onAddToCart}
        />
      );

      fireEvent.click(screen.getByText('Add to Cart'));

      expect(onAddToCart).toHaveBeenCalledWith(
        baseProduct,
        undefined,
        1,
        'vial_only'
      );
    });

    it('passes selected variation to onAddToCart', () => {
      const onAddToCart = vi.fn();
      const productWithVariations = {
        ...baseProduct,
        variations: [variation5mg, variation10mg],
      };

      render(
        <MenuItemCard
          product={productWithVariations}
          onAddToCart={onAddToCart}
        />
      );

      // Select 10mg variation
      fireEvent.click(screen.getByText('10mg'));
      fireEvent.click(screen.getByText('Add to Cart'));

      expect(onAddToCart).toHaveBeenCalledWith(
        productWithVariations,
        variation10mg,
        1,
        'vial_only'
      );
    });

    it('passes complete_kit type when kit selected', () => {
      const onAddToCart = vi.fn();
      const productWithInclusions = {
        ...baseProduct,
        inclusions: ['vial', 'bac water'],
      };

      render(
        <MenuItemCard
          product={productWithInclusions}
          onAddToCart={onAddToCart}
        />
      );

      // Toggle to complete kit
      fireEvent.click(screen.getByText(`Kit +₱${KIT_UPGRADE_PRICE}`));
      fireEvent.click(screen.getByText('Add to Cart'));

      expect(onAddToCart).toHaveBeenCalledWith(
        productWithInclusions,
        undefined,
        1,
        'complete_kit'
      );
    });

    it('disables Add to Cart when out of stock', () => {
      const outOfStockProduct = { ...baseProduct, stock_quantity: 0 };

      render(<MenuItemCard product={outOfStockProduct} />);

      const addButton = screen.getByText('Add to Cart').closest('button');
      expect(addButton).toBeDisabled();
    });

    it('disables Add to Cart when unavailable', () => {
      const unavailableProduct = { ...baseProduct, available: false };

      render(<MenuItemCard product={unavailableProduct} />);

      const addButton = screen.getByText('Add to Cart').closest('button');
      expect(addButton).toBeDisabled();
    });

    it('opens product detail when variations exist but none selected', () => {
      const onProductClick = vi.fn();
      const onAddToCart = vi.fn();
      const productWithVariations = {
        ...baseProduct,
        variations: [variation5mg],
      };

      render(
        <MenuItemCard
          product={productWithVariations}
          onAddToCart={onAddToCart}
          onProductClick={onProductClick}
        />
      );

      // The first variation is auto-selected, so addToCart should be called
      fireEvent.click(screen.getByText('Add to Cart'));
      expect(onAddToCart).toHaveBeenCalled();
    });
  });

  describe('Product click', () => {
    it('calls onProductClick when image area clicked', () => {
      const onProductClick = vi.fn();

      render(
        <MenuItemCard
          product={baseProduct}
          onProductClick={onProductClick}
        />
      );

      // Click the overlay div (first child with cursor-pointer)
      const overlay = screen.getByTitle('View details');
      fireEvent.click(overlay);

      expect(onProductClick).toHaveBeenCalledWith(baseProduct);
    });
  });
});
