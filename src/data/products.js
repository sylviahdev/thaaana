// Full Thaana Hardware catalogue.
// Pricing in KES is indicative — adjust in the admin once a backend is wired up.
// Images are rendered by <ProductImage /> using SVG illustrations, so the
// `image` field is intentionally omitted here.

let _id = 1;
const id = () => _id++;

const products = [
  /* ---------------- Cement & Concrete ---------------- */
  { id: id(), name: "Bamburi Nguvu 32.5N Cement (50kg)", description: "General-purpose Portland cement for plaster, mortar and concrete works.", category: "Cement & Concrete", price: 780, unit: "per bag", badge: "Best Seller" },
  { id: id(), name: "Simba Cement 42.5N (50kg)", description: "High-strength cement for structural concrete, columns and beams.", category: "Cement & Concrete", price: 820, unit: "per bag" },
  { id: id(), name: "Savannah Tembo 42.5N (50kg)", description: "Premium high-strength cement preferred for foundations and slabs.", category: "Cement & Concrete", price: 810, unit: "per bag" },
  { id: id(), name: "Ballast 3/4\" (per tonne)", description: "Clean crushed quarry stone for concrete mix and hardcore.", category: "Cement & Concrete", price: 2300, unit: "per tonne" },
  { id: id(), name: "River Sand (per tonne)", description: "Sieved washed river sand ideal for plastering and concrete.", category: "Cement & Concrete", price: 1900, unit: "per tonne" },
  { id: id(), name: "Hardcore (per 7-tonne lorry)", description: "Quarry hardcore for foundation fill and DPM bedding.", category: "Cement & Concrete", price: 14500, unit: "per lorry" },

  /* ---------------- Steel & Reinforcement ---------------- */
  { id: id(), name: "Y8 Deformed Steel Bar (12m)", description: "High-tensile ribbed reinforcement bar for stirrups and slabs.", category: "Steel & Reinforcement", price: 620, unit: "per length" },
  { id: id(), name: "Y10 Deformed Steel Bar (12m)", description: "Standard reinforcement bar for slabs, beams and lintels.", category: "Steel & Reinforcement", price: 960, unit: "per length" },
  { id: id(), name: "Y12 Deformed Steel Bar (12m)", description: "Main bar for beams, columns and load-bearing slabs.", category: "Steel & Reinforcement", price: 1350, unit: "per length", badge: "Trade Price" },
  { id: id(), name: "Y16 Deformed Steel Bar (12m)", description: "Heavy-duty reinforcement for columns and structural beams.", category: "Steel & Reinforcement", price: 2380, unit: "per length" },
  { id: id(), name: "Y20 Deformed Steel Bar (12m)", description: "Structural reinforcement for high-rise and bridge works.", category: "Steel & Reinforcement", price: 3750, unit: "per length" },
  { id: id(), name: "Y25 Deformed Steel Bar (12m)", description: "Extra-heavy reinforcement for foundations and heavy structures.", category: "Steel & Reinforcement", price: 5900, unit: "per length" },
  { id: id(), name: "R6 Round Steel Bar (12m)", description: "Mild steel round bar for stirrups and binding work.", category: "Steel & Reinforcement", price: 380, unit: "per length" },
  { id: id(), name: "BRC Mesh A142 (4.8m × 2.4m)", description: "Welded steel mesh for floor slabs, driveways and ground beams.", category: "Steel & Reinforcement", price: 4200, unit: "per sheet" },
  { id: id(), name: "BRC Mesh A193 (4.8m × 2.4m)", description: "Heavier mesh grade for industrial floors and structural slabs.", category: "Steel & Reinforcement", price: 5650, unit: "per sheet" },
  { id: id(), name: "Binding Wire 16g (20kg coil)", description: "Annealed soft wire for tying reinforcement bars.", category: "Steel & Reinforcement", price: 3600, unit: "per coil" },
  { id: id(), name: "Square Tube 2\" × 2\" (6m)", description: "Mild steel square hollow section for gates and frames.", category: "Steel & Reinforcement", price: 2950, unit: "per length" },
  { id: id(), name: "Angle Bar 50 × 50 × 5mm (6m)", description: "Equal angle iron for fabrication and frames.", category: "Steel & Reinforcement", price: 2780, unit: "per length" },
  { id: id(), name: "Flat Bar 25mm × 3mm (6m)", description: "Mild steel flat bar for grilles and brackets.", category: "Steel & Reinforcement", price: 980, unit: "per length" },
  { id: id(), name: "Hollow Section 50 × 25 (6m)", description: "Rectangular hollow section for furniture, gates and structural use.", category: "Steel & Reinforcement", price: 2450, unit: "per length" },
  { id: id(), name: "Expanded Metal Sheet (8' × 4')", description: "Diamond-mesh expanded metal for plastering and security.", category: "Steel & Reinforcement", price: 3900, unit: "per sheet" },
  { id: id(), name: "Steel Door (Single Leaf)", description: "Heavy-gauge steel door with frame, primed and ready to fit.", category: "Steel & Reinforcement", price: 18500, unit: "per unit" },
  { id: id(), name: "Steel Window (4-Panel)", description: "Fixed steel window frame with glazing beads.", category: "Steel & Reinforcement", price: 9800, unit: "per unit" },

  /* ---------------- Roofing Materials ---------------- */
  { id: id(), name: "Mabati Box Profile 28g (3m)", description: "Pre-painted galvanised box profile sheet — long-lasting and weatherproof.", category: "Roofing Materials", price: 1850, unit: "per sheet", badge: "In Stock" },
  { id: id(), name: "Mabati Box Profile 30g (3m)", description: "Lighter gauge box profile sheet, economical roofing option.", category: "Roofing Materials", price: 1550, unit: "per sheet" },
  { id: id(), name: "Corrugated Iron Sheet 28g (3m)", description: "Classic galvanised corrugated roofing sheet.", category: "Roofing Materials", price: 1680, unit: "per sheet" },
  { id: id(), name: "Decra Stone-Coated Roof Tile", description: "Premium textured roofing tile with 50-year manufacturer warranty.", category: "Roofing Materials", price: 1200, unit: "per tile" },
  { id: id(), name: "Ridge Cap (3m)", description: "Pre-painted ridge cap matching box profile and IT4 sheets.", category: "Roofing Materials", price: 850, unit: "per length" },
  { id: id(), name: "Roofing Nails 3\" (1kg pack)", description: "Galvanised umbrella nails for fixing iron sheets to timber.", category: "Roofing Materials", price: 320, unit: "per pack" },
  { id: id(), name: "Roofing Screws with Washer (100pcs)", description: "Self-drilling screws with EPDM washer for box profile sheets.", category: "Roofing Materials", price: 950, unit: "per box" },
  { id: id(), name: "Roof Flashing (3m)", description: "Pre-formed flashing for wall-roof junctions and parapets.", category: "Roofing Materials", price: 720, unit: "per length" },
  { id: id(), name: "Gutter PG 6\" (3m)", description: "Pre-painted galvanised half-round gutter for rainwater drainage.", category: "Roofing Materials", price: 1100, unit: "per length" },
  { id: id(), name: "Downpipe 4\" (3m)", description: "PVC downpipe for routing rainwater to ground level.", category: "Roofing Materials", price: 560, unit: "per length" },
  { id: id(), name: "Waterproofing Membrane (10m roll)", description: "Bitumen-based waterproof membrane for flat roofs and basements.", category: "Roofing Materials", price: 4800, unit: "per roll" },

  /* ---------------- Plumbing Materials ---------------- */
  { id: id(), name: "PVC Pressure Pipe 1\" Class B (6m)", description: "Durable PVC pipe for cold water plumbing and irrigation.", category: "Plumbing Materials", price: 950, unit: "per length" },
  { id: id(), name: "Copper Pipe 22mm (3m)", description: "Premium copper tubing for hot water systems and gas.", category: "Plumbing Materials", price: 2800, unit: "per length" },
  { id: id(), name: "PPR Pipe 20mm (4m)", description: "Heat-fusion welded PPR pipe for hot and cold water.", category: "Plumbing Materials", price: 580, unit: "per length" },
  { id: id(), name: "HDPE Pipe 1\" PN10 (50m roll)", description: "High-density polyethylene pipe for water supply and irrigation.", category: "Plumbing Materials", price: 4600, unit: "per roll" },
  { id: id(), name: "Toilet Suite (Close-Coupled WC)", description: "Complete white ceramic WC with cistern, seat and fixings.", category: "Plumbing Materials", price: 9800, unit: "per set" },
  { id: id(), name: "Bathroom Pillar Tap (Chrome)", description: "Chrome-finish basin pillar tap with ceramic disc cartridge.", category: "Plumbing Materials", price: 1450, unit: "per piece" },

  /* ---------------- Electrical Supplies ---------------- */
  { id: id(), name: "Single Core Cable 2.5mm² (90m)", description: "PVC insulated copper cable for lighting and socket circuits.", category: "Electrical Supplies", price: 4600, unit: "per roll" },
  { id: id(), name: "Twin & Earth Cable 2.5mm² (90m)", description: "Flat twin & earth cable for domestic wiring.", category: "Electrical Supplies", price: 8200, unit: "per roll" },
  { id: id(), name: "MCB Distribution Board 8-Way", description: "Surface-mounted consumer unit with neutral and earth bars.", category: "Electrical Supplies", price: 3500, unit: "per unit" },
  { id: id(), name: "Single Pole Circuit Breaker 16A", description: "MCB for lighting and small appliance circuits.", category: "Electrical Supplies", price: 320, unit: "per piece" },
  { id: id(), name: "13A Switched Socket Outlet", description: "Single-gang switched socket with shutter, white finish.", category: "Electrical Supplies", price: 380, unit: "per piece" },
  { id: id(), name: "Light Switch 1-Gang 2-Way", description: "White moulded switch plate, 10A two-way.", category: "Electrical Supplies", price: 180, unit: "per piece" },
  { id: id(), name: "LED Bulb 9W (E27)", description: "Energy-saving LED bulb, warm white, 800 lumen.", category: "Electrical Supplies", price: 220, unit: "per bulb" },
  { id: id(), name: "LED Floodlight 50W", description: "Outdoor IP65 LED floodlight for security and yard lighting.", category: "Electrical Supplies", price: 1450, unit: "per piece" },
  { id: id(), name: "Conduit Pipe 20mm (3m)", description: "PVC electrical conduit for surface or buried wiring.", category: "Electrical Supplies", price: 95, unit: "per length" },
  { id: id(), name: "Extension Socket 4-Way (3m)", description: "Heavy-duty 4-way extension socket with surge protection.", category: "Electrical Supplies", price: 850, unit: "per piece" },
  { id: id(), name: "Solar Panel 200W Monocrystalline", description: "High-efficiency monocrystalline panel for off-grid systems.", category: "Electrical Supplies", price: 12800, unit: "per panel" },
  { id: id(), name: "Solar Garden Light (LED)", description: "Self-contained solar-powered LED light for pathways.", category: "Electrical Supplies", price: 680, unit: "per piece" },
  { id: id(), name: "Pure Sine Wave Inverter 1.5kVA", description: "24V battery inverter for solar and backup power systems.", category: "Electrical Supplies", price: 18500, unit: "per unit" },
  { id: id(), name: "Deep Cycle Battery 100Ah", description: "Maintenance-free deep-cycle battery for solar storage.", category: "Electrical Supplies", price: 14500, unit: "per battery" },

  /* ---------------- Paint & Finishing ---------------- */
  { id: id(), name: "Crown Silk Vinyl Emulsion (20L)", description: "Smooth, washable interior wall paint with low VOC.", category: "Paint & Finishing", price: 6500, unit: "per drum" },
  { id: id(), name: "Sadolin Weatherguard Exterior (4L)", description: "UV-resistant weatherproof masonry paint for exterior walls.", category: "Paint & Finishing", price: 2950, unit: "per tin" },
  { id: id(), name: "Gloss Enamel Paint (4L)", description: "Hard-wearing solvent-based gloss for wood and metal.", category: "Paint & Finishing", price: 2450, unit: "per tin" },
  { id: id(), name: "Undercoat Paint (4L)", description: "Bonding undercoat for primed wood and metal surfaces.", category: "Paint & Finishing", price: 2150, unit: "per tin" },
  { id: id(), name: "Wood Primer (1L)", description: "Penetrating primer for new and reclaimed timber.", category: "Paint & Finishing", price: 780, unit: "per tin" },
  { id: id(), name: "Wood Varnish — Clear Satin (1L)", description: "Polyurethane varnish for interior wood finishing.", category: "Paint & Finishing", price: 950, unit: "per tin" },
  { id: id(), name: "Paint Thinner (5L)", description: "Mineral thinner for cleaning brushes and reducing oil paints.", category: "Paint & Finishing", price: 1450, unit: "per jerrycan" },
  { id: id(), name: "Paint Brush Set (3 pcs)", description: "Synthetic-bristle brush set: 1\", 2\", 3\" — for all finishes.", category: "Paint & Finishing", price: 480, unit: "per set" },
  { id: id(), name: "Paint Roller 9\" with Tray", description: "Medium-pile roller and tray for emulsion walls and ceilings.", category: "Paint & Finishing", price: 650, unit: "per set" },
  { id: id(), name: "Spray Paint Aerosol 400ml", description: "Quick-dry spray paint for touch-ups and metal finishing.", category: "Paint & Finishing", price: 420, unit: "per can" },
  { id: id(), name: "Bituminous Waterproof Paint (5L)", description: "Black bituminous coating for foundations and water tanks.", category: "Paint & Finishing", price: 2800, unit: "per drum" },
  { id: id(), name: "Texture Paint (10L)", description: "Decorative textured masonry paint, weather-resistant.", category: "Paint & Finishing", price: 4200, unit: "per drum" },

  /* ---------------- Tools & Equipment ---------------- */
  { id: id(), name: "Heavy Duty Wheelbarrow (90L)", description: "Galvanised steel wheelbarrow with puncture-proof solid wheel.", category: "Tools & Equipment", price: 5800, unit: "per unit" },
  { id: id(), name: "Long-Handle Spade", description: "Forged carbon-steel spade with hardwood handle.", category: "Tools & Equipment", price: 950, unit: "per piece" },
  { id: id(), name: "Jembe (Heavy Duty 2kg)", description: "Sharpened heavy jembe for breaking ground and trenching.", category: "Tools & Equipment", price: 680, unit: "per piece" },
  { id: id(), name: "Garden Hoe (Hand)", description: "Lightweight gardening hoe for weeding and soil prep.", category: "Tools & Equipment", price: 480, unit: "per piece" },
  { id: id(), name: "Claw Hammer 16oz", description: "Drop-forged claw hammer with shock-absorbing handle.", category: "Tools & Equipment", price: 650, unit: "per piece" },
  { id: id(), name: "Bosch GBH 2-26 Rotary Hammer", description: "Professional 800W SDS-plus rotary hammer drill.", category: "Tools & Equipment", price: 24500, unit: "per unit", badge: "Pro" },
  { id: id(), name: "Angle Grinder 4½\" 850W", description: "Heavy-duty angle grinder with side handle and disc guard.", category: "Tools & Equipment", price: 4800, unit: "per unit" },
  { id: id(), name: "MMA Welding Machine 200A", description: "Inverter-based welding machine, 220V, with cables.", category: "Tools & Equipment", price: 9800, unit: "per unit" },
  { id: id(), name: "Tape Measure 5m", description: "Steel tape with auto-lock, metric/imperial graduations.", category: "Tools & Equipment", price: 280, unit: "per piece" },
  { id: id(), name: "Aluminium Step Ladder (8 Step)", description: "Lightweight A-frame ladder with anti-slip feet.", category: "Tools & Equipment", price: 6800, unit: "per piece" },
  { id: id(), name: "Petrol Generator 2.5kVA", description: "Recoil-start single-phase generator for site and home backup.", category: "Tools & Equipment", price: 32500, unit: "per unit" },

  /* ---------------- Tiles & Flooring ---------------- */
  { id: id(), name: "Porcelain Floor Tile 60 × 60cm", description: "Matt-finish vitrified porcelain tile. Box of 4 (1.44m²).", category: "Tiles & Flooring", price: 2400, unit: "per box" },
  { id: id(), name: "Ceramic Wall Tile 30 × 60cm", description: "Glazed ceramic wall tile for bathrooms and kitchens.", category: "Tiles & Flooring", price: 1750, unit: "per box" },
  { id: id(), name: "Marble Floor Tile 60 × 60cm", description: "Polished marble-effect tile for premium interiors.", category: "Tiles & Flooring", price: 3650, unit: "per box" },
  { id: id(), name: "Tile Adhesive (20kg)", description: "Cement-based adhesive for floor and wall tiles.", category: "Tiles & Flooring", price: 850, unit: "per bag" },
  { id: id(), name: "Wall & Floor Grout (5kg)", description: "Polymer-modified grout for tile joints up to 6mm.", category: "Tiles & Flooring", price: 580, unit: "per bag" },
  { id: id(), name: "Laminate Flooring AC4 (per box)", description: "Click-lock laminate flooring, oak finish. 2.2m² per box.", category: "Tiles & Flooring", price: 3200, unit: "per box" },
  { id: id(), name: "Vinyl Roll Flooring (per m²)", description: "Cushion-back vinyl roll, wood-effect pattern.", category: "Tiles & Flooring", price: 950, unit: "per m²" },

  /* ---------------- Timber & Lumber ---------------- */
  { id: id(), name: "Cypress Timber 4\" × 2\" (10ft)", description: "Treated cypress for roof trusses and framing.", category: "Timber & Lumber", price: 480, unit: "per piece" },
  { id: id(), name: "Cypress Timber 6\" × 2\" (10ft)", description: "Treated cypress for rafters and structural framing.", category: "Timber & Lumber", price: 720, unit: "per piece" },
  { id: id(), name: "Mvule Plank 12\" × 1\" (10ft)", description: "Premium hardwood plank for joinery and furniture.", category: "Timber & Lumber", price: 2850, unit: "per piece" },
  { id: id(), name: "Plywood Sheet 8' × 4' (18mm)", description: "Marine-grade plywood for cabinetry and formwork.", category: "Timber & Lumber", price: 3800, unit: "per sheet" },
  { id: id(), name: "Hardboard 8' × 4' (3mm)", description: "Smooth-faced hardboard for ceilings and back panels.", category: "Timber & Lumber", price: 1450, unit: "per sheet" },
  { id: id(), name: "Roofing Battens (Bundle of 10)", description: "Treated 2\" × 1\" battens for box profile roofing.", category: "Timber & Lumber", price: 1800, unit: "per bundle" },

  /* ---------------- Hardware & Fasteners ---------------- */
  { id: id(), name: "Common Nails 4\" (1kg)", description: "Bright wire nails for general carpentry.", category: "Hardware & Fasteners", price: 220, unit: "per kg" },
  { id: id(), name: "Drywall Screws 1½\" (100 pcs)", description: "Black phosphate self-tapping drywall screws.", category: "Hardware & Fasteners", price: 280, unit: "per box" },
  { id: id(), name: "Bolts & Nuts M10 × 50mm (Bag of 50)", description: "Galvanised hex bolts with washers and nuts.", category: "Hardware & Fasteners", price: 950, unit: "per bag" },
  { id: id(), name: "T-Hinges 6\" (Pair)", description: "Heavy-duty galvanised T-hinges for gates and doors.", category: "Hardware & Fasteners", price: 480, unit: "per pair" },
  { id: id(), name: "Heavy Duty Padlock 60mm", description: "Hardened steel shackle padlock with 3 keys.", category: "Hardware & Fasteners", price: 950, unit: "per piece" },
  { id: id(), name: "Lever Door Handle Set (Chrome)", description: "Lever-on-rose door handle with latch and strike plate.", category: "Hardware & Fasteners", price: 1850, unit: "per set" },
  { id: id(), name: "Cabinet Knob Set (10 pcs)", description: "Brushed chrome cabinet knobs with screws.", category: "Hardware & Fasteners", price: 620, unit: "per set" },
  { id: id(), name: "Galvanised Wire Mesh ½\" (1.2m × 25m)", description: "Welded wire mesh for security and fencing.", category: "Hardware & Fasteners", price: 5800, unit: "per roll" },
  { id: id(), name: "Chicken Mesh 1\" (1.2m × 25m)", description: "Hexagonal wire mesh for poultry runs and light fencing.", category: "Hardware & Fasteners", price: 3200, unit: "per roll" },

  /* ---------------- Safety Equipment ---------------- */
  { id: id(), name: "Safety Helmet (Yellow)", description: "ABS hard hat with adjustable harness, KEBS-approved.", category: "Safety Equipment", price: 480, unit: "per piece" },
  { id: id(), name: "Heavy Duty Work Gloves", description: "Leather-palm gloves with cotton back, builder's grade.", category: "Safety Equipment", price: 350, unit: "per pair" },
  { id: id(), name: "Reflective Vest (Class 2)", description: "High-visibility reflective vest, lime green.", category: "Safety Equipment", price: 380, unit: "per piece" },
  { id: id(), name: "Safety Gumboots", description: "Steel-toe PVC gumboots, oil and chemical resistant.", category: "Safety Equipment", price: 1450, unit: "per pair" },
  { id: id(), name: "Dust Mask N95 (Pack of 5)", description: "Disposable N95 dust masks for sanding and demolition.", category: "Safety Equipment", price: 380, unit: "per pack" },
  { id: id(), name: "Full Body Safety Harness", description: "5-point safety harness with shock-absorbing lanyard.", category: "Safety Equipment", price: 4800, unit: "per set" },

  /* ---------------- Agricultural & Outdoor ---------------- */
  { id: id(), name: "Concrete Fence Post (6ft)", description: "Pre-cast concrete fence post for chain-link and barbed fencing.", category: "Agricultural & Outdoor", price: 680, unit: "per post" },
  { id: id(), name: "Chain Link Fence 6ft × 25m", description: "Galvanised chain-link fencing, 2.5mm wire.", category: "Agricultural & Outdoor", price: 8800, unit: "per roll" },
  { id: id(), name: "Barbed Wire (20kg coil)", description: "Galvanised double-strand barbed wire, ~450m per coil.", category: "Agricultural & Outdoor", price: 4500, unit: "per coil" },
  { id: id(), name: "Electric Fence Energizer (4 Joule)", description: "Solar-compatible electric fence energizer for farm perimeters.", category: "Agricultural & Outdoor", price: 12800, unit: "per unit" },
  { id: id(), name: "Greenhouse Polythene 200μm (4m × 20m)", description: "UV-stabilised greenhouse film, 3-year warranty.", category: "Agricultural & Outdoor", price: 9800, unit: "per roll" },
  { id: id(), name: "HDPE Irrigation Pipe 1\" (100m)", description: "Black HDPE pipe for drip and sprinkler irrigation.", category: "Agricultural & Outdoor", price: 4200, unit: "per roll" },
  { id: id(), name: "Plastic Watering Can (10L)", description: "Durable HDPE watering can with detachable rose head.", category: "Agricultural & Outdoor", price: 650, unit: "per piece" },

  /* ---------------- Glass & Aluminium ---------------- */
  { id: id(), name: "Aluminium Sliding Window (1.5m × 1.2m)", description: "Powder-coated aluminium sliding window with 4mm glazing.", category: "Glass & Aluminium", price: 14500, unit: "per unit" },
  { id: id(), name: "Aluminium Casement Window (1.2m × 1.2m)", description: "Side-hung casement window with mosquito mesh.", category: "Glass & Aluminium", price: 12800, unit: "per unit" },
  { id: id(), name: "Tempered Glass Door (10mm)", description: "Frameless tempered glass door for retail and offices.", category: "Glass & Aluminium", price: 24500, unit: "per door" },
  { id: id(), name: "Bathroom Mirror 60 × 80cm", description: "Bevelled-edge wall-mounted bathroom mirror.", category: "Glass & Aluminium", price: 2450, unit: "per piece" },
  { id: id(), name: "Aluminium Profile (6m Bar)", description: "Anodised aluminium profile for fabrication, multiple sections.", category: "Glass & Aluminium", price: 1850, unit: "per length" },
  { id: id(), name: "Shower Cubicle 90 × 90cm", description: "Square corner shower enclosure with tempered glass and tray.", category: "Glass & Aluminium", price: 28500, unit: "per set" },

  /* ---------------- Water & Sanitation ---------------- */
  { id: id(), name: "Kentank Plastic Water Tank 1000L", description: "Kentank UV-stabilised polyethylene water storage tank with secure lid and outlet.", category: "Water & Sanitation", price: 12500, unit: "per tank" },
  { id: id(), name: "Kentank Plastic Water Tank 5000L", description: "Heavy-duty Kentank 5000L water tank for homes, schools and small farms.", category: "Water & Sanitation", price: 48500, unit: "per tank", badge: "Bulk Discount" },
  { id: id(), name: "Roto Tank 5000L", description: "Roto premium 4-layer black water tank — made heavier to last longer.", category: "Water & Sanitation", price: 52000, unit: "per tank", badge: "Premium" },
  { id: id(), name: "Roto Tank 10000L", description: "Roto 10,000L vertical water tank for estates and institutions.", category: "Water & Sanitation", price: 96000, unit: "per tank" },
  { id: id(), name: "Techno-Tank 2300L", description: "Mid-size Techno-Tank for elevated mounting and gravity-fed supply.", category: "Water & Sanitation", price: 22500, unit: "per tank" },
  { id: id(), name: "Septic Tank 4000L", description: "Pre-fabricated 3-chamber septic tank for off-sewer homes.", category: "Water & Sanitation", price: 56000, unit: "per tank" },
  { id: id(), name: "Bio Digester Tank 3000L", description: "Bacteria-based bio digester replacement for septic systems.", category: "Water & Sanitation", price: 68500, unit: "per unit" },
  { id: id(), name: "Cast Iron Manhole Cover (Heavy Duty)", description: "Class B125 cast iron manhole cover with frame.", category: "Water & Sanitation", price: 4800, unit: "per piece" },
  { id: id(), name: "HDPE Drainage Pipe 4\" (6m)", description: "Smooth-bore HDPE drainage pipe for sewer and stormwater.", category: "Water & Sanitation", price: 2450, unit: "per length" },
  { id: id(), name: "Domestic Water Meter ½\"", description: "Class B brass water meter for households and metered estates.", category: "Water & Sanitation", price: 3800, unit: "per meter" },
];

export default products;
