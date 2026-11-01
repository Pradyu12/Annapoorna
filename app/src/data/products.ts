export interface ProductItem {
  id: string;
  name: string;
  category: string;
  description: string;
  applications: string[];
  packaging: string;
  imageUrl: string;
}

export interface ProductCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  imageUrl: string;
  keyOfferings: string[];
}

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: 'cleaning-supplies',
    name: 'Cleaning Supplies',
    slug: 'cleaning-supplies',
    description: 'Commercial-grade chemical concentrates, floor detergents, disinfection agents, and surface care essentials.',
    icon: 'Sparkles',
    imageUrl: 'https://images.unsplash.com/photo-1585421514738-01798e348b17?auto=format&fit=crop&w=800&q=80',
    keyOfferings: ['Floor cleaners & neutral detergents', 'Disinfectant concentrates & sanitisers', 'Glass, wood & multi-surface cleaners', 'Heavy-duty degreasers & descalers'],
  },
  {
    id: 'hygiene-products',
    name: 'Hygiene Products',
    slug: 'hygiene-products',
    description: 'Workplace washroom hygiene consumables, hand hygiene solutions, automated dispensers, and air care systems.',
    icon: 'ShieldCheck',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80',
    keyOfferings: ['Touch-free hand soap & foam refills', 'C-fold, M-fold & HRT paper towels', 'Jumbo roll tissue & washroom paper', 'Aerosol & continuous air neutralisers'],
  },
  {
    id: 'pantry-supplies',
    name: 'Pantry Supplies',
    slug: 'pantry-supplies',
    description: 'Daily corporate breakroom provisions, beverage supplies, paper cups, disposables, and food-safe pantry consumables.',
    icon: 'Coffee',
    imageUrl: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80',
    keyOfferings: ['Tea, coffee & premium beverage premixes', 'Food-grade paper cups, stirrers & napkins', 'Pantry cleaning detergents & sponges', 'Breakroom cutlery & trash liners'],
  },
  {
    id: 'packaging-materials',
    name: 'Packaging Materials',
    slug: 'packaging-materials',
    description: 'Industrial corrugated packaging, stretch film, adhesive tapes, and protective wraps for warehousing and logistics.',
    icon: 'Package',
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    keyOfferings: ['BOPP self-adhesive carton packing tapes', 'Cast manual & machine stretch wrap film', 'Air bubble rolls & protective EPE foam', 'Corrugated boxes & strap rolls'],
  },
  {
    id: 'dairy-products',
    name: 'Dairy Products',
    slug: 'dairy-products',
    description: 'Reliable scheduled procurement and delivery of fresh milk, curd, and institutional dairy batches for corporate cafeterias.',
    icon: 'Milk',
    imageUrl: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=800&q=80',
    keyOfferings: ['Standardised & pasteurised fresh milk pouches', 'Bulk institutional curd & paneer crates', 'Commercial kitchen cooking butter', 'Scheduled morning delivery fulfillment'],
  },
  {
    id: 'rubber-mats',
    name: 'Rubber Mats',
    slug: 'rubber-mats',
    description: 'Heavy-duty industrial anti-fatigue flooring, wet-area drainage matting, and commercial dust-control entrance runners.',
    icon: 'Layers',
    imageUrl: 'https://images.unsplash.com/photo-1590247813693-5541d1c609fd?auto=format&fit=crop&w=800&q=80',
    keyOfferings: ['Ergonomic anti-fatigue standing mats', 'Wet-area perforated rubber drainage mats', 'Heavy-traffic ribbed entrance walk-off mats', 'Electrical insulating safety matting'],
  },
  {
    id: 'institutional-products',
    name: 'Institutional Products',
    slug: 'institutional-products',
    description: 'Standardised facility hardware, waste bins, colour-coded janitorial carts, safety signage, and spill management kits.',
    icon: 'Building2',
    imageUrl: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=800&q=80',
    keyOfferings: ['Pedal waste bins & segregated colour dustbins', 'Janitorial service carts & wringer mop trolleys', 'Wet floor caution cones & folding boards', 'PPE supplies & chemical spill management kits'],
  },
];

export const PRODUCTS_CATALOG: ProductItem[] = [
  // Cleaning Supplies
  {
    id: 'cs-01',
    name: 'Concentrated Neutral Floor Cleaner',
    category: 'Cleaning Supplies',
    description: 'High-dilution neutral cleaner engineered for daily maintenance of marble, granite, epoxy, and vitrified commercial flooring without leaving residue.',
    applications: ['Corporate campuses', 'IT parks', 'Manufacturing floors'],
    packaging: '5L & 20L Jerry Cans',
    imageUrl: 'https://images.unsplash.com/photo-1585421514738-01798e348b17?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'cs-02',
    name: 'Heavy-Duty Industrial Degreaser',
    category: 'Cleaning Supplies',
    description: 'Fast-acting alkaline degreasing chemical for machinery, automotive bays, shop floors, and oily workshop environments.',
    applications: ['Industrial plants', 'Automotive bays', 'Machine shops'],
    packaging: '25L & 50L Drums',
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'cs-03',
    name: 'Surface Disinfectant & Sanitiser Concentrate',
    category: 'Cleaning Supplies',
    description: 'Hospital-grade quaternary ammonium compound formulated for broad-spectrum antimicrobial action on high-touch work surfaces.',
    applications: ['Healthcare facilities', 'Pharma sites', 'Corporate offices'],
    packaging: '5L Canister',
    imageUrl: 'https://images.unsplash.com/photo-1584744982491-665216d95f8b?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'cs-04',
    name: 'Streak-Free Glass & Mirror Cleaner',
    category: 'Cleaning Supplies',
    description: 'Quick-drying formulation that cuts dust, fingerprints, and atmospheric grime without clouding or streaks on architectural glass partitions.',
    applications: ['Office glass facades', 'Conference rooms', 'Showrooms'],
    packaging: '5L Bulk & 500ml Spray Bottles',
    imageUrl: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=600&q=80',
  },

  // Hygiene Products
  {
    id: 'hp-01',
    name: 'Commercial Antibacterial Foam Hand Wash',
    category: 'Hygiene Products',
    description: 'Enriched foaming hand wash formulated for frequent workplace hand hygiene, skin conditioning, and touchless dispenser compatibility.',
    applications: ['Office washrooms', 'Hospitality restrooms', 'R&D labs'],
    packaging: '5L Bulk Refill Units',
    imageUrl: 'https://images.unsplash.com/photo-1608248597359-0f2c4eeebcf4?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'hp-02',
    name: 'Premium Virgin M-Fold & C-Fold Paper Towels',
    category: 'Hygiene Products',
    description: 'High-absorbency, 2-ply embossed paper towels designed for controlled one-at-a-time dispenser withdrawal to minimise washroom wastage.',
    applications: ['Corporate washrooms', 'Institutional cafeterias', 'Clinics'],
    packaging: 'Cartons of 20 Packs (150 sheets/pack)',
    imageUrl: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'hp-03',
    name: 'Jumbo Roll Tissue (JRT) 2-Ply',
    category: 'Hygiene Products',
    description: 'Cost-effective high-capacity 2-ply toilet rolls reducing janitorial maintenance intervals in high-footfall commercial buildings.',
    applications: ['Commercial office towers', 'Malls', 'Convention centres'],
    packaging: 'Box of 12 Rolls (300m per roll)',
    imageUrl: 'https://images.unsplash.com/photo-1584556812952-905ffd0c611a?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'hp-04',
    name: 'Automated Aerosol Washroom Air Care Dispenser & Refills',
    category: 'Hygiene Products',
    description: 'Programmable commercial air deodorisers delivering timed micro-burst fragrance neutralisers for sustained ambient freshness.',
    applications: ['Corporate rest areas', 'Elevator lobbies', 'Restrooms'],
    packaging: 'Dispensers + 3000-spray Refill Cans',
    imageUrl: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=600&q=80',
  },

  // Pantry Supplies
  {
    id: 'ps-01',
    name: 'Institutional Roasted Coffee & Tea Premixes',
    category: 'Pantry Supplies',
    description: 'Reliable pantry supply of commercial vending machine instant tea and coffee premixes formulated for smooth dispensing.',
    applications: ['Cafeterias', 'Pantry vending machines', 'Executive lounges'],
    packaging: '1kg Sealed Moisture-Proof Pouches',
    imageUrl: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'ps-02',
    name: 'Bio-Degradable Food-Grade Paper Beverage Cups',
    category: 'Pantry Supplies',
    description: 'Heat-resistant, leak-proof single-use paper cups manufactured from sustainable food-grade paperboard for hot beverages.',
    applications: ['Office tea points', 'Event catering', 'Breakrooms'],
    packaging: 'Carton of 1,000 / 2,000 Cups (150ml & 200ml)',
    imageUrl: 'https://images.unsplash.com/photo-1577937927133-66ef06acdf18?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'ps-03',
    name: 'Commercial Dishwashing Gel Concentrate',
    category: 'Pantry Supplies',
    description: 'Fast-rinse degreasing dishwash detergent safe on stainless steel, porcelain, and glassware in corporate pantries.',
    applications: ['Corporate kitchens', 'Cafeterias', 'Pantry sinks'],
    packaging: '5L & 20L Canisters',
    imageUrl: 'https://images.unsplash.com/photo-1585421514738-01798e348b17?auto=format&fit=crop&w=600&q=80',
  },

  // Packaging Materials
  {
    id: 'pm-01',
    name: 'Heavy-Duty BOPP Carton Sealing Tape',
    category: 'Packaging Materials',
    description: 'High shear adhesive BOPP packaging tape delivering immediate bond on corrugated shipping cartons across temperature variations.',
    applications: ['Fulfillment warehouses', 'Industrial dispatch', 'Logistics'],
    packaging: 'Cartons of 72 Rolls (48mm / 65m & 100m)',
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'pm-02',
    name: 'Industrial Cast Stretch Film (Manual & Machine Grade)',
    category: 'Packaging Materials',
    description: 'Multi-layer high-tensile pallet wrap with superior puncture resistance and elastic retention for safe palletised transport.',
    applications: ['Pallet unitisation', 'Warehouse shipping', 'Production packaging'],
    packaging: 'Rolls (23 Micron, 500mm width, 3kg/5kg)',
    imageUrl: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'pm-03',
    name: 'Air Bubble Packaging Rolls & EPE Foam',
    category: 'Packaging Materials',
    description: 'Resilient cushioning materials engineered to protect precision electronics, glass, and industrial components against transit shock.',
    applications: ['Hardware packaging', 'Electronics dispatch', 'E-commerce logistics'],
    packaging: 'Rolls (1m x 100m Standard)',
    imageUrl: 'https://images.unsplash.com/photo-1607344645866-009c320c5ab8?auto=format&fit=crop&w=600&q=80',
  },

  // Dairy Products
  {
    id: 'dp-01',
    name: 'Fresh Pasteurised Toned Milk Pouches',
    category: 'Dairy Products',
    description: 'Daily scheduled early-morning delivery of fresh, certified pasteurised milk in bulk crates for office tea bars and cafeterias.',
    applications: ['Corporate pantries', 'Staff cafeterias', 'Hostels'],
    packaging: 'Crates of 500ml / 1000ml pouches',
    imageUrl: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'dp-02',
    name: 'Institutional Fresh Bulk Curd & Dairy Items',
    category: 'Dairy Products',
    description: 'Hygienically prepared fresh curd and dairy batches delivered cold-chain for commercial catering and employee dining facilities.',
    applications: ['Central kitchens', 'Institutional dining', 'Catering setups'],
    packaging: '10kg & 15kg Food-grade Buckets',
    imageUrl: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=600&q=80',
  },

  // Rubber Mats
  {
    id: 'rm-01',
    name: 'Industrial Anti-Fatigue Cushion Mats',
    category: 'Rubber Mats',
    description: 'Engineered closed-cell rubber cushioning mats designed to alleviate musculoskeletal strain for operators standing at assembly lines.',
    applications: ['Assembly workstations', 'Packaging desks', 'Machining cells'],
    packaging: 'Custom Length Runners & 3ft x 2ft Units',
    imageUrl: 'https://images.unsplash.com/photo-1590247813693-5541d1c609fd?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'rm-02',
    name: 'Heavy-Duty Ring Perforated Drainage Mats',
    category: 'Rubber Mats',
    description: 'Open-ring rubber matting with beveled edges providing slip-resistant traction and liquid drainage in wet industrial or kitchen areas.',
    applications: ['Kitchen wash areas', 'Plant entrances', 'Ramp walkways'],
    packaging: 'Standard 3ft x 5ft & interlocking tiles',
    imageUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'rm-03',
    name: 'Commercial Dust-Control Carpet-Top Entrance Runners',
    category: 'Rubber Mats',
    description: 'Vulcanised rubber-backed tufted runners that trap moisture, dirt, and dust at building threshold entries to safeguard indoor flooring.',
    applications: ['Office building lobbies', 'Lift landings', 'Retail thresholds'],
    packaging: 'Roll lengths (3ft, 4ft widths up to 10m)',
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80',
  },

  // Institutional Products
  {
    id: 'ip-01',
    name: 'Colour-Coded Segregated Waste Bins (Wet/Dry/E-Waste)',
    category: 'Institutional Products',
    description: 'Durable, UV-stabilised HDPE bins compliant with municipal solid waste segregation guidelines for corporate and institutional facilities.',
    applications: ['Office floors', 'Common corridors', 'Industrial parks'],
    packaging: 'Units: 60L, 80L, 120L & 240L Wheeled Bins',
    imageUrl: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'ip-02',
    name: 'Commercial Janitorial Housekeeping Trolleys',
    category: 'Institutional Products',
    description: 'Multi-tiered impact-resistant janitorial service carts equipped with refuse vinyl bags, tool clips, and double-bucket wringer combinations.',
    applications: ['Housekeeping teams', 'Hospital wings', 'Corporate campuses'],
    packaging: 'Single Flat-Packed Assembled Units',
    imageUrl: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'ip-03',
    name: 'Heavy-Duty Mop Buckets with Down-Press Wringer',
    category: 'Institutional Products',
    description: 'Ergonomic high-durability polypropylene mopping system with gear-driven down-press wringer on non-marking swivel casters.',
    applications: ['Floor cleaning staff', 'Warehouse maintenance', 'Schools'],
    packaging: '20L & 32L Capacities',
    imageUrl: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80',
  },
];
