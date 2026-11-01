export interface ServiceItem {
  id: string;
  name: string;
  slug: string;
  overview: string;
  scopeOfService: string[];
  businessBenefits: string[];
  imageUrl: string;
}

export const SERVICES_CATALOG: ServiceItem[] = [
  {
    id: 'housekeeping',
    name: 'Housekeeping Services',
    slug: 'housekeeping',
    overview: 'Structured, SLA-governed routine and periodic housekeeping management deployed across corporate offices, industrial shop floors, and commercial institutions.',
    scopeOfService: [
      'Daily scheduled dusting, sanitisation, and floor damp-mopping across all zones',
      'Continuous washroom hygiene upkeep, dispenser replenishment, and odor management',
      'High-level architectural dusting, glass partition buffing, and facade interior wiping',
      'Waste sorting, desk-side bin clearances, and central refuse compaction handover',
      'Audited janitorial checklists with supervisor daily shift logs'
    ],
    businessBenefits: [
      'Pristine workplace hygiene directly supporting staff health and attendance',
      'Measurable SLA governance with trained, uniformed, and background-verified personnel',
      'Consolidated supply replenishment bundled seamlessly with labor deployment'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'pest-control',
    name: 'Pest Control Solutions',
    slug: 'pest-control',
    overview: 'Targeted, compliant Integrated Pest Management (IPM) protocols formulated specifically for non-disruptive application in commercial environments.',
    scopeOfService: [
      'Gel-based odorless roach eradication for pantries, server rooms, and dining areas',
      'Rodent prevention bait stations, ultrasonic barriers, and entry sealing audits',
      'Subterranean anti-termite chemical treatments with extended warranty coverage',
      'Insect control through fogging, perimeter misting, and UV insect light traps',
      'Comprehensive MSDS documentation and audit-ready service log reports'
    ],
    businessBenefits: [
      'Protection of electrical cabling, data assets, and stored materials from rodent damage',
      'Full compliance with health authorities and corporate tenant standards',
      'Odorless, non-intrusive treatments allowing business operations to continue uninterrupted'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1584744982491-665216d95f8b?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'electrical-maintenance',
    name: 'Electrical Maintenance',
    slug: 'electrical-maintenance',
    overview: 'Preventive and breakdown maintenance for commercial low-voltage infrastructure, distribution boards, lighting circuits, and emergency power lines.',
    scopeOfService: [
      'Distribution board (DB) thermal scanning, load balancing, and terminal re-torqueing',
      'LED retrofit, task lighting repair, and decorative fixture replacements',
      'UPS room circuit inspection, earthing pit resistance measurement, and DB dressing',
      'Emergency light functional audits and battery changeover testing',
      'Rapid emergency breakdown rectification by certified electricians'
    ],
    businessBenefits: [
      'Mitigates fire hazard risks arising from loose electrical terminations or overheating',
      'Guarantees electrical code compliance and safety certifications for building insurance',
      'Minimises unscheduled productivity downtimes through scheduled preventive upkeep'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'plumbing',
    name: 'Plumbing Services',
    slug: 'plumbing',
    overview: 'End-to-end commercial plumbing maintenance, sanitary fixture repairs, water pump upkeep, and water management diagnostics.',
    scopeOfService: [
      'Immediate leakage rectification across concealed pipe runs and sanitary ware',
      'Sensor tap, flush valve, and pressure booster pump servicing',
      'Drain line clearing, grease trap cleaning, and sewer line declogging',
      'Overhead and underground water tank inspection, cleaning, and level sensor upkeep',
      'Restroom water conservation valve calibration and aerator maintenance'
    ],
    businessBenefits: [
      'Eliminates wasteful water losses and curtails utility overhead expenses',
      'Prevents structural dampness and unsightly seepage on ceilings or adjacent walls',
      'Ensures continuous, hygienic water supply across all washroom and cafeteria points'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'painting',
    name: 'Painting & Surface Maintenance',
    slug: 'painting',
    overview: 'Commercial repainting, epoxy industrial floor coatings, protective wall finishes, and exterior architectural maintenance.',
    scopeOfService: [
      'Interior low-VOC premium acrylic emulsion application for office interiors',
      'Epoxy floor coating, polyurethane floor sealers, and anti-skid ramp coatings',
      'Metal primer application, enamel coatings on structural beams, railings, and gates',
      'Moisture-barrier waterproofing treatments and crack bridging prior to painting',
      'Scheduled weekend and after-hours execution with complete floor masking'
    ],
    businessBenefits: [
      'Maintains pristine corporate aesthetics that project brand professionalism to visitors',
      'Protects civil concrete substrates from moisture damage, mold, and chemical wear',
      'Zero odor disruptions during workdays via low-VOC formulations and night shifts'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'cleaning-services',
    name: 'Specialist Cleaning Services',
    slug: 'cleaning-services',
    overview: 'Intensive deep-cleaning interventions utilising single-disc scrubbers, steam sanitisation, and high-suction extraction machinery.',
    scopeOfService: [
      'Commercial carpet shampooing and industrial hot-water extraction',
      'Fabric workstation divider, chair upholstery, and leather sofa deep-conditioning',
      'Rotary floor scrubbing, crystal polishing, and stone floor buffing (Granite/Marble)',
      'High-pressure washing of parking basements, concrete driveways, and loading docks',
      'Post-construction and handover deep cleans before new office tenant occupation'
    ],
    businessBenefits: [
      'Significantly prolongs the operating lifecycle of expensive commercial carpets and seating',
      'Extracts deeply trapped dust mites, allergens, and odors from textile surfaces',
      'Restores dull, high-traffic stone and vitrified floors to factory reflectivity'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'plants-landscaping',
    name: 'Plants & Landscaping Solutions',
    slug: 'plants-landscaping',
    overview: 'Interior biophilic plant installations, executive desk plant rotations, campus gardens, and regular horticulture upkeep.',
    scopeOfService: [
      'Indoor potted plant placement matched to ambient light and air-purification ratings',
      'Scheduled watering, leaf wiping, organic feeding, and pest treatment schedules',
      'Bi-weekly replacement rotation of unhealthy or tired plants to maintain aesthetics',
      'Exterior campus lawn mowing, shrub pruning, weeding, and seasonal flower beds',
      'Automated drip irrigation system checks and soil aeration'
    ],
    businessBenefits: [
      'Enhances indoor air quality, humidity balance, and workplace mental well-being',
      'Imparts an inviting, eco-conscious aesthetic to reception lobbies and open floor plans',
      'Zero maintenance burden on internal administrative staff through managed rotation contracts'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1463936575829-25148e1db1b8?auto=format&fit=crop&w=800&q=80',
  },
];
