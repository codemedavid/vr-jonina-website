-- Add sort_order column to products table
ALTER TABLE products ADD COLUMN IF NOT EXISTS sort_order integer DEFAULT 0;
