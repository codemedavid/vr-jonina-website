-- Add new products - March 2024
-- Skipping products already in the database: Tirz 15, Tirz 20, Tirz 30, Semax 10mg

DO $$
DECLARE
    weight_cat UUID;
    skin_cat UUID;
    wellness_cat UUID;
    cognitive_cat UUID;
BEGIN
    SELECT id INTO weight_cat FROM categories WHERE name = 'Weight Management';
    SELECT id INTO skin_cat FROM categories WHERE name = 'Beauty & Anti-Aging';
    SELECT id INTO wellness_cat FROM categories WHERE name = 'Wellness & Vitality';
    SELECT id INTO cognitive_cat FROM categories WHERE name = 'Cognitive';

    -- Tirzepatide 50mg (Weight Management) - NEW dosage
    INSERT INTO products (name, description, category, base_price, purity_percentage, featured, available, stock_quantity)
    VALUES ('Tirz 50 Set', 'Tirzepatide 50mg Complete Set - Highest dosage formulation with dual GIP/GLP-1 action for maximum weight management results.', weight_cat, 1900.00, 99.5, true, true, 50);

    -- GTT (Weight Management)
    INSERT INTO products (name, description, category, base_price, purity_percentage, featured, available, stock_quantity)
    VALUES ('GTT', 'GTT - Premium peptide for effective weight management support.', weight_cat, 800.00, 99.0, false, true, 50);

    -- SS-31 10mg (Wellness & Vitality)
    INSERT INTO products (name, description, category, base_price, purity_percentage, featured, available, stock_quantity)
    VALUES ('SS-31 10mg', 'SS-31 (Elamipretide) 10mg - Mitochondrial-targeted peptide for cellular energy, anti-aging, and overall vitality.', wellness_cat, 1800.00, 99.0, false, true, 40);

    -- AOD Set (Weight Management)
    INSERT INTO products (name, description, category, base_price, purity_percentage, featured, available, stock_quantity)
    VALUES ('AOD Set', 'AOD-9604 Complete Set - Fat-burning peptide fragment for targeted weight management.', weight_cat, 1750.00, 99.0, false, true, 40);

    -- AOD w/ AA and Bac Water Set (Weight Management)
    INSERT INTO products (name, description, category, base_price, purity_percentage, featured, available, stock_quantity)
    VALUES ('AOD w/ AA & Bac Water Set', 'AOD-9604 Complete Set with Acetic Acid and Bacteriostatic Water - Ready-to-use fat-burning peptide kit.', weight_cat, 1850.00, 99.0, false, true, 40);

    -- GHK-CU 100mg not set (Beauty & Anti-Aging)
    INSERT INTO products (name, description, category, base_price, purity_percentage, featured, available, stock_quantity)
    VALUES ('GHK-CU 100mg', 'GHK-Cu 100mg - Copper peptide complex for advanced skin rejuvenation, collagen synthesis, and anti-aging benefits. Vial only.', skin_cat, 999.00, 99.0, false, true, 40);

    -- Semax & Selank 20mg Set (Cognitive)
    INSERT INTO products (name, description, category, base_price, purity_percentage, featured, available, stock_quantity)
    VALUES ('Semax & Selank 20mg Set', 'Semax & Selank 20mg Complete Set - Dual nootropic blend for enhanced cognitive function, focus, stress relief, and mental clarity.', cognitive_cat, 1500.00, 99.0, false, true, 40);

    -- Lemon Bottle (Beauty & Anti-Aging)
    INSERT INTO products (name, description, category, base_price, purity_percentage, featured, available, stock_quantity)
    VALUES ('Lemon Bottle', 'Lemon Bottle - Advanced fat dissolving solution for targeted body contouring and slimming.', skin_cat, 1000.00, 99.0, false, true, 50);

END $$;

-- Verify new products
SELECT name, base_price, available FROM products ORDER BY name;
