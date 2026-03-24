-- Set image_url for new products that have SVG images in /public/products/

-- SS-31 10mg
UPDATE products
SET image_url = '/products/ss31-10mg-v2.svg'
WHERE name = 'SS-31 10mg' AND image_url IS NULL;

-- GTT 1500mg
UPDATE products
SET image_url = '/products/gtt-v2.svg'
WHERE name = 'GTT' AND image_url IS NULL;

-- GHK-CU 100mg
UPDATE products
SET image_url = '/products/ghkcu-100mg-v2.svg'
WHERE name = 'GHK-CU 100mg' AND image_url IS NULL;

-- Semax & Selank 20mg Set
UPDATE products
SET image_url = '/products/semax-selank-20mg-v2.svg'
WHERE name = 'Semax & Selank 20mg Set' AND image_url IS NULL;

-- Lemon Bottle (yellow liquid version)
UPDATE products
SET image_url = '/products/lemon-bottle-yellow-v3.svg'
WHERE name = 'Lemon Bottle' AND image_url IS NULL;

-- Tirzepatide 50mg
UPDATE products
SET image_url = '/products/tirzepatide-50mg-v2.svg'
WHERE name = 'Tirz 50 Set' AND image_url IS NULL;

-- Verify updates
SELECT name, image_url FROM products
WHERE name IN ('SS-31 10mg', 'GTT', 'GHK-CU 100mg', 'Semax & Selank 20mg Set', 'Lemon Bottle', 'Tirz 50 Set')
ORDER BY name;
