-- ============================================
-- ADD CATEGORIES: Peppers, Topicals, Skin Boosters
-- ============================================

INSERT INTO public.categories (id, name, sort_order, icon, active) VALUES
('c0a80121-0010-4e78-94f8-585d77059010', 'Peppers', 1, 'FlaskConical', true),
('c0a80121-0011-4e78-94f8-585d77059011', 'Topicals', 2, 'Sparkles', true),
('c0a80121-0012-4e78-94f8-585d77059012', 'Skin Boosters', 3, 'Heart', true)
ON CONFLICT (id) DO UPDATE SET
    name = EXCLUDED.name,
    sort_order = EXCLUDED.sort_order,
    icon = EXCLUDED.icon,
    active = EXCLUDED.active;

-- ============================================
-- PEPPERS — Products with Variations
-- (Vial & Bac Only / Complete Set)
-- ============================================

-- 1. TR10
INSERT INTO public.products (id, name, description, category, base_price, stock_quantity, available, featured)
VALUES ('a0000001-0001-4000-a000-000000000001', 'TR10', 'Tirzepatide 10mg vial', 'Peppers', 1299.00, 100, true, true)
ON CONFLICT (id) DO UPDATE SET name=EXCLUDED.name, description=EXCLUDED.description, category=EXCLUDED.category, base_price=EXCLUDED.base_price, available=EXCLUDED.available;

INSERT INTO public.product_variations (id, product_id, name, quantity_mg, price, stock_quantity) VALUES
('b0000001-0001-4000-b000-000000000001', 'a0000001-0001-4000-a000-000000000001', 'Vial & Bac Only', 10, 1299.00, 100),
('b0000001-0001-4000-b000-000000000002', 'a0000001-0001-4000-a000-000000000001', 'Complete Set', 10, 1499.00, 100)
ON CONFLICT (id) DO UPDATE SET name=EXCLUDED.name, price=EXCLUDED.price, stock_quantity=EXCLUDED.stock_quantity;

-- 2. TR15
INSERT INTO public.products (id, name, description, category, base_price, stock_quantity, available, featured)
VALUES ('a0000001-0002-4000-a000-000000000002', 'TR15', 'Tirzepatide 15mg vial', 'Peppers', 1999.00, 100, true, false)
ON CONFLICT (id) DO UPDATE SET name=EXCLUDED.name, description=EXCLUDED.description, category=EXCLUDED.category, base_price=EXCLUDED.base_price, available=EXCLUDED.available;

INSERT INTO public.product_variations (id, product_id, name, quantity_mg, price, stock_quantity) VALUES
('b0000001-0002-4000-b000-000000000001', 'a0000001-0002-4000-a000-000000000002', 'Vial & Bac Only', 15, 1999.00, 100),
('b0000001-0002-4000-b000-000000000002', 'a0000001-0002-4000-a000-000000000002', 'Complete Set', 15, 2499.00, 100)
ON CONFLICT (id) DO UPDATE SET name=EXCLUDED.name, price=EXCLUDED.price, stock_quantity=EXCLUDED.stock_quantity;

-- 3. TR20
INSERT INTO public.products (id, name, description, category, base_price, stock_quantity, available, featured)
VALUES ('a0000001-0003-4000-a000-000000000003', 'TR20', 'Tirzepatide 20mg vial', 'Peppers', 2499.00, 100, true, false)
ON CONFLICT (id) DO UPDATE SET name=EXCLUDED.name, description=EXCLUDED.description, category=EXCLUDED.category, base_price=EXCLUDED.base_price, available=EXCLUDED.available;

INSERT INTO public.product_variations (id, product_id, name, quantity_mg, price, stock_quantity) VALUES
('b0000001-0003-4000-b000-000000000001', 'a0000001-0003-4000-a000-000000000003', 'Vial & Bac Only', 20, 2499.00, 100),
('b0000001-0003-4000-b000-000000000002', 'a0000001-0003-4000-a000-000000000003', 'Complete Set', 20, 2999.00, 100)
ON CONFLICT (id) DO UPDATE SET name=EXCLUDED.name, price=EXCLUDED.price, stock_quantity=EXCLUDED.stock_quantity;

-- 4. TR30
INSERT INTO public.products (id, name, description, category, base_price, stock_quantity, available, featured)
VALUES ('a0000001-0004-4000-a000-000000000004', 'TR30', 'Tirzepatide 30mg vial', 'Peppers', 2999.00, 100, true, false)
ON CONFLICT (id) DO UPDATE SET name=EXCLUDED.name, description=EXCLUDED.description, category=EXCLUDED.category, base_price=EXCLUDED.base_price, available=EXCLUDED.available;

INSERT INTO public.product_variations (id, product_id, name, quantity_mg, price, stock_quantity) VALUES
('b0000001-0004-4000-b000-000000000001', 'a0000001-0004-4000-a000-000000000004', 'Vial & Bac Only', 30, 2999.00, 100),
('b0000001-0004-4000-b000-000000000002', 'a0000001-0004-4000-a000-000000000004', 'Complete Set', 30, 3499.00, 100)
ON CONFLICT (id) DO UPDATE SET name=EXCLUDED.name, price=EXCLUDED.price, stock_quantity=EXCLUDED.stock_quantity;

-- 5. TR60
INSERT INTO public.products (id, name, description, category, base_price, stock_quantity, available, featured)
VALUES ('a0000001-0005-4000-a000-000000000005', 'TR60', 'Tirzepatide 60mg vial', 'Peppers', 3999.00, 100, true, false)
ON CONFLICT (id) DO UPDATE SET name=EXCLUDED.name, description=EXCLUDED.description, category=EXCLUDED.category, base_price=EXCLUDED.base_price, available=EXCLUDED.available;

INSERT INTO public.product_variations (id, product_id, name, quantity_mg, price, stock_quantity) VALUES
('b0000001-0005-4000-b000-000000000001', 'a0000001-0005-4000-a000-000000000005', 'Vial & Bac Only', 60, 3999.00, 100),
('b0000001-0005-4000-b000-000000000002', 'a0000001-0005-4000-a000-000000000005', 'Complete Set', 60, 4499.00, 100)
ON CONFLICT (id) DO UPDATE SET name=EXCLUDED.name, price=EXCLUDED.price, stock_quantity=EXCLUDED.stock_quantity;

-- 6. RETA10
INSERT INTO public.products (id, name, description, category, base_price, stock_quantity, available, featured)
VALUES ('a0000001-0006-4000-a000-000000000006', 'RETA10', 'Retatrutide 10mg vial', 'Peppers', 1999.00, 100, true, false)
ON CONFLICT (id) DO UPDATE SET name=EXCLUDED.name, description=EXCLUDED.description, category=EXCLUDED.category, base_price=EXCLUDED.base_price, available=EXCLUDED.available;

INSERT INTO public.product_variations (id, product_id, name, quantity_mg, price, stock_quantity) VALUES
('b0000001-0006-4000-b000-000000000001', 'a0000001-0006-4000-a000-000000000006', 'Vial & Bac Only', 10, 1999.00, 100),
('b0000001-0006-4000-b000-000000000002', 'a0000001-0006-4000-a000-000000000006', 'Complete Set', 10, 2499.00, 100)
ON CONFLICT (id) DO UPDATE SET name=EXCLUDED.name, price=EXCLUDED.price, stock_quantity=EXCLUDED.stock_quantity;

-- 7. BUFFERED NAD+500
INSERT INTO public.products (id, name, description, category, base_price, stock_quantity, available, featured)
VALUES ('a0000001-0007-4000-a000-000000000007', 'BUFFERED NAD+500', 'Buffered NAD+ 500mg vial', 'Peppers', 1599.00, 100, true, false)
ON CONFLICT (id) DO UPDATE SET name=EXCLUDED.name, description=EXCLUDED.description, category=EXCLUDED.category, base_price=EXCLUDED.base_price, available=EXCLUDED.available;

INSERT INTO public.product_variations (id, product_id, name, quantity_mg, price, stock_quantity) VALUES
('b0000001-0007-4000-b000-000000000001', 'a0000001-0007-4000-a000-000000000007', 'Vial & Bac Only', 500, 1599.00, 100),
('b0000001-0007-4000-b000-000000000002', 'a0000001-0007-4000-a000-000000000007', 'Complete Set', 500, 1999.00, 100)
ON CONFLICT (id) DO UPDATE SET name=EXCLUDED.name, price=EXCLUDED.price, stock_quantity=EXCLUDED.stock_quantity;

-- 8. GHKCU50
INSERT INTO public.products (id, name, description, category, base_price, stock_quantity, available, featured)
VALUES ('a0000001-0008-4000-a000-000000000008', 'GHKCU50', 'GHK-Cu 50mg vial', 'Peppers', 999.00, 100, true, false)
ON CONFLICT (id) DO UPDATE SET name=EXCLUDED.name, description=EXCLUDED.description, category=EXCLUDED.category, base_price=EXCLUDED.base_price, available=EXCLUDED.available;

INSERT INTO public.product_variations (id, product_id, name, quantity_mg, price, stock_quantity) VALUES
('b0000001-0008-4000-b000-000000000001', 'a0000001-0008-4000-a000-000000000008', 'Vial & Bac Only', 50, 999.00, 100),
('b0000001-0008-4000-b000-000000000002', 'a0000001-0008-4000-a000-000000000008', 'Complete Set', 50, 1499.00, 100)
ON CONFLICT (id) DO UPDATE SET name=EXCLUDED.name, price=EXCLUDED.price, stock_quantity=EXCLUDED.stock_quantity;

-- 9. GLUTA1500
INSERT INTO public.products (id, name, description, category, base_price, stock_quantity, available, featured)
VALUES ('a0000001-0009-4000-a000-000000000009', 'GLUTA1500', 'Glutathione 1500mg vial', 'Peppers', 1999.00, 100, true, false)
ON CONFLICT (id) DO UPDATE SET name=EXCLUDED.name, description=EXCLUDED.description, category=EXCLUDED.category, base_price=EXCLUDED.base_price, available=EXCLUDED.available;

INSERT INTO public.product_variations (id, product_id, name, quantity_mg, price, stock_quantity) VALUES
('b0000001-0009-4000-b000-000000000001', 'a0000001-0009-4000-a000-000000000009', 'Vial & Bac Only', 1500, 1999.00, 100),
('b0000001-0009-4000-b000-000000000002', 'a0000001-0009-4000-a000-000000000009', 'Complete Set', 1500, 2499.00, 100)
ON CONFLICT (id) DO UPDATE SET name=EXCLUDED.name, price=EXCLUDED.price, stock_quantity=EXCLUDED.stock_quantity;

-- 10. CAGRI5
INSERT INTO public.products (id, name, description, category, base_price, stock_quantity, available, featured)
VALUES ('a0000001-0010-4000-a000-000000000010', 'CAGRI5', 'Cagrilintide 5mg vial', 'Peppers', 1499.00, 100, true, false)
ON CONFLICT (id) DO UPDATE SET name=EXCLUDED.name, description=EXCLUDED.description, category=EXCLUDED.category, base_price=EXCLUDED.base_price, available=EXCLUDED.available;

INSERT INTO public.product_variations (id, product_id, name, quantity_mg, price, stock_quantity) VALUES
('b0000001-0010-4000-b000-000000000001', 'a0000001-0010-4000-a000-000000000010', 'Vial & Bac Only', 5, 1499.00, 100),
('b0000001-0010-4000-b000-000000000002', 'a0000001-0010-4000-a000-000000000010', 'Complete Set', 5, 1899.00, 100)
ON CONFLICT (id) DO UPDATE SET name=EXCLUDED.name, price=EXCLUDED.price, stock_quantity=EXCLUDED.stock_quantity;

-- 11. CAGRI10
INSERT INTO public.products (id, name, description, category, base_price, stock_quantity, available, featured)
VALUES ('a0000001-0011-4000-a000-000000000011', 'CAGRI10', 'Cagrilintide 10mg vial', 'Peppers', 1999.00, 100, true, false)
ON CONFLICT (id) DO UPDATE SET name=EXCLUDED.name, description=EXCLUDED.description, category=EXCLUDED.category, base_price=EXCLUDED.base_price, available=EXCLUDED.available;

INSERT INTO public.product_variations (id, product_id, name, quantity_mg, price, stock_quantity) VALUES
('b0000001-0011-4000-b000-000000000001', 'a0000001-0011-4000-a000-000000000011', 'Vial & Bac Only', 10, 1999.00, 100),
('b0000001-0011-4000-b000-000000000002', 'a0000001-0011-4000-a000-000000000011', 'Complete Set', 10, 2499.00, 100)
ON CONFLICT (id) DO UPDATE SET name=EXCLUDED.name, price=EXCLUDED.price, stock_quantity=EXCLUDED.stock_quantity;

-- 12. KPV10
INSERT INTO public.products (id, name, description, category, base_price, stock_quantity, available, featured)
VALUES ('a0000001-0012-4000-a000-000000000012', 'KPV10', 'KPV 10mg vial', 'Peppers', 1499.00, 100, true, false)
ON CONFLICT (id) DO UPDATE SET name=EXCLUDED.name, description=EXCLUDED.description, category=EXCLUDED.category, base_price=EXCLUDED.base_price, available=EXCLUDED.available;

INSERT INTO public.product_variations (id, product_id, name, quantity_mg, price, stock_quantity) VALUES
('b0000001-0012-4000-b000-000000000001', 'a0000001-0012-4000-a000-000000000012', 'Vial & Bac Only', 10, 1499.00, 100),
('b0000001-0012-4000-b000-000000000002', 'a0000001-0012-4000-a000-000000000012', 'Complete Set', 10, 1999.00, 100)
ON CONFLICT (id) DO UPDATE SET name=EXCLUDED.name, price=EXCLUDED.price, stock_quantity=EXCLUDED.stock_quantity;

-- 13. SNAP8 (Vial & Bac Only — no Complete Set)
INSERT INTO public.products (id, name, description, category, base_price, stock_quantity, available, featured)
VALUES ('a0000001-0013-4000-a000-000000000013', 'SNAP8', 'SNAP-8 peptide vial', 'Peppers', 1199.00, 100, true, false)
ON CONFLICT (id) DO UPDATE SET name=EXCLUDED.name, description=EXCLUDED.description, category=EXCLUDED.category, base_price=EXCLUDED.base_price, available=EXCLUDED.available;

INSERT INTO public.product_variations (id, product_id, name, quantity_mg, price, stock_quantity) VALUES
('b0000001-0013-4000-b000-000000000001', 'a0000001-0013-4000-a000-000000000013', 'Vial & Bac Only', 0, 1199.00, 100)
ON CONFLICT (id) DO UPDATE SET name=EXCLUDED.name, price=EXCLUDED.price, stock_quantity=EXCLUDED.stock_quantity;

-- 14. PT141 (Vial & Bac Only — no Complete Set)
INSERT INTO public.products (id, name, description, category, base_price, stock_quantity, available, featured)
VALUES ('a0000001-0014-4000-a000-000000000014', 'PT141', 'PT-141 (Bremelanotide) vial', 'Peppers', 1249.00, 100, true, false)
ON CONFLICT (id) DO UPDATE SET name=EXCLUDED.name, description=EXCLUDED.description, category=EXCLUDED.category, base_price=EXCLUDED.base_price, available=EXCLUDED.available;

INSERT INTO public.product_variations (id, product_id, name, quantity_mg, price, stock_quantity) VALUES
('b0000001-0014-4000-b000-000000000001', 'a0000001-0014-4000-a000-000000000014', 'Vial & Bac Only', 0, 1249.00, 100)
ON CONFLICT (id) DO UPDATE SET name=EXCLUDED.name, price=EXCLUDED.price, stock_quantity=EXCLUDED.stock_quantity;

-- 15. IPAMORELIN5 (Vial & Bac Only — no Complete Set)
INSERT INTO public.products (id, name, description, category, base_price, stock_quantity, available, featured)
VALUES ('a0000001-0015-4000-a000-000000000015', 'IPAMORELIN5', 'Ipamorelin 5mg vial', 'Peppers', 1199.00, 100, true, false)
ON CONFLICT (id) DO UPDATE SET name=EXCLUDED.name, description=EXCLUDED.description, category=EXCLUDED.category, base_price=EXCLUDED.base_price, available=EXCLUDED.available;

INSERT INTO public.product_variations (id, product_id, name, quantity_mg, price, stock_quantity) VALUES
('b0000001-0015-4000-b000-000000000001', 'a0000001-0015-4000-a000-000000000015', 'Vial & Bac Only', 5, 1199.00, 100)
ON CONFLICT (id) DO UPDATE SET name=EXCLUDED.name, price=EXCLUDED.price, stock_quantity=EXCLUDED.stock_quantity;

-- 16. OXYTOCIN (Vial & Bac Only — no Complete Set)
INSERT INTO public.products (id, name, description, category, base_price, stock_quantity, available, featured)
VALUES ('a0000001-0016-4000-a000-000000000016', 'OXYTOCIN', 'Oxytocin peptide vial', 'Peppers', 999.00, 100, true, false)
ON CONFLICT (id) DO UPDATE SET name=EXCLUDED.name, description=EXCLUDED.description, category=EXCLUDED.category, base_price=EXCLUDED.base_price, available=EXCLUDED.available;

INSERT INTO public.product_variations (id, product_id, name, quantity_mg, price, stock_quantity) VALUES
('b0000001-0016-4000-b000-000000000001', 'a0000001-0016-4000-a000-000000000016', 'Vial & Bac Only', 0, 999.00, 100)
ON CONFLICT (id) DO UPDATE SET name=EXCLUDED.name, price=EXCLUDED.price, stock_quantity=EXCLUDED.stock_quantity;

-- 17. MOTS-C
INSERT INTO public.products (id, name, description, category, base_price, stock_quantity, available, featured)
VALUES ('a0000001-0017-4000-a000-000000000017', 'MOTS-C', 'MOTS-C peptide vial', 'Peppers', 1299.00, 100, true, false)
ON CONFLICT (id) DO UPDATE SET name=EXCLUDED.name, description=EXCLUDED.description, category=EXCLUDED.category, base_price=EXCLUDED.base_price, available=EXCLUDED.available;

INSERT INTO public.product_variations (id, product_id, name, quantity_mg, price, stock_quantity) VALUES
('b0000001-0017-4000-b000-000000000001', 'a0000001-0017-4000-a000-000000000017', 'Vial & Bac Only', 0, 1299.00, 100),
('b0000001-0017-4000-b000-000000000002', 'a0000001-0017-4000-a000-000000000017', 'Complete Set', 0, 1599.00, 100)
ON CONFLICT (id) DO UPDATE SET name=EXCLUDED.name, price=EXCLUDED.price, stock_quantity=EXCLUDED.stock_quantity;

-- 18. SS31 10mg
INSERT INTO public.products (id, name, description, category, base_price, stock_quantity, available, featured)
VALUES ('a0000001-0018-4000-a000-000000000018', 'SS31 10mg', 'SS-31 (Elamipretide) 10mg vial', 'Peppers', 1499.00, 100, true, false)
ON CONFLICT (id) DO UPDATE SET name=EXCLUDED.name, description=EXCLUDED.description, category=EXCLUDED.category, base_price=EXCLUDED.base_price, available=EXCLUDED.available;

INSERT INTO public.product_variations (id, product_id, name, quantity_mg, price, stock_quantity) VALUES
('b0000001-0018-4000-b000-000000000001', 'a0000001-0018-4000-a000-000000000018', 'Vial & Bac Only', 10, 1499.00, 100),
('b0000001-0018-4000-b000-000000000002', 'a0000001-0018-4000-a000-000000000018', 'Complete Set', 10, 1999.00, 100)
ON CONFLICT (id) DO UPDATE SET name=EXCLUDED.name, price=EXCLUDED.price, stock_quantity=EXCLUDED.stock_quantity;

-- 19. KLOW
INSERT INTO public.products (id, name, description, category, base_price, stock_quantity, available, featured)
VALUES ('a0000001-0019-4000-a000-000000000019', 'KLOW', 'KLOW peptide vial', 'Peppers', 1999.00, 100, true, false)
ON CONFLICT (id) DO UPDATE SET name=EXCLUDED.name, description=EXCLUDED.description, category=EXCLUDED.category, base_price=EXCLUDED.base_price, available=EXCLUDED.available;

INSERT INTO public.product_variations (id, product_id, name, quantity_mg, price, stock_quantity) VALUES
('b0000001-0019-4000-b000-000000000001', 'a0000001-0019-4000-a000-000000000019', 'Vial & Bac Only', 0, 1999.00, 100),
('b0000001-0019-4000-b000-000000000002', 'a0000001-0019-4000-a000-000000000019', 'Complete Set', 0, 2499.00, 100)
ON CONFLICT (id) DO UPDATE SET name=EXCLUDED.name, price=EXCLUDED.price, stock_quantity=EXCLUDED.stock_quantity;

-- 20. AOD 5MG
INSERT INTO public.products (id, name, description, category, base_price, stock_quantity, available, featured)
VALUES ('a0000001-0020-4000-a000-000000000020', 'AOD 5MG', 'AOD-9604 5mg vial', 'Peppers', 1399.00, 100, true, false)
ON CONFLICT (id) DO UPDATE SET name=EXCLUDED.name, description=EXCLUDED.description, category=EXCLUDED.category, base_price=EXCLUDED.base_price, available=EXCLUDED.available;

INSERT INTO public.product_variations (id, product_id, name, quantity_mg, price, stock_quantity) VALUES
('b0000001-0020-4000-b000-000000000001', 'a0000001-0020-4000-a000-000000000020', 'Vial & Bac Only', 5, 1399.00, 100),
('b0000001-0020-4000-b000-000000000002', 'a0000001-0020-4000-a000-000000000020', 'Complete Set', 5, 1899.00, 100)
ON CONFLICT (id) DO UPDATE SET name=EXCLUDED.name, price=EXCLUDED.price, stock_quantity=EXCLUDED.stock_quantity;

-- 21. 5AMINO 50mg
INSERT INTO public.products (id, name, description, category, base_price, stock_quantity, available, featured)
VALUES ('a0000001-0021-4000-a000-000000000021', '5AMINO 50mg', '5-Amino 1MQ 50mg vial', 'Peppers', 1399.00, 100, true, false)
ON CONFLICT (id) DO UPDATE SET name=EXCLUDED.name, description=EXCLUDED.description, category=EXCLUDED.category, base_price=EXCLUDED.base_price, available=EXCLUDED.available;

INSERT INTO public.product_variations (id, product_id, name, quantity_mg, price, stock_quantity) VALUES
('b0000001-0021-4000-b000-000000000001', 'a0000001-0021-4000-a000-000000000021', 'Vial & Bac Only', 50, 1399.00, 100),
('b0000001-0021-4000-b000-000000000002', 'a0000001-0021-4000-a000-000000000021', 'Complete Set', 50, 1899.00, 100)
ON CONFLICT (id) DO UPDATE SET name=EXCLUDED.name, price=EXCLUDED.price, stock_quantity=EXCLUDED.stock_quantity;

-- 22. LIPO C with B12 (216)
INSERT INTO public.products (id, name, description, category, base_price, stock_quantity, available, featured)
VALUES ('a0000001-0022-4000-a000-000000000022', 'LIPO C with B12 (216)', 'Lipotropic C with B12 injection', 'Peppers', 1390.00, 100, true, false)
ON CONFLICT (id) DO UPDATE SET name=EXCLUDED.name, description=EXCLUDED.description, category=EXCLUDED.category, base_price=EXCLUDED.base_price, available=EXCLUDED.available;

INSERT INTO public.product_variations (id, product_id, name, quantity_mg, price, stock_quantity) VALUES
('b0000001-0022-4000-b000-000000000001', 'a0000001-0022-4000-a000-000000000022', 'Vial & Bac Only', 0, 1390.00, 100),
('b0000001-0022-4000-b000-000000000002', 'a0000001-0022-4000-a000-000000000022', 'Complete Set', 0, 1799.00, 100)
ON CONFLICT (id) DO UPDATE SET name=EXCLUDED.name, price=EXCLUDED.price, stock_quantity=EXCLUDED.stock_quantity;


-- ============================================
-- TOPICALS — Single price, no variations
-- ============================================

INSERT INTO public.products (id, name, description, category, base_price, stock_quantity, available, featured) VALUES
('a0000002-0001-4000-a000-000000000001', 'GHKCU 1g', 'GHK-Cu topical 1g', 'Topicals', 960.00, 100, true, false),
('a0000002-0002-4000-a000-000000000002', 'MATRIXYL 3000 20mg (RAW)', 'Matrixyl 3000 raw powder 20mg', 'Topicals', 890.00, 100, true, false),
('a0000002-0003-4000-a000-000000000003', 'ARGERILINE 20mg', 'Argireline topical 20mg', 'Topicals', 774.00, 100, true, false),
('a0000002-0004-4000-a000-000000000004', 'PDRN 20mg (Lyophilized)', 'PDRN lyophilized powder 20mg', 'Topicals', 929.00, 100, true, false),
('a0000002-0005-4000-a000-000000000005', 'SNAP 8 20mg (Raw)', 'SNAP-8 raw powder 20mg', 'Topicals', 885.00, 100, true, false),
('a0000002-0006-4000-a000-000000000006', 'SNAP 8 10mg (Lyophilized)', 'SNAP-8 lyophilized 10mg', 'Topicals', 920.00, 100, true, false)
ON CONFLICT (id) DO UPDATE SET name=EXCLUDED.name, description=EXCLUDED.description, category=EXCLUDED.category, base_price=EXCLUDED.base_price, available=EXCLUDED.available;


-- ============================================
-- SKIN BOOSTERS — Single price, no variations
-- ============================================

INSERT INTO public.products (id, name, description, category, base_price, stock_quantity, available, featured) VALUES
('a0000003-0001-4000-a000-000000000001', 'PDRN', 'PDRN skin booster', 'Skin Boosters', 930.00, 100, true, false),
('a0000003-0002-4000-a000-000000000002', 'PINK HYA', 'Pink Hyaluronic Acid skin booster', 'Skin Boosters', 980.00, 100, true, false),
('a0000003-0003-4000-a000-000000000003', 'BLUE HYA', 'Blue Hyaluronic Acid skin booster', 'Skin Boosters', 1050.00, 100, true, false),
('a0000003-0004-4000-a000-000000000004', 'RECOMBINANT COLLAGEN', 'Recombinant Collagen skin booster', 'Skin Boosters', 975.00, 100, true, false),
('a0000003-0005-4000-a000-000000000005', 'PERIOCULAR', 'Periocular skin booster', 'Skin Boosters', 985.00, 100, true, false),
('a0000003-0006-4000-a000-000000000006', 'SPOT WHITENING', 'Spot Whitening skin booster', 'Skin Boosters', 980.00, 100, true, false),
('a0000003-0007-4000-a000-000000000007', 'ACNE REMOVAL', 'Acne Removal skin booster', 'Skin Boosters', 975.00, 100, true, false)
ON CONFLICT (id) DO UPDATE SET name=EXCLUDED.name, description=EXCLUDED.description, category=EXCLUDED.category, base_price=EXCLUDED.base_price, available=EXCLUDED.available;
