-- ============================================
-- FIX: Remove ALL duplicate products & set images
-- Run this in Supabase SQL Editor
-- ============================================

-- STEP 1: Remove ALL duplicates - keep only the NEWEST record for each product name
DELETE FROM product_variations
WHERE product_id IN (
    SELECT id FROM products p
    WHERE EXISTS (
        SELECT 1 FROM products p2
        WHERE p2.name = p.name AND p2.created_at > p.created_at
    )
);

DELETE FROM products p
WHERE EXISTS (
    SELECT 1 FROM products p2
    WHERE p2.name = p.name AND p2.created_at > p.created_at
);

-- STEP 2: Set image_url for all 6 products (update ALL matching records regardless of current image_url)
UPDATE products SET image_url = '/products/ss31-10mg-v2.svg'
WHERE name = 'SS-31 10mg';

UPDATE products SET image_url = '/products/gtt-v2.svg'
WHERE name = 'GTT';

UPDATE products SET image_url = '/products/ghkcu-100mg-v2.svg'
WHERE name = 'GHK-CU 100mg';

UPDATE products SET image_url = '/products/semax-selank-20mg-v2.svg'
WHERE name = 'Semax & Selank 20mg Set';

UPDATE products SET image_url = '/products/lemon-bottle-yellow-v3.svg'
WHERE name = 'Lemon Bottle';

UPDATE products SET image_url = '/products/tirzepatide-50mg-v2.svg'
WHERE name = 'Tirz 50 Set';

-- STEP 3: Also set images for existing products from the better_than_bare migration
UPDATE products SET image_url = '/products/tirzepatide-15mg-v2.svg'
WHERE name = 'Tirz 15' AND image_url IS NULL;

UPDATE products SET image_url = '/products/tirzepatide-20mg-v2.svg'
WHERE name = 'Tirz 20' AND image_url IS NULL;

UPDATE products SET image_url = '/products/tirzepatide-30mg-v2.svg'
WHERE name = 'Tirz 30' AND image_url IS NULL;

UPDATE products SET image_url = '/products/ghkcu-50mg-v2.svg'
WHERE name = 'GHK-CU 50' AND image_url IS NULL;

UPDATE products SET image_url = '/products/semax-10mg-v2.svg'
WHERE name = 'Semax 10mg' AND image_url IS NULL;

-- STEP 4: Set featured products
UPDATE products SET featured = false;

UPDATE products SET featured = true WHERE name ILIKE '%tirz%';
UPDATE products SET featured = true WHERE name ILIKE '%semax%selank%';
UPDATE products SET featured = true WHERE name ILIKE '%ghk%';
UPDATE products SET featured = true WHERE name = 'GTT';

-- STEP 5: Verify - check for remaining duplicates and image status
SELECT name, id, image_url, featured, available, created_at
FROM products
ORDER BY name, created_at;
