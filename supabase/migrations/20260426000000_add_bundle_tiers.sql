-- Per-product Bundle & Save tiers shown on the product detail page.
-- Each tier: { "qty": int, "label": string, "popular": bool }
-- Empty array means the storefront falls back to its default 1/2/3 bottle tiers.
ALTER TABLE products
  ADD COLUMN IF NOT EXISTS bundle_tiers JSONB NOT NULL DEFAULT '[]'::jsonb;
