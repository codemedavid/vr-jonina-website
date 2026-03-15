-- ============================================
-- VR JONINA - Complete Product Catalog
-- Organized by category/use
-- Run this in your Supabase SQL Editor
-- ============================================

-- Step 1: Clear all existing data
DELETE FROM product_variations;
DELETE FROM products;
DELETE FROM categories;

-- Step 2: Insert categories organized by use
INSERT INTO categories (id, name, icon, sort_order, active) VALUES
  ('a0a00001-0001-4000-8000-000000000001', 'Weight Loss',              '🔥', 1, true),
  ('a0a00001-0001-4000-8000-000000000002', 'Botox',                    '💉', 2, true),
  ('a0a00001-0001-4000-8000-000000000003', 'Skin Boosters & Beauty',   '✨', 3, true),
  ('a0a00001-0001-4000-8000-000000000004', 'Cognitive Enhancement',    '🧠', 4, true),
  ('a0a00001-0001-4000-8000-000000000005', 'Anti-Aging & Recovery',    '🧬', 5, true),
  ('a0a00001-0001-4000-8000-000000000006', 'Individual Items',         '🧴', 6, true);


-- =============================================
-- CATEGORY 1: WEIGHT LOSS
-- Tirzepatide, GTT, AOD
-- =============================================

-- Tirzepatide 15mg Set
INSERT INTO products (id, name, description, category, base_price, purity_percentage, stock_quantity, available, featured, image_url, storage_conditions, inclusions) VALUES
  ('b0b00001-0001-4000-8000-000000000001', 'Tirzepatide 15mg Set', 'Tirzepatide 15mg — GLP-1 receptor agonist for weight management. Set includes 10ml bacteriostatic water and complete accessories.', 'a0a00001-0001-4000-8000-000000000001', 1300, 99, 50, true, true, '/products/tirzepatide-15mg.svg', 'Store at 2-8°C', ARRAY['10ml Bacteriostatic Water', 'Syringe for Reconstitution', '6pcs Insulin Syringe', 'Plastic Container & Box', '10pcs Alcohol Pads']);

-- Tirzepatide 20mg Set
INSERT INTO products (id, name, description, category, base_price, purity_percentage, stock_quantity, available, featured, image_url, storage_conditions, inclusions) VALUES
  ('b0b00001-0001-4000-8000-000000000002', 'Tirzepatide 20mg', 'Tirzepatide 20mg — GLP-1 receptor agonist for weight management. Available as single vial or Kit (10 vials). Single vial set includes 10ml bacteriostatic water and complete accessories.', 'a0a00001-0001-4000-8000-000000000001', 1500, 99, 50, true, true, '/products/tirzepatide-20mg.svg', 'Store at 2-8°C', ARRAY['10ml Bacteriostatic Water', 'Syringe for Reconstitution', '6pcs Insulin Syringe', 'Plastic Container & Box', '10pcs Alcohol Pads']);
INSERT INTO product_variations (id, product_id, name, quantity_mg, price, stock_quantity) VALUES
  ('e0e00001-0001-4000-8000-000000000001', 'b0b00001-0001-4000-8000-000000000002', 'Single Vial', 20, 1500, 50),
  ('e0e00001-0001-4000-8000-000000000002', 'b0b00001-0001-4000-8000-000000000002', 'Kit (10 Vials)', 200, 10500, 50);

-- Tirzepatide 30mg Set
INSERT INTO products (id, name, description, category, base_price, purity_percentage, stock_quantity, available, featured, image_url, storage_conditions, inclusions) VALUES
  ('b0b00001-0001-4000-8000-000000000003', 'Tirzepatide 30mg', 'Tirzepatide 30mg — GLP-1 receptor agonist for weight management. Available as single vial or Kit (10 vials). Single vial set includes 10ml bacteriostatic water and complete accessories.', 'a0a00001-0001-4000-8000-000000000001', 1600, 99, 50, true, true, '/products/tirzepatide-30mg.svg', 'Store at 2-8°C', ARRAY['10ml Bacteriostatic Water', 'Syringe for Reconstitution', '6pcs Insulin Syringe', 'Plastic Container & Box', '10pcs Alcohol Pads']);
INSERT INTO product_variations (id, product_id, name, quantity_mg, price, stock_quantity) VALUES
  ('e0e00001-0001-4000-8000-000000000003', 'b0b00001-0001-4000-8000-000000000003', 'Single Vial', 30, 1600, 50),
  ('e0e00001-0001-4000-8000-000000000004', 'b0b00001-0001-4000-8000-000000000003', 'Kit (10 Vials)', 300, 11500, 50);

-- Tirzepatide 50mg Set
INSERT INTO products (id, name, description, category, base_price, purity_percentage, stock_quantity, available, featured, image_url, storage_conditions, inclusions) VALUES
  ('b0b00001-0001-4000-8000-000000000004', 'Tirzepatide 50mg Set', 'Tirzepatide 50mg — GLP-1 receptor agonist for weight management. Set includes 10ml bacteriostatic water and complete accessories.', 'a0a00001-0001-4000-8000-000000000001', 1900, 99, 50, true, true, '/products/tirzepatide-50mg.svg', 'Store at 2-8°C', ARRAY['10ml Bacteriostatic Water', 'Syringe for Reconstitution', '6pcs Insulin Syringe', 'Plastic Container & Box', '10pcs Alcohol Pads']);

-- GTT Set (weight loss)
INSERT INTO products (id, name, description, category, base_price, purity_percentage, stock_quantity, available, featured, image_url, storage_conditions, inclusions) VALUES
  ('b0b00001-0001-4000-8000-000000000005', 'GTT Set', 'GTT peptide set for fat reduction and weight management. Set includes 10ml bacteriostatic water and complete accessories.', 'a0a00001-0001-4000-8000-000000000001', 800, 99, 50, true, false, '/products/gtt.svg', 'Store at 2-8°C', ARRAY['10ml Bacteriostatic Water', 'Syringe for Reconstitution', '6pcs Insulin Syringe', 'Plastic Container & Box', '10pcs Alcohol Pads']);

-- AOD Set (weight loss / fat loss)
INSERT INTO products (id, name, description, category, base_price, purity_percentage, stock_quantity, available, featured, image_url, storage_conditions, inclusions) VALUES
  ('b0b00001-0001-4000-8000-000000000007', 'AOD Set', 'AOD peptide — a fragment of growth hormone for targeted fat reduction. Set includes 10ml bacteriostatic water and complete accessories.', 'a0a00001-0001-4000-8000-000000000001', 1750, 99, 50, true, false, '/products/aod-set.svg', 'Store at 2-8°C', ARRAY['10ml Bacteriostatic Water', 'Syringe for Reconstitution', '6pcs Insulin Syringe', 'Plastic Container & Box', '10pcs Alcohol Pads']);

-- AOD w/ AA Set (weight loss / fat loss)
INSERT INTO products (id, name, description, category, base_price, purity_percentage, stock_quantity, available, featured, image_url, storage_conditions, inclusions) VALUES
  ('b0b00001-0001-4000-8000-000000000008', 'AOD w/ AA and Bacwater Set', 'AOD peptide set with amino acids and bacteriostatic water. Premium fat reduction set with all accessories.', 'a0a00001-0001-4000-8000-000000000001', 1850, 99, 50, true, false, '/products/aod-aa-set.svg', 'Store at 2-8°C', ARRAY['10ml Bacteriostatic Water', 'Amino Acids', 'Syringe for Reconstitution', '6pcs Insulin Syringe', 'Plastic Container & Box', '10pcs Alcohol Pads']);


-- =============================================
-- CATEGORY 2: BOTOX
-- Wondertox, Botulax, Nabota
-- Pre-Order & On-Hand variations
-- =============================================

-- Wondertox 100u
INSERT INTO products (id, name, description, category, base_price, purity_percentage, stock_quantity, available, featured, image_url, storage_conditions, inclusions) VALUES
  ('c0c00001-0001-4000-8000-000000000001', 'Wondertox 100u', 'Wondertox 100 units. Available as Pre-Order (ETA: 1 week) or On-Hand. Comes with cooling gel pack. Recommended shipping: Lalamove. J&T adds ₱160 styrobox fee.', 'a0a00001-0001-4000-8000-000000000002', 1750, 99, 50, true, true, '/products/wondertox-100u.svg', 'Store at 2-8°C. Ship with cooling gel pack.', NULL);
INSERT INTO product_variations (id, product_id, name, quantity_mg, price, stock_quantity) VALUES
  ('d0d00001-0001-4000-8000-000000000001', 'c0c00001-0001-4000-8000-000000000001', 'Pre-Order', 100, 1750, 50),
  ('d0d00001-0001-4000-8000-000000000002', 'c0c00001-0001-4000-8000-000000000001', 'On-Hand', 100, 2035, 6);

-- Wondertox 200u
INSERT INTO products (id, name, description, category, base_price, purity_percentage, stock_quantity, available, featured, image_url, storage_conditions, inclusions) VALUES
  ('c0c00001-0001-4000-8000-000000000002', 'Wondertox 200u', 'Wondertox 200 units. Available as Pre-Order (ETA: 1 week) or On-Hand. Comes with cooling gel pack. Recommended shipping: Lalamove. J&T adds ₱160 styrobox fee.', 'a0a00001-0001-4000-8000-000000000002', 2450, 99, 50, true, false, '/products/wondertox-200u.svg', 'Store at 2-8°C. Ship with cooling gel pack.', NULL);
INSERT INTO product_variations (id, product_id, name, quantity_mg, price, stock_quantity) VALUES
  ('d0d00001-0001-4000-8000-000000000003', 'c0c00001-0001-4000-8000-000000000002', 'Pre-Order', 200, 2450, 50),
  ('d0d00001-0001-4000-8000-000000000004', 'c0c00001-0001-4000-8000-000000000002', 'On-Hand', 200, 2945, 0);

-- Botulax 100u
INSERT INTO products (id, name, description, category, base_price, purity_percentage, stock_quantity, available, featured, image_url, storage_conditions, inclusions) VALUES
  ('c0c00001-0001-4000-8000-000000000003', 'Botulax 100u', 'Botulax 100 units. Available as Pre-Order (ETA: 1 week) or On-Hand. Comes with cooling gel pack. Recommended shipping: Lalamove. J&T adds ₱160 styrobox fee.', 'a0a00001-0001-4000-8000-000000000002', 2000, 99, 50, true, true, '/products/botulax-100u.svg', 'Store at 2-8°C. Ship with cooling gel pack.', NULL);
INSERT INTO product_variations (id, product_id, name, quantity_mg, price, stock_quantity) VALUES
  ('d0d00001-0001-4000-8000-000000000005', 'c0c00001-0001-4000-8000-000000000003', 'Pre-Order', 100, 2000, 50),
  ('d0d00001-0001-4000-8000-000000000006', 'c0c00001-0001-4000-8000-000000000003', 'On-Hand', 100, 2360, 0);

-- Botulax 200u
INSERT INTO products (id, name, description, category, base_price, purity_percentage, stock_quantity, available, featured, image_url, storage_conditions, inclusions) VALUES
  ('c0c00001-0001-4000-8000-000000000004', 'Botulax 200u', 'Botulax 200 units. Available as Pre-Order (ETA: 1 week) or On-Hand. Comes with cooling gel pack. Recommended shipping: Lalamove. J&T adds ₱160 styrobox fee.', 'a0a00001-0001-4000-8000-000000000002', 2700, 99, 50, true, false, '/products/botulax-200u.svg', 'Store at 2-8°C. Ship with cooling gel pack.', NULL);
INSERT INTO product_variations (id, product_id, name, quantity_mg, price, stock_quantity) VALUES
  ('d0d00001-0001-4000-8000-000000000007', 'c0c00001-0001-4000-8000-000000000004', 'Pre-Order', 200, 2700, 50),
  ('d0d00001-0001-4000-8000-000000000008', 'c0c00001-0001-4000-8000-000000000004', 'On-Hand', 200, 3270, 3);

-- Botulax 300u
INSERT INTO products (id, name, description, category, base_price, purity_percentage, stock_quantity, available, featured, image_url, storage_conditions, inclusions) VALUES
  ('c0c00001-0001-4000-8000-000000000005', 'Botulax 300u', 'Botulax 300 units. Available as Pre-Order (ETA: 1 week) or On-Hand. Comes with cooling gel pack. Recommended shipping: Lalamove. J&T adds ₱160 styrobox fee.', 'a0a00001-0001-4000-8000-000000000002', 3600, 99, 50, true, false, '/products/botulax-300u.svg', 'Store at 2-8°C. Ship with cooling gel pack.', NULL);
INSERT INTO product_variations (id, product_id, name, quantity_mg, price, stock_quantity) VALUES
  ('d0d00001-0001-4000-8000-000000000009', 'c0c00001-0001-4000-8000-000000000005', 'Pre-Order', 300, 3600, 50),
  ('d0d00001-0001-4000-8000-000000000010', 'c0c00001-0001-4000-8000-000000000005', 'On-Hand', 300, 4440, 0);

-- Nabota 100u
INSERT INTO products (id, name, description, category, base_price, purity_percentage, stock_quantity, available, featured, image_url, storage_conditions, inclusions) VALUES
  ('c0c00001-0001-4000-8000-000000000006', 'Nabota 100u', 'Nabota 100 units. Available as Pre-Order (ETA: 1 week) or On-Hand. Comes with cooling gel pack. Recommended shipping: Lalamove. J&T adds ₱160 styrobox fee.', 'a0a00001-0001-4000-8000-000000000002', 2300, 99, 50, true, false, '/products/nabota-100u.svg', 'Store at 2-8°C. Ship with cooling gel pack.', NULL);
INSERT INTO product_variations (id, product_id, name, quantity_mg, price, stock_quantity) VALUES
  ('d0d00001-0001-4000-8000-000000000011', 'c0c00001-0001-4000-8000-000000000006', 'Pre-Order', 100, 2300, 50),
  ('d0d00001-0001-4000-8000-000000000012', 'c0c00001-0001-4000-8000-000000000006', 'On-Hand', 100, 2750, 0);

-- Nabota 200u
INSERT INTO products (id, name, description, category, base_price, purity_percentage, stock_quantity, available, featured, image_url, storage_conditions, inclusions) VALUES
  ('c0c00001-0001-4000-8000-000000000007', 'Nabota 200u', 'Nabota 200 units. Available as Pre-Order (ETA: 1 week) or On-Hand. Comes with cooling gel pack. Recommended shipping: Lalamove. J&T adds ₱160 styrobox fee.', 'a0a00001-0001-4000-8000-000000000002', 3200, 99, 50, true, false, '/products/nabota-200u.svg', 'Store at 2-8°C. Ship with cooling gel pack.', NULL);
INSERT INTO product_variations (id, product_id, name, quantity_mg, price, stock_quantity) VALUES
  ('d0d00001-0001-4000-8000-000000000013', 'c0c00001-0001-4000-8000-000000000007', 'Pre-Order', 200, 3200, 50),
  ('d0d00001-0001-4000-8000-000000000014', 'c0c00001-0001-4000-8000-000000000007', 'On-Hand', 200, 3920, 0);


-- =============================================
-- CATEGORY 3: SKIN BOOSTERS & BEAUTY
-- Rejuran, Pink Glow, Luhilo, Lemon Bottle,
-- GHK-Cu, Aqualyx
-- =============================================

-- Rejuran Healer
INSERT INTO products (id, name, description, category, base_price, purity_percentage, stock_quantity, available, featured, image_url, storage_conditions, inclusions) VALUES
  ('c0c00001-0001-4000-8000-000000000008', 'Rejuran Healer', 'Rejuran Healer — premium skinbooster for deep skin regeneration, healing, and anti-aging. Pre-order or On-Hand available.', 'a0a00001-0001-4000-8000-000000000003', 7300, 99, 50, true, true, '/products/rejuran-healer.svg', 'Store at room temperature', NULL);
INSERT INTO product_variations (id, product_id, name, quantity_mg, price, stock_quantity) VALUES
  ('d0d00001-0001-4000-8000-000000000015', 'c0c00001-0001-4000-8000-000000000008', 'Pre-Order', 0, 7300, 50),
  ('d0d00001-0001-4000-8000-000000000016', 'c0c00001-0001-4000-8000-000000000008', 'On-Hand', 0, 8250, 5);

-- Rejuran HB
INSERT INTO products (id, name, description, category, base_price, purity_percentage, stock_quantity, available, featured, image_url, storage_conditions, inclusions) VALUES
  ('c0c00001-0001-4000-8000-000000000009', 'Rejuran HB', 'Rejuran HB — skinbooster for intense hydration and skin brightening. Pre-order or On-Hand available.', 'a0a00001-0001-4000-8000-000000000003', 4300, 99, 50, true, false, '/products/rejuran-hb.svg', 'Store at room temperature', NULL);
INSERT INTO product_variations (id, product_id, name, quantity_mg, price, stock_quantity) VALUES
  ('d0d00001-0001-4000-8000-000000000017', 'c0c00001-0001-4000-8000-000000000009', 'Pre-Order', 0, 4300, 50),
  ('d0d00001-0001-4000-8000-000000000018', 'c0c00001-0001-4000-8000-000000000009', 'On-Hand', 0, 5350, 0);

-- Rejuran S
INSERT INTO products (id, name, description, category, base_price, purity_percentage, stock_quantity, available, featured, image_url, storage_conditions, inclusions) VALUES
  ('c0c00001-0001-4000-8000-000000000010', 'Rejuran S', 'Rejuran S — skinbooster specially formulated for scar treatment and skin texture improvement. Pre-order or On-Hand available.', 'a0a00001-0001-4000-8000-000000000003', 4300, 99, 50, true, false, '/products/rejuran-s.svg', 'Store at room temperature', NULL);
INSERT INTO product_variations (id, product_id, name, quantity_mg, price, stock_quantity) VALUES
  ('d0d00001-0001-4000-8000-000000000019', 'c0c00001-0001-4000-8000-000000000010', 'Pre-Order', 0, 4300, 50),
  ('d0d00001-0001-4000-8000-000000000020', 'c0c00001-0001-4000-8000-000000000010', 'On-Hand', 0, 5350, 0);

-- Rejuran I
INSERT INTO products (id, name, description, category, base_price, purity_percentage, stock_quantity, available, featured, image_url, storage_conditions, inclusions) VALUES
  ('c0c00001-0001-4000-8000-000000000011', 'Rejuran I', 'Rejuran I — skinbooster designed for delicate eye area rejuvenation, reducing dark circles and fine lines. Pre-order or On-Hand available.', 'a0a00001-0001-4000-8000-000000000003', 4300, 99, 50, true, false, '/products/rejuran-i.svg', 'Store at room temperature', NULL);
INSERT INTO product_variations (id, product_id, name, quantity_mg, price, stock_quantity) VALUES
  ('d0d00001-0001-4000-8000-000000000021', 'c0c00001-0001-4000-8000-000000000011', 'Pre-Order', 0, 4300, 50),
  ('d0d00001-0001-4000-8000-000000000022', 'c0c00001-0001-4000-8000-000000000011', 'On-Hand', 0, 5350, 0);

-- Rejuran SkinBooster (3 vials)
INSERT INTO products (id, name, description, category, base_price, purity_percentage, stock_quantity, available, featured, image_url, storage_conditions, inclusions) VALUES
  ('c0c00001-0001-4000-8000-000000000012', 'Rejuran SkinBooster (3 vials)', 'Rejuran SkinBooster — complete 3-vial set for full skin rejuvenation treatment course. Pre-order or On-Hand available.', 'a0a00001-0001-4000-8000-000000000003', 7400, 99, 50, true, true, '/products/rejuran-skinbooster-3.svg', 'Store at room temperature', NULL);
INSERT INTO product_variations (id, product_id, name, quantity_mg, price, stock_quantity) VALUES
  ('d0d00001-0001-4000-8000-000000000023', 'c0c00001-0001-4000-8000-000000000012', 'Pre-Order', 0, 7400, 50),
  ('d0d00001-0001-4000-8000-000000000024', 'c0c00001-0001-4000-8000-000000000012', 'On-Hand', 0, 9380, 0);

-- Pink Glow (Pre-Order only)
INSERT INTO products (id, name, description, category, base_price, purity_percentage, stock_quantity, available, featured, image_url, storage_conditions, inclusions) VALUES
  ('c0c00001-0001-4000-8000-000000000013', 'Pink Glow', 'Pink Glow — skinbooster for radiant, glowing, glass-like skin. Pre-order only (ETA: 1 week after ship out).', 'a0a00001-0001-4000-8000-000000000003', 5050, 99, 50, true, false, '/products/pink-glow.svg', 'Store at room temperature', NULL);

-- Luhilo Snow (Pre-Order only)
INSERT INTO products (id, name, description, category, base_price, purity_percentage, stock_quantity, available, featured, image_url, storage_conditions, inclusions) VALUES
  ('c0c00001-0001-4000-8000-000000000014', 'Luhilo Snow', 'Luhilo Snow — skinbooster for skin whitening, brightening, and luminous complexion. Pre-order only (ETA: 1 week after ship out).', 'a0a00001-0001-4000-8000-000000000003', 6100, 99, 50, true, false, '/products/luhilo-snow.svg', 'Store at room temperature', NULL);

-- Luhilo (Pre-Order only)
INSERT INTO products (id, name, description, category, base_price, purity_percentage, stock_quantity, available, featured, image_url, storage_conditions, inclusions) VALUES
  ('c0c00001-0001-4000-8000-000000000015', 'Luhilo', 'Luhilo — skinbooster for deep skin hydration and rejuvenation. Pre-order only (ETA: 1 week after ship out).', 'a0a00001-0001-4000-8000-000000000003', 5250, 99, 50, true, false, '/products/luhilo.svg', 'Store at room temperature', NULL);

-- GHK-Cu 100mg (skin & beauty peptide)
INSERT INTO products (id, name, description, category, base_price, purity_percentage, stock_quantity, available, featured, image_url, storage_conditions, inclusions) VALUES
  ('b0b00001-0001-4000-8000-000000000009', 'GHK-Cu 100mg (Not Set)', 'GHK-Cu 100mg — copper peptide for skin repair, collagen production, and anti-aging. Vial only, no accessories included.', 'a0a00001-0001-4000-8000-000000000003', 999, 99, 50, true, false, '/products/ghkcu-100mg.svg', 'Store at 2-8°C', NULL);

-- Lemon Bottle (fat dissolver / beauty)
INSERT INTO products (id, name, description, category, base_price, purity_percentage, stock_quantity, available, featured, image_url, storage_conditions, inclusions) VALUES
  ('b0b00001-0001-4000-8000-000000000016', 'Lemon Bottle', 'Lemon Bottle — fat dissolver for targeted body contouring and slimming.', 'a0a00001-0001-4000-8000-000000000003', 999, 99, 100, true, false, '/products/lemon-bottle.svg', 'Store at room temperature', NULL);

-- Aqualyx (On-Hand only, with QR code)
INSERT INTO products (id, name, description, category, base_price, purity_percentage, stock_quantity, available, featured, image_url, storage_conditions, inclusions) VALUES
  ('c0c00001-0001-4000-8000-000000000016', 'Aqualyx (with QR code)', 'Aqualyx — premium fat dissolver with authentic QR code verification. On-Hand only.', 'a0a00001-0001-4000-8000-000000000003', 3010, 99, 50, true, false, '/products/aqualyx.svg', 'Store at room temperature', NULL);


-- =============================================
-- CATEGORY 4: COGNITIVE ENHANCEMENT
-- Semax, Semax & Selank
-- =============================================

-- Semax 10mg Set
INSERT INTO products (id, name, description, category, base_price, purity_percentage, stock_quantity, available, featured, image_url, storage_conditions, inclusions) VALUES
  ('b0b00001-0001-4000-8000-000000000010', 'Semax 10mg Set', 'Semax 10mg — nootropic peptide for cognitive enhancement, focus, and mental clarity. Set includes 10ml bacteriostatic water and complete accessories.', 'a0a00001-0001-4000-8000-000000000004', 1200, 99, 50, true, true, '/products/semax-10mg.svg', 'Store at 2-8°C', ARRAY['10ml Bacteriostatic Water', 'Syringe for Reconstitution', '6pcs Insulin Syringe', 'Plastic Container & Box', '10pcs Alcohol Pads']);

-- Semax & Selank 20mg Set
INSERT INTO products (id, name, description, category, base_price, purity_percentage, stock_quantity, available, featured, image_url, storage_conditions, inclusions) VALUES
  ('b0b00001-0001-4000-8000-000000000011', 'Semax & Selank 20mg Set', 'Semax & Selank 20mg combo — nootropic + anxiolytic peptides for focus, mental clarity, and stress relief. Set includes 10ml bacteriostatic water and complete accessories.', 'a0a00001-0001-4000-8000-000000000004', 1500, 99, 50, true, true, '/products/semax-selank-20mg.svg', 'Store at 2-8°C', ARRAY['10ml Bacteriostatic Water', 'Syringe for Reconstitution', '6pcs Insulin Syringe', 'Plastic Container & Box', '10pcs Alcohol Pads']);


-- =============================================
-- CATEGORY 5: ANTI-AGING & RECOVERY
-- SS31
-- =============================================

-- SS31 10mg Set
INSERT INTO products (id, name, description, category, base_price, purity_percentage, stock_quantity, available, featured, image_url, storage_conditions, inclusions) VALUES
  ('b0b00001-0001-4000-8000-000000000006', 'SS31 10mg Set', 'SS31 (Elamipretide) 10mg — mitochondrial peptide for cellular energy, anti-aging, and recovery support. Set includes 10ml bacteriostatic water and complete accessories.', 'a0a00001-0001-4000-8000-000000000005', 1800, 99, 50, true, true, '/products/ss31-10mg.svg', 'Store at 2-8°C', ARRAY['10ml Bacteriostatic Water', 'Syringe for Reconstitution', '6pcs Insulin Syringe', 'Plastic Container & Box', '10pcs Alcohol Pads']);


-- =============================================
-- CATEGORY 6: INDIVIDUAL ITEMS
-- Bacwater, AA3, GTT individual
-- =============================================

-- Bacteriostatic Water 10ml
INSERT INTO products (id, name, description, category, base_price, purity_percentage, stock_quantity, available, featured, image_url, storage_conditions, inclusions) VALUES
  ('b0b00001-0001-4000-8000-000000000012', 'Bacteriostatic Water 10ml', 'Premium 10ml bacteriostatic water for peptide reconstitution.', 'a0a00001-0001-4000-8000-000000000006', 100, 99, 100, true, false, '/products/bacwater-10ml.svg', 'Store at room temperature', NULL);

-- Bacteriostatic Water 3ml
INSERT INTO products (id, name, description, category, base_price, purity_percentage, stock_quantity, available, featured, image_url, storage_conditions, inclusions) VALUES
  ('b0b00001-0001-4000-8000-000000000013', 'Bacteriostatic Water 3ml', 'Premium 3ml bacteriostatic water for peptide reconstitution.', 'a0a00001-0001-4000-8000-000000000006', 80, 99, 100, true, false, '/products/bacwater-3ml.svg', 'Store at room temperature', NULL);

-- AA3
INSERT INTO products (id, name, description, category, base_price, purity_percentage, stock_quantity, available, featured, image_url, storage_conditions, inclusions) VALUES
  ('b0b00001-0001-4000-8000-000000000014', 'AA3', 'Amino Acid supplement. Individual sale item.', 'a0a00001-0001-4000-8000-000000000006', 150, 99, 100, true, false, '/products/aa3.svg', 'Store at room temperature', NULL);

-- GTT Individual
INSERT INTO products (id, name, description, category, base_price, purity_percentage, stock_quantity, available, featured, image_url, storage_conditions, inclusions) VALUES
  ('b0b00001-0001-4000-8000-000000000015', 'GTT', 'GTT peptide individual vial (no set accessories).', 'a0a00001-0001-4000-8000-000000000006', 999, 99, 100, true, false, '/products/gtt-individual.svg', 'Store at 2-8°C', NULL);


-- Step 4: Update site settings
INSERT INTO site_settings (id, value, type, description)
VALUES
  ('site_name', 'VR Jonina', 'text', 'Website name'),
  ('site_tagline', 'Your Trusted Peptide Partner', 'text', 'Website tagline')
ON CONFLICT (id) DO UPDATE SET value = EXCLUDED.value, updated_at = now();


-- ============================================
-- INVENTORY NOTES:
-- On-Hand stock for Botox:
--   Wondertox 100u: 6 boxes
--   Botulax 200u: 3 boxes
--   Rejuran Healer: 5 boxes
--
-- SHIPPING NOTES:
-- Pre-Order: ₱200 international shipping, J&T SF or Lalamove DF
-- On-Hand: J&T SF or Lalamove DF
-- Botox via J&T: +₱160 styrobox fee
-- Complete Kit upgrade: +₱150 (handled in frontend)
-- ============================================
