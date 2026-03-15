-- ============================================
-- VR JONINA - Product Rebrand Migration
-- Run this in your Supabase SQL Editor
-- ============================================

-- Step 1: Clear existing data
DELETE FROM product_variations;
DELETE FROM products;
DELETE FROM categories;

-- Step 2: Insert new categories
INSERT INTO categories (id, name, icon, sort_order, active) VALUES
  ('a0a00001-0001-4000-8000-000000000001', 'Peptide Sets', '💉', 1, true),
  ('a0a00001-0001-4000-8000-000000000002', 'Individual Sales', '🧴', 2, true),
  ('a0a00001-0001-4000-8000-000000000003', 'Accessories', '🧬', 3, true);

-- Step 3: Insert Peptide Sets (with 10ml bacwater)
INSERT INTO products (id, name, description, category, base_price, purity_percentage, stock_quantity, available, featured, image_url, storage_conditions, inclusions) VALUES

  -- Tirzepatide Sets
  ('b0b00001-0001-4000-8000-000000000001', 'Tirzepatide 15mg Set', 'Tirzepatide 15mg with 10ml bacteriostatic water. Complete set includes syringe for reconstitution, 6pcs insulin syringe, plastic container and box, 10pcs alcohol pads.', 'a0a00001-0001-4000-8000-000000000001', 1300, 99, 50, true, true, '/products/tirzepatide-15mg.svg', 'Store at 2-8°C', ARRAY['10ml Bacteriostatic Water', 'Syringe for Reconstitution', '6pcs Insulin Syringe', 'Plastic Container & Box', '10pcs Alcohol Pads']),

  ('b0b00001-0001-4000-8000-000000000002', 'Tirzepatide 20mg Set', 'Tirzepatide 20mg with 10ml bacteriostatic water. Complete set includes syringe for reconstitution, 6pcs insulin syringe, plastic container and box, 10pcs alcohol pads.', 'a0a00001-0001-4000-8000-000000000001', 1500, 99, 50, true, true, '/products/tirzepatide-20mg.svg', 'Store at 2-8°C', ARRAY['10ml Bacteriostatic Water', 'Syringe for Reconstitution', '6pcs Insulin Syringe', 'Plastic Container & Box', '10pcs Alcohol Pads']),

  ('b0b00001-0001-4000-8000-000000000003', 'Tirzepatide 30mg Set', 'Tirzepatide 30mg with 10ml bacteriostatic water. Complete set includes syringe for reconstitution, 6pcs insulin syringe, plastic container and box, 10pcs alcohol pads.', 'a0a00001-0001-4000-8000-000000000001', 1600, 99, 50, true, true, '/products/tirzepatide-30mg.svg', 'Store at 2-8°C', ARRAY['10ml Bacteriostatic Water', 'Syringe for Reconstitution', '6pcs Insulin Syringe', 'Plastic Container & Box', '10pcs Alcohol Pads']),

  ('b0b00001-0001-4000-8000-000000000004', 'Tirzepatide 50mg Set', 'Tirzepatide 50mg with 10ml bacteriostatic water. Complete set includes syringe for reconstitution, 6pcs insulin syringe, plastic container and box, 10pcs alcohol pads.', 'a0a00001-0001-4000-8000-000000000001', 1900, 99, 50, true, true, '/products/tirzepatide-50mg.svg', 'Store at 2-8°C', ARRAY['10ml Bacteriostatic Water', 'Syringe for Reconstitution', '6pcs Insulin Syringe', 'Plastic Container & Box', '10pcs Alcohol Pads']),

  -- GTT
  ('b0b00001-0001-4000-8000-000000000005', 'GTT Set', 'GTT peptide set with 10ml bacteriostatic water. Complete set with all accessories included.', 'a0a00001-0001-4000-8000-000000000001', 800, 99, 50, true, false, '/products/gtt.svg', 'Store at 2-8°C', ARRAY['10ml Bacteriostatic Water', 'Syringe for Reconstitution', '6pcs Insulin Syringe', 'Plastic Container & Box', '10pcs Alcohol Pads']),

  -- SS31
  ('b0b00001-0001-4000-8000-000000000006', 'SS31 10mg Set', 'SS31 10mg with 10ml bacteriostatic water. Complete set with all accessories included.', 'a0a00001-0001-4000-8000-000000000001', 1800, 99, 50, true, false, '/products/ss31-10mg.svg', 'Store at 2-8°C', ARRAY['10ml Bacteriostatic Water', 'Syringe for Reconstitution', '6pcs Insulin Syringe', 'Plastic Container & Box', '10pcs Alcohol Pads']),

  -- AOD Sets
  ('b0b00001-0001-4000-8000-000000000007', 'AOD Set', 'AOD peptide set with 10ml bacteriostatic water. Complete set with all accessories.', 'a0a00001-0001-4000-8000-000000000001', 1750, 99, 50, true, false, '/products/aod-set.svg', 'Store at 2-8°C', ARRAY['10ml Bacteriostatic Water', 'Syringe for Reconstitution', '6pcs Insulin Syringe', 'Plastic Container & Box', '10pcs Alcohol Pads']),

  ('b0b00001-0001-4000-8000-000000000008', 'AOD w/ AA and Bacwater Set', 'AOD peptide set with amino acids and bacteriostatic water. Premium complete set.', 'a0a00001-0001-4000-8000-000000000001', 1850, 99, 50, true, false, '/products/aod-aa-set.svg', 'Store at 2-8°C', ARRAY['10ml Bacteriostatic Water', 'Amino Acids', 'Syringe for Reconstitution', '6pcs Insulin Syringe', 'Plastic Container & Box', '10pcs Alcohol Pads']),

  -- GHK-Cu
  ('b0b00001-0001-4000-8000-000000000009', 'GHK-Cu 100mg (Not Set)', 'GHK-Cu 100mg peptide vial only. No accessories included - vial only.', 'a0a00001-0001-4000-8000-000000000001', 999, 99, 50, true, false, '/products/ghkcu-100mg.svg', 'Store at 2-8°C', NULL),

  -- Semax Sets
  ('b0b00001-0001-4000-8000-000000000010', 'Semax 10mg Set', 'Semax 10mg with 10ml bacteriostatic water. Complete set with all accessories.', 'a0a00001-0001-4000-8000-000000000001', 1200, 99, 50, true, false, '/products/semax-10mg.svg', 'Store at 2-8°C', ARRAY['10ml Bacteriostatic Water', 'Syringe for Reconstitution', '6pcs Insulin Syringe', 'Plastic Container & Box', '10pcs Alcohol Pads']),

  ('b0b00001-0001-4000-8000-000000000011', 'Semax & Selank 20mg Set', 'Semax & Selank 20mg combination set with 10ml bacteriostatic water. Complete set with all accessories.', 'a0a00001-0001-4000-8000-000000000001', 1500, 99, 50, true, false, '/products/semax-selank-20mg.svg', 'Store at 2-8°C', ARRAY['10ml Bacteriostatic Water', 'Syringe for Reconstitution', '6pcs Insulin Syringe', 'Plastic Container & Box', '10pcs Alcohol Pads']),

  -- ============ INDIVIDUAL SALES ============

  ('b0b00001-0001-4000-8000-000000000012', 'Bacteriostatic Water 10ml', 'Premium 10ml bacteriostatic water for reconstitution.', 'a0a00001-0001-4000-8000-000000000002', 100, 99, 100, true, false, '/products/bacwater-10ml.svg', 'Store at room temperature', NULL),

  ('b0b00001-0001-4000-8000-000000000013', 'Bacteriostatic Water 3ml', 'Premium 3ml bacteriostatic water for reconstitution.', 'a0a00001-0001-4000-8000-000000000002', 80, 99, 100, true, false, '/products/bacwater-3ml.svg', 'Store at room temperature', NULL),

  ('b0b00001-0001-4000-8000-000000000014', 'AA3', 'Amino Acid supplement. Individual sale item.', 'a0a00001-0001-4000-8000-000000000002', 150, 99, 100, true, false, '/products/aa3.svg', 'Store at room temperature', NULL),

  ('b0b00001-0001-4000-8000-000000000015', 'GTT', 'GTT peptide individual vial.', 'a0a00001-0001-4000-8000-000000000002', 999, 99, 100, true, false, '/products/gtt-individual.svg', 'Store at 2-8°C', NULL),

  ('b0b00001-0001-4000-8000-000000000016', 'Lemon Bottle', 'Lemon Bottle fat dissolver. Individual sale item.', 'a0a00001-0001-4000-8000-000000000002', 999, 99, 100, true, false, '/products/lemon-bottle.svg', 'Store at room temperature', NULL);

-- Step 4: Update site settings for VR Jonina branding
INSERT INTO site_settings (id, value, type, description)
VALUES
  ('site_name', 'VR Jonina', 'text', 'Website name'),
  ('site_tagline', 'Your Trusted Peptide Partner', 'text', 'Website tagline')
ON CONFLICT (id) DO UPDATE SET value = EXCLUDED.value, updated_at = now();

-- Done! Your VR Jonina products are ready.
