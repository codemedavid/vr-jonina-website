import React from 'react';
import { Trash2, ShoppingBag, ArrowLeft, CreditCard, Plus, Minus, Heart, Gift, Package } from 'lucide-react';
import type { CartItem } from '../types';
import { KIT_UPGRADE_PRICE } from '../types';

interface CartProps {
  cartItems: CartItem[];
  updateQuantity: (index: number, quantity: number) => void;
  removeFromCart: (index: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  onContinueShopping: () => void;
  onCheckout: () => void;
}

const Cart: React.FC<CartProps> = ({
  cartItems,
  updateQuantity,
  removeFromCart,
  clearCart,
  getTotalPrice,
  onContinueShopping,
  onCheckout,
}) => {
  const getItemPrice = (item: CartItem) => {
    const basePrice = item.variation
      ? (item.variation.discount_active && item.variation.discount_price != null ? item.variation.discount_price : item.variation.price)
      : (item.product.discount_active && item.product.discount_price != null ? item.product.discount_price : item.product.base_price);
    const kitUpgrade = item.kitType === 'complete_kit' ? KIT_UPGRADE_PRICE : 0;
    return basePrice + kitUpgrade;
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 py-12" style={{ background: 'linear-gradient(180deg, #FFF5F7, #FFFAFC)' }}>
        <div className="text-center max-w-md">
          <div className="bg-white rounded-2xl p-12 border border-brand-200 shadow-soft">
            <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: 'linear-gradient(135deg, #FFF0F5, #FFE4EE)' }}>
              <ShoppingBag className="w-10 h-10 text-brand-400" />
            </div>
            <h2 className="font-heading text-2xl font-bold text-charcoal-900 mb-3 flex items-center justify-center gap-2">
              Your cart is empty
            </h2>
            <p className="text-charcoal-400 mb-8 max-w-xs mx-auto font-cute">
              Browse our products and add your favorites to cart!
            </p>
            <button
              onClick={onContinueShopping}
              className="btn-primary w-full flex items-center justify-center gap-2 rounded-2xl"
            >
              <ArrowLeft className="w-4 h-4" />
              Browse Products
            </button>
          </div>
        </div>
      </div>
    );
  }

  const totalPrice = getTotalPrice();
  const finalTotal = totalPrice;

  return (
    <div className="min-h-screen py-6 md:py-8" style={{ background: 'linear-gradient(180deg, #FFF5F7, #FFFAFC)' }}>
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={onContinueShopping}
            className="text-charcoal-400 hover:text-brand-600 font-medium mb-6 flex items-center gap-2 transition-colors group text-sm font-cute"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Products</span>
          </button>
          <div className="flex justify-between items-end pb-4 border-b border-brand-200">
            <div>
              <h1 className="font-heading text-2xl md:text-3xl font-bold text-charcoal-900 flex items-center gap-3">
                Shopping Cart
                <span className="text-sm font-normal text-brand-600 bg-brand-50 px-3 py-1 rounded-full border border-brand-200 font-cute">
                  {cartItems.reduce((sum, item) => sum + item.quantity, 0)} Items
                </span>
              </h1>
            </div>
            <button
              onClick={clearCart}
              className="text-red-400 hover:text-red-500 text-sm font-medium flex items-center gap-2 hover:bg-red-50 px-3 py-2 rounded-xl transition-colors font-cute"
            >
              <Trash2 className="w-4 h-4" />
              Clear Cart
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item, index) => {
              const itemPrice = getItemPrice(item);
              const baseOnlyPrice = item.variation
                ? (item.variation.discount_active && item.variation.discount_price != null ? item.variation.discount_price : item.variation.price)
                : (item.product.discount_active && item.product.discount_price != null ? item.product.discount_price : item.product.base_price);

              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-4 md:p-6 border border-brand-100 shadow-soft transition-all hover:border-brand-300 hover:shadow-luxury"
                >
                  <div className="flex gap-4 sm:gap-6">
                    {/* Product Image */}
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl flex-shrink-0 border border-brand-100 overflow-hidden" style={{ background: 'linear-gradient(135deg, #FFF0F5, #FFE4EE)' }}>
                      {item.product.image_url ? (
                        <img
                          src={item.product.image_url}
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-brand-300">
                          <Heart className="w-8 h-8" fill="currentColor" />
                        </div>
                      )}
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="font-heading font-bold text-charcoal-900 text-base md:text-lg mb-1">
                            {item.product.name}
                          </h3>
                          <div className="flex flex-wrap gap-2 text-xs">
                            {item.variation && (
                              <span className="text-charcoal-500 font-medium bg-brand-50 px-2 py-0.5 rounded-full border border-brand-100 font-cute">
                                {item.variation.name}
                              </span>
                            )}
                            {/* Kit Type Badge */}
                            <span className={`font-medium px-2 py-0.5 rounded-full flex items-center gap-1 font-cute ${
                              item.kitType === 'complete_kit'
                                ? 'bg-brand-100 text-brand-700 border border-brand-200'
                                : 'bg-gray-50 text-charcoal-500 border border-gray-200'
                            }`}>
                              {item.kitType === 'complete_kit' ? (
                                <><Gift className="w-3 h-3" /> Complete Kit</>
                              ) : (
                                <><Package className="w-3 h-3" /> Vial Only</>
                              )}
                            </span>
                          </div>
                        </div>
                        <button
                          onClick={() => removeFromCart(index)}
                          className="text-charcoal-300 hover:text-red-400 transition-colors p-1"
                          title="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Quantity and Price */}
                      <div className="flex flex-col sm:flex-row justify-between items-end sm:items-center gap-4">
                        <div className="flex items-center border border-brand-200 rounded-xl bg-brand-50">
                          <button
                            onClick={() => updateQuantity(index, item.quantity - 1)}
                            className="p-2 hover:bg-brand-100 transition-colors rounded-l-xl text-brand-600"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-10 text-center font-bold text-charcoal-900 text-sm">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => {
                              const availableStock = item.variation ? item.variation.stock_quantity : item.product.stock_quantity;
                              if (item.quantity >= availableStock) {
                                alert(`Only ${availableStock} item(s) available in stock.`);
                                return;
                              }
                              updateQuantity(index, item.quantity + 1);
                            }}
                            disabled={(() => {
                              const availableStock = item.variation ? item.variation.stock_quantity : item.product.stock_quantity;
                              return item.quantity >= availableStock;
                            })()}
                            className="p-2 hover:bg-brand-100 transition-colors rounded-r-xl text-brand-600 disabled:opacity-50"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <div className="text-right">
                          <div className="text-lg md:text-xl font-bold text-charcoal-900">
                            ₱{(itemPrice * item.quantity).toLocaleString('en-PH', { minimumFractionDigits: 0 })}
                          </div>
                          <div className="text-xs text-charcoal-400 font-cute">
                            ₱{itemPrice.toLocaleString('en-PH', { minimumFractionDigits: 0 })} / unit
                            {item.kitType === 'complete_kit' && (
                              <span className="ml-1 text-brand-500">(incl. kit)</span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-soft p-6 sticky top-24 border border-brand-200">
              <h2 className="font-heading text-lg font-bold text-charcoal-900 mb-6 flex items-center gap-2">
                Order Summary
                <Heart className="w-4 h-4 text-brand-500" fill="currentColor" />
              </h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-charcoal-500 text-sm font-cute">
                  <span>Subtotal</span>
                  <span className="font-semibold text-charcoal-900">₱{totalPrice.toLocaleString('en-PH', { minimumFractionDigits: 0 })}</span>
                </div>

                <div className="pt-3 border-t border-brand-100">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-base font-bold text-charcoal-900 font-cute">Total</span>
                    <span className="text-2xl font-bold text-charcoal-900">
                      ₱{finalTotal.toLocaleString('en-PH', { minimumFractionDigits: 0 })}
                    </span>
                  </div>
                  <p className="text-xs text-charcoal-400 text-right font-cute">+ Shipping calculated at checkout</p>
                </div>
              </div>

              <div className="rounded-2xl p-4 mb-6 border border-brand-100" style={{ background: 'linear-gradient(135deg, #FFF0F5, #FFE4EE)' }}>
                <p className="text-xs text-brand-700 font-medium mb-2 font-cute">Shipping Info:</p>
                <ul className="text-xs text-charcoal-500 space-y-1 font-cute">
                  <li className="flex justify-between"><span>Metro Manila</span> <span className="font-medium">₱150</span></li>
                  <li className="flex justify-between"><span>Provincial</span> <span className="font-medium">₱200</span></li>
                </ul>
              </div>

              <button
                onClick={onCheckout}
                className="w-full btn-primary py-3 md:py-4 text-sm md:text-base mb-3 flex items-center justify-center gap-2 rounded-2xl"
              >
                <CreditCard className="w-4 h-4" />
                Proceed to Checkout
              </button>

              <button
                onClick={onContinueShopping}
                className="w-full btn-secondary py-3 text-sm flex items-center justify-center gap-2 rounded-2xl font-cute"
              >
                Continue Browsing
              </button>

              {/* Trust Badges */}
              <div className="mt-6 pt-6 border-t border-brand-100 flex flex-col gap-2">
                {['Secure Checkout', 'Quality Guaranteed', 'Discreet Packaging'].map((text, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-charcoal-400 font-cute">
                    <Heart className="w-3 h-3 text-brand-400" fill="currentColor" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
