export interface IndustryItem {
  id: string;
  name: string;
  slug: string;
  headline: string;
  description: string;
  keyDemands: string[];
  imageUrl: string;
}

export const INDUSTRIES_SERVED: IndustryItem[] = [
  {
    id: 'corporate-offices',
    name: 'Corporate Offices',
    slug: 'corporate-offices',
    headline: 'High-density corporate workstations and client-facing reception suites.',
    description: 'Providing multi-tenant office complexes and corporate headquarters with uninterrupted washroom hygiene, pantry supplies, desk-side upkeep, and scheduled specialist sanitisation.',
    keyDemands: ['Continuous washroom consumables replenishment', 'Quiet daily housekeeping protocols', 'Executive pantry supplies and vending premixes'],
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'it-ites',
    name: 'IT & ITES Campuses',
    slug: 'it-ites',
    headline: '24/7 technical campuses and tech park operational environments.',
    description: 'Supporting high-uptime operational models with shift-aligned housekeeping, server room climate and dust controls, electrostatic prevention matting, and bulk packaging for hardware dispatches.',
    keyDemands: ['Round-the-clock shift-support maintenance', 'Anti-static rubber matting', 'Odorless non-disruptive pest management'],
    imageUrl: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing & Industrial',
    slug: 'manufacturing',
    headline: 'Production shop floors, engineering facilities, and assembly units.',
    description: 'Supplying heavy-duty alkaline degreasers, absorbent spill control, ergonomic anti-fatigue floor mats, pallet stretch films, and scheduled mechanical maintenance support.',
    keyDemands: ['Industrial degreasing chemicals', 'Operator anti-fatigue matting', 'BOPP packaging and stretch wrap rolls'],
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'pharmaceutical',
    name: 'Pharmaceutical & Healthcare',
    slug: 'pharmaceutical',
    headline: 'Cleanrooms, diagnostics laboratories, and clinical facilities.',
    description: 'Strict hygiene supplies meeting stringent sanitisation standards, hospital-grade disinfectant concentrates, touchless dispenser solutions, and segregated bio-waste containers.',
    keyDemands: ['Sterile surface disinfectant chemistry', 'Touchless hand hygiene systems', 'Municipal & bio-waste colour segregation bins'],
    imageUrl: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'retail',
    name: 'Retail & Commercial Complexes',
    slug: 'retail',
    headline: 'High-footfall shopping malls, retail showrooms, and customer centers.',
    description: 'Maintaining pristine visual appearance across polished floors, entrances, and washrooms with high-capacity tissue dispensers, heavy-duty walk-off runners, and automated cleaning machinery.',
    keyDemands: ['High-capacity Jumbo Roll Tissue systems', 'Heavy-traffic dirt-barrier entrance mats', 'Rapid spill management and floor scrubbers'],
    imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'hospitality',
    name: 'Hospitality & Hotels',
    slug: 'hospitality',
    headline: 'Hotels, serviced residences, and banquet venues.',
    description: 'Delivering guest-ready excellence with premium linen-safe washing detergents, floor crystal polishers, deep upholstery extraction cleaning, and early morning dairy crate deliveries.',
    keyDemands: ['Fresh daily institutional dairy deliveries', 'Carpet and upholstery deep extraction', 'Neutral surface cleaners safe on marble/granite'],
    imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'institutional-facilities',
    name: 'Institutional Facilities & Campuses',
    slug: 'institutional-facilities',
    headline: 'Educational institutions, research centers, and public authorities.',
    description: 'Dependable, documented supply agreements and tender fulfillment covering janitorial hardware, bulk disinfection chemicals, facility repair staff, and landscape maintenance.',
    keyDemands: ['Documented tender and compliance fulfillment', 'Segregated high-capacity waste infrastructure', 'Preventive electrical and civil maintenance'],
    imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80',
  },
];
