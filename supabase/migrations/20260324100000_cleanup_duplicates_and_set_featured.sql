-- Cleanup duplicate products and set featured products
-- Featured (top): Tirzepatide, Semax & Selank, GHK-CU, GTT

-- Remove duplicate GHK-CU 100mg (keep the one with image "GHK-Cu 100mg (Not Set)")
DELETE FROM products
WHERE name = 'GHK-CU 100mg' AND (image_url IS NULL);

-- Remove duplicate GTT (keep one)
DELETE FROM products
WHERE name = 'GTT' AND id NOT IN (
    SELECT id FROM products WHERE name = 'GTT' ORDER BY created_at ASC LIMIT 1
);

-- Remove duplicate Semax & Selank 20mg Set (keep the one with image)
DELETE FROM products
WHERE name = 'Semax & Selank 20mg Set' AND (image_url IS NULL);

-- Remove duplicate SS-31 10mg (keep one)
DELETE FROM products
WHERE name = 'SS-31 10mg' AND id NOT IN (
    SELECT id FROM products WHERE name = 'SS-31 10mg' ORDER BY created_at ASC LIMIT 1
);

-- Remove duplicate Tirzepatide 50mg if "Tirz 50 Set" already exists
DELETE FROM products WHERE name = 'Tirzepatide 50mg';

-- First set all products to NOT featured
UPDATE products SET featured = false;

-- Set featured = true for Tirzepatide products (always on top)
UPDATE products SET featured = true WHERE name ILIKE '%tirz%';

-- Set featured = true for Semax & Selank
UPDATE products SET featured = true WHERE name ILIKE '%semax%selank%';

-- Set featured = true for GHK-CU
UPDATE products SET featured = true WHERE name ILIKE '%ghk%';

-- Set featured = true for GTT
UPDATE products SET featured = true WHERE name = 'GTT';

-- Verify results
SELECT name, featured, image_url, base_price FROM products ORDER BY featured DESC, name ASC;
