import React, { useState } from 'react';
import { X, Heart, Beaker, ShoppingCart, Plus, Minus, Sparkles, ArrowLeft, Package, Gift } from 'lucide-react';
import type { Product, ProductVariation, KitType } from '../types';
import { KIT_UPGRADE_PRICE } from '../types';

interface ProductDetailModalProps {
  product: Product;
  onClose: () => void;
  onAddToCart: (product: Product, variation: ProductVariation | undefined, quantity: number, kitType?: KitType) => void;
}

const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ product, onClose, onAddToCart }) => {
  const getFirstAvailableVariation = () => {
    if (!product.variations || product.variations.length === 0) return undefined;
    const available = product.variations.find(v => v.stock_quantity > 0);
    return available || product.variations[0];
  };

  const [imageError, setImageError] = useState(false);
  const [selectedVariation, setSelectedVariation] = useState<ProductVariation | undefined>(
    getFirstAvailableVariation()
  );
  const [quantity, setQuantity] = useState(1);
  const [kitType, setKitType] = useState<KitType>('vial_only');

  const hasDiscount = product.discount_active && product.discount_price;
  const isSetProduct = product.inclusions && product.inclusions.length > 0;

  // If variation is a "Kit (10 Vials)" type, it's already a kit - no toggle needed
  const isKitVariation = selectedVariation?.name?.toLowerCase().includes('kit');
  const showKitToggle = isSetProduct && !isKitVariation;

  const calculatePrice = () => {
    const base = selectedVariation ? selectedVariation.price : product.base_price;
    const kitUpgrade = (kitType === 'complete_kit' && !isKitVariation) ? KIT_UPGRADE_PRICE : 0;
    return base + kitUpgrade;
  }

  const currentPrice = calculatePrice();
  const showPurity = Boolean(product.purity_percentage);

  const hasAnyStock = product.variations && product.variations.length > 0
    ? product.variations.some(v => v.stock_quantity > 0)
    : product.stock_quantity > 0;

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => prev > 1 ? prev - 1 : 1);

  const handleAddToCart = () => {
    // Kit variations are always 'vial_only' (no +₱150 since they're already a kit)
    const effectiveKitType = isKitVariation ? 'vial_only' : kitType;
    onAddToCart(product, selectedVariation, quantity, effectiveKitType);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-charcoal-900/40 backdrop-blur-sm flex items-center justify-center z-50 p-2 sm:p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-hidden my-2 sm:my-8 border border-brand-200">
        {/* Header */}
        <div className="p-3 sm:p-4 md:p-6 relative border-b border-brand-100" style={{ background: 'linear-gradient(135deg, #FFF0F5, #FFFFFF)' }}>
          <button
            onClick={onClose}
            className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 p-1.5 sm:p-2 hover:bg-brand-50 rounded-xl transition-colors text-charcoal-400 hover:text-brand-600"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </button>
          <div className="pr-10 sm:pr-12">
            <h2 className="font-heading text-base sm:text-xl md:text-2xl lg:text-3xl font-bold mb-1.5 sm:mb-2 text-charcoal-900 tracking-tight">{product.name}</h2>
            <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 flex-wrap">
              {showPurity && (
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-semibold bg-brand-50 border border-brand-200 text-brand-700">
                  <Sparkles className="w-3 h-3 mr-1" />
                  {product.purity_percentage}% Pure
                </span>
              )}
              {product.featured && (
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-semibold text-white" style={{ background: 'linear-gradient(135deg, #FF85A2, #E8739B)' }}>
                  Featured
                </span>
              )}
              {hasDiscount && (
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-semibold bg-brand-50 border border-brand-200 text-brand-700">
                  Sale
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-3 sm:p-4 md:p-6 overflow-y-auto max-h-[calc(95vh-180px)] sm:max-h-[calc(90vh-280px)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
            {/* Left Column */}
            <div className="space-y-3 sm:space-y-4 md:space-y-6">
              {/* Product Image */}
              <div className="relative h-40 sm:h-48 md:h-56 lg:h-64 rounded-2xl overflow-hidden border border-brand-100 shadow-inner" style={{ background: 'linear-gradient(135deg, #FFF0F5, #FFE4EE)' }}>
                {product.image_url && !imageError ? (
                  <img
                    src={product.image_url}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-brand-200">
                    <Heart className="w-16 h-16 sm:w-20 sm:h-20 opacity-30" fill="currentColor" />
                  </div>
                )}
              </div>

              {/* Description */}
              <div>
                <h3 className="font-heading text-sm sm:text-base md:text-lg font-bold text-charcoal-900 mb-1.5 sm:mb-2 flex items-center gap-1.5 sm:gap-2">
                  <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-brand-500" fill="currentColor" />
                  Product Description
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-charcoal-500 leading-relaxed font-cute">{product.description}</p>
              </div>

              {/* Complete Set Inclusions */}
              {product.inclusions && product.inclusions.length > 0 && (
                <div className="rounded-2xl p-3 sm:p-4 border border-brand-200" style={{ background: 'linear-gradient(135deg, #FFF0F5, #FFE4EE)' }}>
                  <h3 className="font-heading text-sm sm:text-base md:text-lg font-bold text-charcoal-900 mb-2 sm:mb-3 flex items-center gap-1.5 sm:gap-2">
                    <Gift className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-brand-500" />
                    Complete Kit Inclusions (+₱{KIT_UPGRADE_PRICE})
                  </h3>
                  <ul className="space-y-1.5 sm:space-y-2">
                    {product.inclusions.map((inclusion, idx) => (
                      <li key={idx} className="text-[11px] sm:text-xs md:text-sm text-charcoal-600 flex items-start gap-2 font-cute">
                        <span className="text-brand-500 font-bold mt-0.5">♥</span>
                        <span className="flex-1">{inclusion}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Specs */}
              <div className="bg-white rounded-2xl p-3 sm:p-4 border border-brand-100">
                <h3 className="font-heading text-sm sm:text-base md:text-lg font-bold text-charcoal-900 mb-2 sm:mb-3 flex items-center gap-1.5 sm:gap-2">
                  <Beaker className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-brand-500" />
                  Details
                </h3>
                <div className="space-y-1.5 sm:space-y-2">
                  {showPurity && (
                    <div className="flex justify-between">
                      <span className="text-charcoal-400 text-[11px] sm:text-xs md:text-sm font-cute">Purity:</span>
                      <span className="font-semibold text-brand-700 text-[11px] sm:text-xs md:text-sm">{product.purity_percentage}%</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-charcoal-400 text-[11px] sm:text-xs md:text-sm font-cute">Storage:</span>
                    <span className="font-medium text-charcoal-600 text-[11px] sm:text-xs md:text-sm font-cute">{product.storage_conditions}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-charcoal-400 text-[11px] sm:text-xs md:text-sm font-cute">Availability:</span>
                    <span className={`font-medium text-[11px] sm:text-xs md:text-sm font-cute ${(product.variations && product.variations.length > 0
                      ? product.variations.some(v => v.stock_quantity > 0)
                      : product.stock_quantity > 0)
                      ? 'text-brand-600'
                      : 'text-red-500'
                      }`}>
                      {product.variations && product.variations.length > 0
                        ? product.variations.reduce((sum, v) => sum + v.stock_quantity, 0)
                        : product.stock_quantity} units
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Purchase Section */}
            <div className="space-y-3 sm:space-y-4 md:space-y-6">
              {/* Price */}
              <div className="bg-white rounded-2xl p-3 sm:p-4 md:p-6 border border-brand-100 shadow-soft">
                <div className="text-center mb-3 sm:mb-4">
                  {hasDiscount ? (
                    <>
                      <div className="flex items-center justify-center gap-2 mb-1">
                        <span className="text-base sm:text-lg md:text-xl lg:text-2xl text-charcoal-300 line-through font-medium">
                          ₱{(product.base_price + (kitType === 'complete_kit' && !isKitVariation ? KIT_UPGRADE_PRICE : 0)).toLocaleString('en-PH', { minimumFractionDigits: 0 })}
                        </span>
                        <span className="text-xs sm:text-sm font-bold text-brand-600 bg-brand-50 px-2 py-1 rounded-full">
                          {Math.round((1 - product.discount_price! / product.base_price) * 100)}% OFF
                        </span>
                      </div>
                      <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal-900 mb-2">
                        ₱{currentPrice.toLocaleString('en-PH', { minimumFractionDigits: 0 })}
                      </div>
                    </>
                  ) : (
                    <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal-900">
                      ₱{currentPrice.toLocaleString('en-PH', { minimumFractionDigits: 0 })}
                    </div>
                  )}
                </div>

                {/* Kit Type Selection - hidden when Kit variation is selected */}
                {showKitToggle && (
                  <div className="mb-3 sm:mb-4">
                    <label className="block text-xs sm:text-sm font-bold text-charcoal-700 mb-1.5 sm:mb-2 uppercase tracking-wide font-cute">
                      Choose Option
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => setKitType('vial_only')}
                        className={`p-3 rounded-2xl border text-sm text-center transition-all ${
                          kitType === 'vial_only'
                            ? 'border-brand-500 bg-brand-50 text-charcoal-900 ring-1 ring-brand-500'
                            : 'border-brand-200 hover:border-brand-400 text-charcoal-600 bg-white'
                        }`}
                      >
                        <Package className="w-5 h-5 mx-auto mb-1 text-brand-500" />
                        <div className="font-bold text-xs sm:text-sm font-cute">Vial Only</div>
                        <div className="text-[10px] sm:text-xs text-charcoal-400 font-cute">Peptide vial</div>
                      </button>
                      <button
                        onClick={() => setKitType('complete_kit')}
                        className={`p-3 rounded-2xl border text-sm text-center transition-all relative ${
                          kitType === 'complete_kit'
                            ? 'border-brand-500 bg-brand-50 text-charcoal-900 ring-1 ring-brand-500'
                            : 'border-brand-200 hover:border-brand-400 text-charcoal-600 bg-white'
                        }`}
                      >
                        <span className="absolute -top-2 -right-2 text-[9px] font-bold text-white px-1.5 py-0.5 rounded-full" style={{ background: 'linear-gradient(135deg, #FF85A2, #E8739B)' }}>+₱{KIT_UPGRADE_PRICE}</span>
                        <Gift className="w-5 h-5 mx-auto mb-1 text-brand-500" />
                        <div className="font-bold text-xs sm:text-sm font-cute">Complete Kit</div>
                        <div className="text-[10px] sm:text-xs text-charcoal-400 font-cute">All accessories</div>
                      </button>
                    </div>

                    {/* Kit contents preview when complete kit selected */}
                    {kitType === 'complete_kit' && product.inclusions && (
                      <div className="mt-2 p-2 rounded-xl bg-brand-50 border border-brand-100">
                        <p className="text-[10px] sm:text-xs text-brand-700 font-semibold mb-1 font-cute">Kit includes:</p>
                        <div className="flex flex-wrap gap-1">
                          {product.inclusions.map((item, idx) => (
                            <span key={idx} className="text-[9px] sm:text-[10px] bg-white text-charcoal-600 px-1.5 py-0.5 rounded-full border border-brand-200 font-cute">
                              ♥ {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Size Selection */}
                {product.variations && product.variations.length > 0 && (
                  <div className="mb-3 sm:mb-4">
                    <label className="block text-xs sm:text-sm font-bold text-charcoal-700 mb-1.5 sm:mb-2 uppercase tracking-wide font-cute">
                      Select Format
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {product.variations.map((variation) => {
                        const isOutOfStock = variation.stock_quantity === 0;
                        const isSelected = selectedVariation?.id === variation.id;
                        return (
                          <button
                            key={variation.id}
                            onClick={() => {
                              if (variation.stock_quantity > 0) {
                                setSelectedVariation(variation);
                              }
                            }}
                            disabled={isOutOfStock}
                            className={`
                                p-3 rounded-2xl border text-sm text-left transition-all
                                ${isSelected
                                ? 'border-brand-500 bg-brand-50 text-charcoal-900 ring-1 ring-brand-500'
                                : 'border-brand-200 hover:border-brand-400 text-charcoal-600 bg-white'
                              }
                                ${isOutOfStock ? 'opacity-50 cursor-not-allowed bg-gray-50' : ''}
                              `}
                          >
                            <div className="font-bold font-cute">{variation.name}</div>
                            <div className="text-xs opacity-80 font-cute">₱{variation.price.toLocaleString('en-PH')}</div>
                            {isOutOfStock && <div className="text-xs text-red-500 font-bold mt-1 font-cute">Out of Stock</div>}
                          </button>
                        )
                      })}
                    </div>
                  </div>
                )}

                {/* Quantity */}
                <div className="mb-3 sm:mb-4">
                  <label className="block text-xs sm:text-sm font-bold text-charcoal-700 mb-1.5 sm:mb-2 uppercase tracking-wide font-cute">
                    Quantity
                  </label>
                  <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-5">
                    <button
                      onClick={decrementQuantity}
                      className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-brand-50 border border-brand-200 hover:bg-brand-100 hover:border-brand-300 rounded-xl transition-all active:scale-95 text-brand-600"
                      disabled={!product.available}
                    >
                      <Minus className="w-5 h-5" />
                    </button>
                    <span className="text-xl sm:text-2xl font-bold text-charcoal-900 min-w-[50px] text-center">
                      {quantity}
                    </span>
                    <button
                      onClick={incrementQuantity}
                      className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-brand-50 border border-brand-200 hover:bg-brand-100 hover:border-brand-300 rounded-xl transition-all active:scale-95 text-brand-600"
                      disabled={!product.available}
                    >
                      <Plus className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Total */}
                <div className="rounded-2xl p-3 mb-4 border border-brand-100" style={{ background: 'linear-gradient(135deg, #FFF0F5, #FFE4EE)' }}>
                  <div className="flex justify-between items-center">
                    <span className="text-charcoal-500 font-medium text-sm font-cute">Total:</span>
                    <span className="text-xl font-bold text-charcoal-900">
                      ₱{(currentPrice * quantity).toLocaleString('en-PH', { minimumFractionDigits: 0 })}
                    </span>
                  </div>
                  {kitType === 'complete_kit' && !isKitVariation && (
                    <div className="text-[10px] text-brand-600 text-right mt-1 font-cute">
                      Includes complete kit (+₱{KIT_UPGRADE_PRICE}/item)
                    </div>
                  )}
                  {isKitVariation && (
                    <div className="text-[10px] text-brand-600 text-right mt-1 font-cute">
                      Kit (10 Vials) — complete package
                    </div>
                  )}
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={handleAddToCart}
                  disabled={!product.available || !hasAnyStock || (selectedVariation && selectedVariation.stock_quantity === 0) || (!selectedVariation && product.stock_quantity === 0)}
                  className="w-full btn-primary py-3 md:py-4 text-sm md:text-base flex items-center justify-center gap-2 rounded-2xl"
                >
                  <ShoppingCart className="w-5 h-5" />
                  {!product.available
                    ? 'Unavailable'
                    : (!hasAnyStock || (selectedVariation && selectedVariation.stock_quantity === 0) || (!selectedVariation && product.stock_quantity === 0)
                      ? 'Out of Stock'
                      : 'Add to Cart')}
                </button>

                <button
                  onClick={onClose}
                  className="w-full mt-3 py-3 text-sm md:text-base font-medium text-charcoal-400 hover:text-brand-600 hover:bg-brand-50 rounded-2xl transition-colors flex items-center justify-center gap-2 font-cute"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Return to Shop
                </button>
              </div>

              {/* Stock Alert */}
              {product.available && (product.variations && product.variations.length > 0
                ? product.variations.some(v => v.stock_quantity > 0 && v.stock_quantity < 10)
                : product.stock_quantity < 10 && product.stock_quantity > 0) && (
                  <div className="bg-brand-50 border border-brand-200 rounded-2xl p-3">
                    <p className="text-xs text-brand-700 font-medium flex items-center gap-2 font-cute">
                      <Heart className="w-3 h-3" fill="currentColor" />
                      Low stock — Only {product.variations && product.variations.length > 0
                        ? product.variations.reduce((sum, v) => sum + v.stock_quantity, 0)
                        : product.stock_quantity} units remaining
                    </p>
                  </div>
                )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailModal;
