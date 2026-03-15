-- ============================================
-- VR JONINA - Botox + Rejuran Skinboosters
-- Run this in your Supabase SQL Editor
-- (Run AFTER the main products SQL)
-- ============================================

-- Add new categories
INSERT INTO categories (id, name, icon, sort_order, active) VALUES
  ('a0a00001-0001-4000-8000-000000000004', 'Botox', '💉', 4, true),
  ('a0a00001-0001-4000-8000-000000000005', 'Rejuran Skinboosters', '✨', 5, true)
ON CONFLICT (id) DO UPDATE SET name = EXCLUDED.name, icon = EXCLUDED.icon, sort_order = EXCLUDED.sort_order;

-- ============ BOTOX PRODUCTS ============

-- Wondertox 100u
INSERT INTO products (id, name, description, category, base_price, purity_percentage, stock_quantity, available, featured, image_url, storage_conditions, inclusions) VALUES
  ('c0c00001-0001-4000-8000-000000000001', 'Wondertox 100u', 'Wondertox 100 units. Pre-order (ETA: 1 week after ship out) or On-Hand available. Comes with cooling gel pack.', 'a0a00001-0001-4000-8000-000000000004', 950, 99, 50, true, true, '/products/wondertox-100u.svg', 'Store at 2-8°C. Ship with cooling gel pack.', NULL);

INSERT INTO product_variations (id, product_id, name, quantity_mg, price, stock_quantity) VALUES
  ('d0d00001-0001-4000-8000-000000000001', 'c0c00001-0001-4000-8000-000000000001', 'Pre-Order', 100, 950, 50),
  ('d0d00001-0001-4000-8000-000000000002', 'c0c00001-0001-4000-8000-000000000001', 'On-Hand (6 boxes)', 100, 1235, 6);

-- Wondertox 200u
INSERT INTO products (id, name, description, category, base_price, purity_percentage, stock_quantity, available, featured, image_url, storage_conditions, inclusions) VALUES
  ('c0c00001-0001-4000-8000-000000000002', 'Wondertox 200u', 'Wondertox 200 units. Pre-order (ETA: 1 week after ship out) or On-Hand available. Comes with cooling gel pack.', 'a0a00001-0001-4000-8000-000000000004', 1650, 99, 50, true, false, '/products/wondertox-200u.svg', 'Store at 2-8°C. Ship with cooling gel pack.', NULL);

INSERT INTO product_variations (id, product_id, name, quantity_mg, price, stock_quantity) VALUES
  ('d0d00001-0001-4000-8000-000000000003', 'c0c00001-0001-4000-8000-000000000002', 'Pre-Order', 200, 1650, 50),
  ('d0d00001-0001-4000-8000-000000000004', 'c0c00001-0001-4000-8000-000000000002', 'On-Hand', 200, 2145, 50);

-- Botulax 100u
INSERT INTO products (id, name, description, category, base_price, purity_percentage, stock_quantity, available, featured, image_url, storage_conditions, inclusions) VALUES
  ('c0c00001-0001-4000-8000-000000000003', 'Botulax 100u', 'Botulax 100 units. Pre-order (ETA: 1 week after ship out) or On-Hand available. Comes with cooling gel pack.', 'a0a00001-0001-4000-8000-000000000004', 1200, 99, 50, true, true, '/products/botulax-100u.svg', 'Store at 2-8°C. Ship with cooling gel pack.', NULL);

INSERT INTO product_variations (id, product_id, name, quantity_mg, price, stock_quantity) VALUES
  ('d0d00001-0001-4000-8000-000000000005', 'c0c00001-0001-4000-8000-000000000003', 'Pre-Order', 100, 1200, 50),
  ('d0d00001-0001-4000-8000-000000000006', 'c0c00001-0001-4000-8000-000000000003', 'On-Hand', 100, 1560, 50);

-- Botulax 200u
INSERT INTO products (id, name, description, category, base_price, purity_percentage, stock_quantity, available, featured, image_url, storage_conditions, inclusions) VALUES
  ('c0c00001-0001-4000-8000-000000000004', 'Botulax 200u', 'Botulax 200 units. Pre-order (ETA: 1 week after ship out) or On-Hand available. Comes with cooling gel pack.', 'a0a00001-0001-4000-8000-000000000004', 1900, 99, 50, true, false, '/products/botulax-200u.svg', 'Store at 2-8°C. Ship with cooling gel pack.', NULL);

INSERT INTO product_variations (id, product_id, name, quantity_mg, price, stock_quantity) VALUES
  ('d0d00001-0001-4000-8000-000000000007', 'c0c00001-0001-4000-8000-000000000004', 'Pre-Order', 200, 1900, 50),
  ('d0d00001-0001-4000-8000-000000000008', 'c0c00001-0001-4000-8000-000000000004', 'On-Hand (3 boxes)', 200, 2470, 3);

-- Botulax 300u
INSERT INTO products (id, name, description, category, base_price, purity_percentage, stock_quantity, available, featured, image_url, storage_conditions, inclusions) VALUES
  ('c0c00001-0001-4000-8000-000000000005', 'Botulax 300u', 'Botulax 300 units. Pre-order (ETA: 1 week after ship out) or On-Hand available. Comes with cooling gel pack.', 'a0a00001-0001-4000-8000-000000000004', 2800, 99, 50, true, false, '/products/botulax-300u.svg', 'Store at 2-8°C. Ship with cooling gel pack.', NULL);

INSERT INTO product_variations (id, product_id, name, quantity_mg, price, stock_quantity) VALUES
  ('d0d00001-0001-4000-8000-000000000009', 'c0c00001-0001-4000-8000-000000000005', 'Pre-Order', 300, 2800, 50),
  ('d0d00001-0001-4000-8000-000000000010', 'c0c00001-0001-4000-8000-000000000005', 'On-Hand', 300, 3640, 50);

-- Nabota 100u
INSERT INTO products (id, name, description, category, base_price, purity_percentage, stock_quantity, available, featured, image_url, storage_conditions, inclusions) VALUES
  ('c0c00001-0001-4000-8000-000000000006', 'Nabota 100u', 'Nabota 100 units. Pre-order (ETA: 1 week after ship out) or On-Hand available. Comes with cooling gel pack.', 'a0a00001-0001-4000-8000-000000000004', 1500, 99, 50, true, false, '/products/nabota-100u.svg', 'Store at 2-8°C. Ship with cooling gel pack.', NULL);

INSERT INTO product_variations (id, product_id, name, quantity_mg, price, stock_quantity) VALUES
  ('d0d00001-0001-4000-8000-000000000011', 'c0c00001-0001-4000-8000-000000000006', 'Pre-Order', 100, 1500, 50),
  ('d0d00001-0001-4000-8000-000000000012', 'c0c00001-0001-4000-8000-000000000006', 'On-Hand', 100, 1950, 50);

-- Nabota 200u
INSERT INTO products (id, name, description, category, base_price, purity_percentage, stock_quantity, available, featured, image_url, storage_conditions, inclusions) VALUES
  ('c0c00001-0001-4000-8000-000000000007', 'Nabota 200u', 'Nabota 200 units. Pre-order (ETA: 1 week after ship out) or On-Hand available. Comes with cooling gel pack.', 'a0a00001-0001-4000-8000-000000000004', 2400, 99, 50, true, false, '/products/nabota-200u.svg', 'Store at 2-8°C. Ship with cooling gel pack.', NULL);

INSERT INTO product_variations (id, product_id, name, quantity_mg, price, stock_quantity) VALUES
  ('d0d00001-0001-4000-8000-000000000013', 'c0c00001-0001-4000-8000-000000000007', 'Pre-Order', 200, 2400, 50),
  ('d0d00001-0001-4000-8000-000000000014', 'c0c00001-0001-4000-8000-000000000007', 'On-Hand', 200, 3120, 50);

-- ============ REJURAN SKINBOOSTERS ============

-- Rejuran Healer
INSERT INTO products (id, name, description, category, base_price, purity_percentage, stock_quantity, available, featured, image_url, storage_conditions, inclusions) VALUES
  ('c0c00001-0001-4000-8000-000000000008', 'Rejuran Healer', 'Rejuran Healer skinbooster for skin regeneration and healing. Pre-order or On-Hand available.', 'a0a00001-0001-4000-8000-000000000005', 6500, 99, 50, true, true, '/products/rejuran-healer.svg', 'Store at room temperature', NULL);

INSERT INTO product_variations (id, product_id, name, quantity_mg, price, stock_quantity) VALUES
  ('d0d00001-0001-4000-8000-000000000015', 'c0c00001-0001-4000-8000-000000000008', 'Pre-Order', 0, 6500, 50),
  ('d0d00001-0001-4000-8000-000000000016', 'c0c00001-0001-4000-8000-000000000008', 'On-Hand (5 boxes)', 0, 7450, 5);

-- Rejuran HB
INSERT INTO products (id, name, description, category, base_price, purity_percentage, stock_quantity, available, featured, image_url, storage_conditions, inclusions) VALUES
  ('c0c00001-0001-4000-8000-000000000009', 'Rejuran HB', 'Rejuran HB skinbooster for hydration and brightening. Pre-order or On-Hand available.', 'a0a00001-0001-4000-8000-000000000005', 3500, 99, 50, true, false, '/products/rejuran-hb.svg', 'Store at room temperature', NULL);

INSERT INTO product_variations (id, product_id, name, quantity_mg, price, stock_quantity) VALUES
  ('d0d00001-0001-4000-8000-000000000017', 'c0c00001-0001-4000-8000-000000000009', 'Pre-Order', 0, 3500, 50),
  ('d0d00001-0001-4000-8000-000000000018', 'c0c00001-0001-4000-8000-000000000009', 'On-Hand', 0, 4550, 50);

-- Rejuran S
INSERT INTO products (id, name, description, category, base_price, purity_percentage, stock_quantity, available, featured, image_url, storage_conditions, inclusions) VALUES
  ('c0c00001-0001-4000-8000-000000000010', 'Rejuran S', 'Rejuran S skinbooster for scar treatment. Pre-order or On-Hand available.', 'a0a00001-0001-4000-8000-000000000005', 3500, 99, 50, true, false, '/products/rejuran-s.svg', 'Store at room temperature', NULL);

INSERT INTO product_variations (id, product_id, name, quantity_mg, price, stock_quantity) VALUES
  ('d0d00001-0001-4000-8000-000000000019', 'c0c00001-0001-4000-8000-000000000010', 'Pre-Order', 0, 3500, 50),
  ('d0d00001-0001-4000-8000-000000000020', 'c0c00001-0001-4000-8000-000000000010', 'On-Hand', 0, 4550, 50);

-- Rejuran I
INSERT INTO products (id, name, description, category, base_price, purity_percentage, stock_quantity, available, featured, image_url, storage_conditions, inclusions) VALUES
  ('c0c00001-0001-4000-8000-000000000011', 'Rejuran I', 'Rejuran I skinbooster for eye area rejuvenation. Pre-order or On-Hand available.', 'a0a00001-0001-4000-8000-000000000005', 3500, 99, 50, true, false, '/products/rejuran-i.svg', 'Store at room temperature', NULL);

INSERT INTO product_variations (id, product_id, name, quantity_mg, price, stock_quantity) VALUES
  ('d0d00001-0001-4000-8000-000000000021', 'c0c00001-0001-4000-8000-000000000011', 'Pre-Order', 0, 3500, 50),
  ('d0d00001-0001-4000-8000-000000000022', 'c0c00001-0001-4000-8000-000000000011', 'On-Hand', 0, 4550, 50);

-- Rejuran SkinBooster (3 vials)
INSERT INTO products (id, name, description, category, base_price, purity_percentage, stock_quantity, available, featured, image_url, storage_conditions, inclusions) VALUES
  ('c0c00001-0001-4000-8000-000000000012', 'Rejuran SkinBooster (3 vials)', 'Rejuran SkinBooster set of 3 vials for complete skin rejuvenation treatment. Pre-order or On-Hand available.', 'a0a00001-0001-4000-8000-000000000005', 6600, 99, 50, true, true, '/products/rejuran-skinbooster-3.svg', 'Store at room temperature', NULL);

INSERT INTO product_variations (id, product_id, name, quantity_mg, price, stock_quantity) VALUES
  ('d0d00001-0001-4000-8000-000000000023', 'c0c00001-0001-4000-8000-000000000012', 'Pre-Order', 0, 6600, 50),
  ('d0d00001-0001-4000-8000-000000000024', 'c0c00001-0001-4000-8000-000000000012', 'On-Hand', 0, 8580, 50);

-- Pink Glow (Pre-Order only)
INSERT INTO products (id, name, description, category, base_price, purity_percentage, stock_quantity, available, featured, image_url, storage_conditions, inclusions) VALUES
  ('c0c00001-0001-4000-8000-000000000013', 'Pink Glow', 'Pink Glow skinbooster for radiant, glowing skin. Pre-order only (ETA: 1 week after ship out).', 'a0a00001-0001-4000-8000-000000000005', 4250, 99, 50, true, false, '/products/pink-glow.svg', 'Store at room temperature', NULL);

-- Luhilo Snow (Pre-Order only)
INSERT INTO products (id, name, description, category, base_price, purity_percentage, stock_quantity, available, featured, image_url, storage_conditions, inclusions) VALUES
  ('c0c00001-0001-4000-8000-000000000014', 'Luhilo Snow', 'Luhilo Snow skinbooster for skin whitening and brightening. Pre-order only (ETA: 1 week after ship out).', 'a0a00001-0001-4000-8000-000000000005', 5300, 99, 50, true, false, '/products/luhilo-snow.svg', 'Store at room temperature', NULL);

-- Luhilo (Pre-Order only)
INSERT INTO products (id, name, description, category, base_price, purity_percentage, stock_quantity, available, featured, image_url, storage_conditions, inclusions) VALUES
  ('c0c00001-0001-4000-8000-000000000015', 'Luhilo', 'Luhilo skinbooster for deep skin hydration and rejuvenation. Pre-order only (ETA: 1 week after ship out).', 'a0a00001-0001-4000-8000-000000000005', 4450, 99, 50, true, false, '/products/luhilo.svg', 'Store at room temperature', NULL);

-- Aqualyx (On-Hand only, with QR code)
INSERT INTO products (id, name, description, category, base_price, purity_percentage, stock_quantity, available, featured, image_url, storage_conditions, inclusions) VALUES
  ('c0c00001-0001-4000-8000-000000000016', 'Aqualyx (with QR code)', 'Aqualyx fat dissolver with authentic QR code verification. On-Hand only.', 'a0a00001-0001-4000-8000-000000000005', 2210, 99, 50, true, false, '/products/aqualyx.svg', 'Store at room temperature', NULL);

-- Done! Botox + Rejuran products added.
-- Note: Pre-Order shipping: ₱200 international fee, J&T SF or Lalamove DF
-- Note: On-Hand shipping: J&T SF or Lalamove DF
-- Note: J&T shipments have additional ₱160 styrobox fee for Botox temperature protection
