-- Manual "best paired with" picks for upsell rails.
-- Order in the array determines display order; auto-recommendations fill remaining slots.
ALTER TABLE products
  ADD COLUMN IF NOT EXISTS paired_product_ids uuid[] NOT NULL DEFAULT '{}';
