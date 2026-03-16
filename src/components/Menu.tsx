import React, { useState, useRef } from 'react';
import MenuItemCard from './MenuItemCard';
import Hero from './Hero';
import ProductDetailModal from './ProductDetailModal';
import type { Product, ProductVariation, CartItem, KitType } from '../types';
import { Search, Filter, Heart } from 'lucide-react';

interface MenuProps {
  menuItems: Product[];
  addToCart: (product: Product, variation?: ProductVariation, quantity?: number, kitType?: KitType) => void;
  cartItems: CartItem[];
  updateQuantity: (index: number, quantity: number) => void;
}

const Menu: React.FC<MenuProps> = ({ menuItems, addToCart, cartItems }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'purity'>('name');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const productsRef = useRef<HTMLDivElement | null>(null);

  // Filter products based on search
  const filteredProducts = menuItems.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Sort products - Featured first (Tirzepatide first among featured), then by selected sort
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    // Tirzepatide always first
    if (a.name === 'Tirzepatide') return -1;
    if (b.name === 'Tirzepatide') return 1;

    // Featured products come before non-featured
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;

    // Then apply selected sort
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'price':
        return a.base_price - b.base_price;
      case 'purity':
        return b.purity_percentage - a.purity_percentage;
      default:
        return 0;
    }
  });

  const getCartQuantity = (productId: string, variationId?: string) => {
    return cartItems
      .filter(item =>
        item.product.id === productId &&
        (variationId ? item.variation?.id === variationId : !item.variation)
      )
      .reduce((sum, item) => sum + item.quantity, 0);
  };

  return (
    <>
      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={(product, variation, quantity, kitType) => {
            addToCart(product, variation, quantity, kitType);
          }}
        />
      )}

      <div className="min-h-screen" style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #FFF5F7 50%, #FFF0F5 100%)' }}>
        <Hero
          onShopAll={() => {
            productsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}
        />

        <div className="container mx-auto px-4 py-12" ref={productsRef}>
          {/* Search and Filter Controls */}
          <div className="mb-10 flex flex-col sm:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search catalog..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="input-field pl-12"
              />
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-3 sm:w-auto bg-white rounded-2xl px-4 py-3 border border-brand-200">
              <Filter className="text-brand-400 w-5 h-5" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'name' | 'price' | 'purity')}
                className="focus:outline-none bg-transparent font-medium text-gray-700 text-sm"
              >
                <option value="name">Sort by Name</option>
                <option value="price">Sort by Price</option>
                <option value="purity">Sort by Purity</option>
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h2 className="text-3xl font-heading font-semibold text-charcoal-900 tracking-tight">Our Products</h2>
            <span className="text-sm font-medium text-brand-600 bg-brand-50 px-3 py-1 rounded-full border border-brand-200 font-cute">
              {sortedProducts.length} Results
            </span>
          </div>

          {/* Products Grid */}
          {sortedProducts.length === 0 ? (
            <div className="text-center py-20">
              <div className="bg-white rounded-2xl shadow-soft p-12 max-w-md mx-auto border border-brand-200">
                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: 'linear-gradient(135deg, #FFF0F5, #FFE4EE)' }}>
                  <Heart className="w-10 h-10 text-brand-300" fill="currentColor" />
                </div>
                <h3 className="text-xl font-bold text-charcoal-900 mb-2 font-cute">No products found</h3>
                <p className="text-charcoal-400 mb-6 font-cute">
                  {searchQuery
                    ? `No products match "${searchQuery}".`
                    : 'No products available.'}
                </p>
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="text-charcoal-600 font-semibold hover:underline"
                  >
                    Clear Search
                  </button>
                )}
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-6">
              {sortedProducts.map((product) => (
                <MenuItemCard
                  key={product.id}
                  product={product}
                  cartQuantity={getCartQuantity(product.id)}
                  onProductClick={setSelectedProduct}
                  onAddToCart={addToCart}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Menu;
