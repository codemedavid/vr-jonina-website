import type { BundleTier, KitType, Product, ProductVariation } from '../types';
import { KIT_UPGRADE_PRICE } from '../types';

const isUsableTierPrice = (tier: BundleTier): boolean =>
  typeof tier.price === 'number' && Number.isFinite(tier.price) && tier.price > 0;

export const getMatchingBundleTier = (
  product: Product | undefined | null,
  quantity: number
): BundleTier | undefined => {
  if (!product?.bundle_tiers || product.bundle_tiers.length === 0) return undefined;
  return product.bundle_tiers.find(
    (tier) => tier.qty === quantity && isUsableTierPrice(tier)
  );
};

export const getRegularUnitPrice = (
  product: Product,
  variation?: ProductVariation
): number => {
  if (variation) {
    return variation.discount_active && variation.discount_price != null
      ? variation.discount_price
      : variation.price;
  }
  return product.discount_active && product.discount_price != null
    ? product.discount_price
    : product.base_price;
};

// Per-unit price including bundle override (when qty matches a priced tier) and kit upgrade.
export const getEffectiveUnitPrice = (
  product: Product,
  variation: ProductVariation | undefined,
  kitType: KitType,
  quantity: number
): number => {
  const tier = getMatchingBundleTier(product, quantity);
  const baseUnit = tier ? tier.price! / tier.qty : getRegularUnitPrice(product, variation);
  const kitUpgrade = kitType === 'complete_kit' ? KIT_UPGRADE_PRICE : 0;
  return baseUnit + kitUpgrade;
};
