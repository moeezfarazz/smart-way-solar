export interface LocationItem {
  id: string;
  name: string;
  slug: string;
  abbreviation: string;
  heroImage: string;
  solarHours: number;
  avgMonthlySavings: string;
  stateIncentive: string;
  netMetering: string;
  description: string;
  topUtilities: string[];
  keyBenefits: string[];
}

export interface PricingPlan {
  id: string;
  title: string;
  subtitle: string;
  badge?: string;
  description: string;
  bulletPoints: string[];
  upfrontCost: string;
  ownership: string;
  monthlyPayment: string;
  paymentTerms: string;
  maintenanceIncluded: boolean;
  monitoringIncluded: boolean;
  warranty: string;
  ctaText: string;
}

export interface SolutionItem {
  id: string;
  title: string;
  slug: string;
  tagline: string;
  description: string;
  image: string;
  features: string[];
  specs: { label: string; value: string }[];
}

export interface SiteConfig {
  companyName: string;
  legalCompanyName: string;
  tagline: string;
  phone: string;
  phoneLink: string;
  email: string;
  address: string;
  FACEBOOK_URL: string;
  // Founder photo URL: Keep null / empty by default as requested.
  // The user can specify an image path or URL here later to show their own photograph.
  founderPhotoUrl: string | null;
  locations: LocationItem[];
  pricingPlans: PricingPlan[];
  solutions: SolutionItem[];
  testimonials: {
    quote: string;
    author: string;
    location: string;
    system: string;
    highlight: string;
  }[];
  faqs: {
    question: string;
    answer: string;
    category?: string;
  }[];
}

export const SITE_CONFIG: SiteConfig = {
  companyName: 'Smart Way Solar',
  legalCompanyName: 'Smart Way Solar LLC',
  tagline: 'Whole-Home Solar, Battery Storage & Energy Systems',
  phone: '1 (331) 240-1092',
  phoneLink: 'tel:+13312401092',
  email: 'contact@smartwaysolar.com',
  address: '100 Solar Way, Suite 400, Philadelphia, PA 19104',
  FACEBOOK_URL: 'https://www.facebook.com/smartwaysolar',
  // Preserved empty photo space for user to upload their own photograph later:
  founderPhotoUrl: null,

  // EXACT EIGHT LOCATIONS IN REQUIRED ORDER:
  // 1. Pennsylvania, 2. Maryland, 3. District of Columbia, 4. Virginia, 5. New York, 6. California, 7. New Jersey, 8. Texas
  locations: [
    {
      id: 'pennsylvania',
      name: 'Pennsylvania',
      slug: 'pennsylvania',
      abbreviation: 'PA',
      heroImage: '/assets/media/solar-panels-roof.webp',
      solarHours: 4.2,
      avgMonthlySavings: '$140 - $220',
      stateIncentive: 'Solar Alternative Energy Credits (SRECs) & Local Net Metering',
      netMetering: '1-to-1 credit on standard residential retail rate',
      description: 'Pennsylvania homeowners face steady utility rate increases. Switch to clean rooftop solar with Smart Way Solar and lock in predictable, lower power costs.',
      topUtilities: ['PECO', 'PPL Electric Utilities', 'Duquesne Light', 'FirstEnergy / Met-Ed'],
      keyBenefits: [
        'Earn ongoing income through PA Solar Renewable Energy Credits (SRECs)',
        'Full retail net metering for excess solar generation',
        '30% Federal Investment Tax Credit applicable to all owned systems',
        'Protection against recurring winter peak energy hikes'
      ]
    },
    {
      id: 'maryland',
      name: 'Maryland',
      slug: 'maryland',
      abbreviation: 'MD',
      heroImage: '/assets/media/pricing-hero-house.webp',
      solarHours: 4.6,
      avgMonthlySavings: '$150 - $250',
      stateIncentive: 'Maryland Clean Energy SRECs, EmPOWER MD programs & 100% Tax Exemptions',
      netMetering: 'Full 1-to-1 retail net energy metering (BGE, Pepco, Delmarva)',
      description: 'Maryland pairs high standard retail electricity prices with comprehensive clean energy incentives. Benefit from 1-to-1 net metering, solar renewable energy certificates (SRECs), and complete sales and property tax exemptions.',
      topUtilities: ['BGE (Baltimore Gas and Electric)', 'Pepco Maryland', 'Delmarva Power', 'Potomac Edison'],
      keyBenefits: [
        'Earn ongoing revenue through Maryland Solar Renewable Energy Certificates (SRECs)',
        '1-to-1 retail net energy metering credit for solar sent back to the grid',
        '100% Maryland state sales tax exemption on all solar equipment and storage',
        '100% real property tax exemption on solar added value to your home',
        '30% Federal Investment Tax Credit applicable to all purchased or financed systems'
      ]
    },
    {
      id: 'district-of-columbia',
      name: 'District of Columbia',
      slug: 'district-of-columbia',
      abbreviation: 'DC',
      heroImage: '/assets/media/modern-home-dusk.webp',
      solarHours: 4.6,
      avgMonthlySavings: '$210 - $340',
      stateIncentive: 'Highest SREC values in the nation + Solar for All programs',
      netMetering: 'Full retail credit via Pepco',
      description: 'Washington DC offers the country’s most lucrative SREC market. District property owners can dramatically offset electric bills while generating valuable quarterly credits.',
      topUtilities: ['Pepco (Potomac Electric Power Company)'],
      keyBenefits: [
        'National-leading SREC market yields substantial annual dividend credits',
        'Robust 1-to-1 net metering rules with Pepco',
        '30% Federal clean energy tax credit for purchased or financed systems',
        'Turn historic townhouse rooftops into productive clean energy hubs'
      ]
    },
    {
      id: 'virginia',
      name: 'Virginia',
      slug: 'virginia',
      abbreviation: 'VA',
      heroImage: '/assets/media/aerial-sunlit-roof.webp',
      solarHours: 4.7,
      avgMonthlySavings: '$130 - $210',
      stateIncentive: 'Virginia Clean Economy Act (VCEA) SRECs & Local Property Tax Exemptions',
      netMetering: 'Dominion Energy & Appalachian Power Net Metering',
      description: 'From Northern Virginia to Richmond and Hampton Roads, Virginia homeowners are taking control of soaring cooling bills with whole-home solar and backup storage.',
      topUtilities: ['Dominion Energy', 'Appalachian Power (AEP)', 'NOVEC'],
      keyBenefits: [
        'Participate in Virginia’s expanding SREC compliance market',
        'Local property tax exemptions for clean energy capital improvements',
        'Enhanced energy resilience against severe storm grid disruptions',
        '30% Federal tax credit applied directly to purchase or loan balance'
      ]
    },
    {
      id: 'new-york',
      name: 'New York',
      slug: 'new-york',
      abbreviation: 'NY',
      heroImage: '/assets/media/pricing-aerial-white-house.webp',
      solarHours: 4.3,
      avgMonthlySavings: '$170 - $280',
      stateIncentive: 'NY-Sun Megawatt Block Incentive + $5,000 NY State Tax Credit',
      netMetering: 'Standard VDER and Net Energy Metering (NEM)',
      description: 'New York State pairs aggressive clean energy grants with high utility tariffs. Smart Way Solar delivers turnkey installations from Long Island and NYC to Westchester and Upstate.',
      topUtilities: ['Con Edison', 'PSEG Long Island', 'National Grid NY', 'NYSEG', 'Central Hudson'],
      keyBenefits: [
        'Direct cash rebate deducted upfront via NY-Sun program',
        'Up to $5,000 direct personal state income tax credit',
        'Zero sales tax on solar panel and inverter equipment statewide',
        '15-year real property tax exemption on solar added value'
      ]
    },
    {
      id: 'california',
      name: 'California',
      slug: 'california',
      abbreviation: 'CA',
      heroImage: '/assets/media/modern-house-exterior.webp',
      solarHours: 5.6,
      avgMonthlySavings: '$220 - $380',
      stateIncentive: 'SGIP (Self-Generation Incentive Program) battery storage rebates',
      netMetering: 'Net Billing Tariff (NEM 3.0) optimized with battery storage',
      description: 'California’s abundance of sunshine combined with high peak rates makes paired solar and battery storage the ideal defense against escalating time-of-use charges.',
      topUtilities: ['PG&E', 'SCE (Southern California Edison)', 'SDG&E'],
      keyBenefits: [
        'Maximize NEM 3.0 export value using intelligent battery discharge',
        'State Self-Generation Incentive Program (SGIP) rebates for home batteries',
        'Complete blackout protection during wildfire PSPS public safety power shutoffs',
        'Property tax exclusion for active solar energy systems'
      ]
    },
    {
      id: 'new-jersey',
      name: 'New Jersey',
      slug: 'new-jersey',
      abbreviation: 'NJ',
      heroImage: '/assets/media/solar-sunset-roof.webp',
      solarHours: 4.5,
      avgMonthlySavings: '$160 - $260',
      stateIncentive: 'Successor Solar Incentive (SuSI) program with guaranteed 15-year SREC-II pricing',
      netMetering: 'Full 1-to-1 retail net metering with PSE&G, JCP&L, and ACE',
      description: 'New Jersey has long been a national leader in solar incentives. Homeowners earn guaranteed fixed payments for every megawatt-hour produced for 15 years.',
      topUtilities: ['PSE&G', 'JCP&L (FirstEnergy)', 'Atlantic City Electric (ACE)', 'Rockland Electric'],
      keyBenefits: [
        'Guaranteed 15-year SuSI (SREC-II) certificate payments per MWh generated',
        '100% sales tax exemption on all solar materials and labor',
        '100% property tax exemption on home solar value increase',
        'True 1-to-1 net energy metering across all major NJ electric utilities'
      ]
    },
    {
      id: 'texas',
      name: 'Texas',
      slug: 'texas',
      abbreviation: 'TX',
      heroImage: '/assets/aistudio/Gemini_Generated_Image_ro5l8cro5l8cro5l_56346b7e.jpg',
      solarHours: 5.2,
      avgMonthlySavings: '$150 - $270',
      stateIncentive: 'Local utility rebates (Oncor, CenterPoint, Austin Energy) & 100% Property Tax Exemption',
      netMetering: 'Competitive retail electric provider (REP) solar buyback plans',
      description: 'The ERCOT grid has experienced extreme summer heatwaves and severe winter chills. Protect your home with smart solar and battery backup in the Lone Star State.',
      topUtilities: ['Oncor Electric Delivery', 'CenterPoint Energy', 'Austin Energy', 'CPS Energy', 'AEP Texas'],
      keyBenefits: [
        'Complete energy independence from grid instability and blackout threats',
        '100% Texas property tax exemption on the added value of solar systems',
        'Municipal and cooperative rebates up to several thousand dollars',
        'Select from top solar buyback plans in deregulated retail electricity markets'
      ]
    }
  ],

  // EXACTLY THREE PRICING PLANS (NO PREPAID PLAN)
  pricingPlans: [
    {
      id: 'ez-plan',
      title: 'EZ Plan',
      subtitle: 'Lowest cost, immediate savings',
      badge: 'Most Popular',
      description: '25-year lease or PPA subscription plan with no upfront payment. Start saving right away without capital outlay.',
      bulletPoints: [
        'Lowest cost, immediate savings',
        'No upfront payment',
        'Predictable monthly payments',
        'Full 25-year warranty & maintenance included',
        'Professional monitoring & guaranteed production'
      ],
      upfrontCost: '$0 down*',
      ownership: 'Smart Way Solar',
      monthlyPayment: 'Low predictable lease payment',
      paymentTerms: 'Monthly subscription (transferable if moving)',
      maintenanceIncluded: true,
      monitoringIncluded: true,
      warranty: '25-Year Complete System & Roof Warranty',
      ctaText: 'Get a quote'
    },
    {
      id: 'finance-to-own',
      title: 'Finance-to-own',
      subtitle: 'Ownership with flexible terms',
      badge: 'Max ROI',
      description: 'Flexible terms and comprehensive warranty coverage. Own your system and retain all federal and state solar incentives.',
      bulletPoints: [
        'Own your system with no upfront cost',
        'Fixed payments that never increase',
        '5–25 year flexible financing terms',
        'Eligible for 30% Federal Solar Tax Credit',
        'Keep all local SRECs and utility incentives'
      ],
      upfrontCost: '$0 down*',
      ownership: 'You (100% Homeowner)',
      monthlyPayment: 'Fixed monthly financing payment',
      paymentTerms: '5 – 25 years flexible terms',
      maintenanceIncluded: true,
      monitoringIncluded: true,
      warranty: '25-Year Equipment & Workmanship Warranty',
      ctaText: 'Get a quote'
    },
    {
      id: 'direct-purchase',
      title: 'Direct Purchase',
      subtitle: 'Maximum lifetime energy savings',
      badge: 'Zero Monthly Payments',
      description: 'Perfect for those seeking a fully warrantied, independent system with zero recurring solar loan or lease payments.',
      bulletPoints: [
        'Own your system from the day it’s installed',
        'Zero monthly payments or terms',
        'Full system cost due upfront with instant equity',
        'Directly receive the full 30% Federal Tax Credit',
        'Fastest payback and highest total 25-year savings'
      ],
      upfrontCost: 'Full system cost upfront',
      ownership: 'You (100% Homeowner)',
      monthlyPayment: 'None ($0/mo forever)',
      paymentTerms: 'None (Paid in full at activation)',
      maintenanceIncluded: true,
      monitoringIncluded: true,
      warranty: '25-Year Equipment & Workmanship Warranty',
      ctaText: 'Get a quote'
    }
  ],

  // SOLUTIONS (Using verified local reference assets)
  solutions: [
    {
      id: 'solar-panels',
      title: 'Solar Panels',
      slug: 'solar-panels',
      tagline: 'High-Efficiency All-Black Tier-1 Monocrystalline Modules',
      description: 'Sleek, low-profile solar panels engineered for superior energy production in both bright sun and low-light conditions. Backed by industry-leading 25-year power and product guarantees.',
      image: '/assets/media/solar-panels-roof.webp',
      features: [
        'All-black aesthetic blends cleanly into any roof line',
        '21.8%+ cell efficiency with bifacial and half-cut cell technology',
        'Rigid snow load rating (up to 5400 Pa) and 130 mph wind certification',
        'Linear 25-year output warranty guaranteeing at least 85% generation at year 25'
      ],
      specs: [
        { label: 'Module Efficiency', value: 'Up to 22.3%' },
        { label: 'Power Output', value: '400W - 440W per panel' },
        { label: 'Warranty', value: '25-Year Product & Performance' },
        { label: 'Cell Type', value: 'Monocrystalline N-Type TOPCon' }
      ]
    },
    {
      id: 'battery-backup',
      title: 'Battery Backup',
      slug: 'battery-backup',
      tagline: 'Seamless Whole-Home Backup & Intelligent Energy Storage',
      description: 'Never worry about power outages or fluctuating utility peak rates again. Store surplus solar power during daylight hours and power your essential circuits through stormy nights.',
      image: '/assets/media/battery-backup.webp',
      features: [
        'Instant sub-second switchover during blackouts without flicker',
        'Scalable storage capacity from 10 kWh to 40+ kWh',
        'Safe Lithium Iron Phosphate (LFP) chemistry for thermal stability',
        'Smart mobile app scheduling to avoid high utility time-of-use tariffs'
      ],
      specs: [
        { label: 'Usable Capacity', value: '13.5 kWh - 27 kWh expandable' },
        { label: 'Continuous Output', value: '5.0 kW - 11.5 kW' },
        { label: 'Operating Temp', value: '-4°F to 122°F' },
        { label: 'Warranty', value: '10-Year Unlimited Cycle Guarantee' }
      ]
    },
    {
      id: 'ev-chargers',
      title: 'EV Chargers',
      slug: 'ev-chargers',
      tagline: 'Level-2 Fast Residential Vehicle Charging Powered by the Sun',
      description: 'Charge your electric vehicle up to 8x faster right from your driveway. Seamlessly integrate your EV charger with your rooftop solar array to drive 100% on sunshine.',
      image: '/assets/media/ev-charging-driveway.webp',
      features: [
        'Up to 48A (11.5 kW) Level 2 high-speed residential charging',
        'Direct "Solar Only" smart charging mode to fuel your vehicle with zero grid cost',
        'Weatherproof NEMA 4 rating for indoor or outdoor driveway mounting',
        'Universal J1772 and NACS (Tesla) connector compatibility'
      ],
      specs: [
        { label: 'Max Output', value: '48A / 11.5 kW (240V)' },
        { label: 'Cable Length', value: '25 ft heavy-duty all-weather' },
        { label: 'Connectivity', value: 'Wi-Fi, Bluetooth & Cellular' },
        { label: 'Warranty', value: '3-Year Replacement Guarantee' }
      ]
    },
    {
      id: 'smart-electrical-panels',
      title: 'Smart Electrical Panels',
      slug: 'smart-electrical-panels',
      tagline: 'Next-Gen Circuit-Level Energy Control & Load Shedding',
      description: 'Upgrade your home’s electrical foundation to handle modern electrification. Control every breaker individually from your phone and extend battery backup duration during emergencies.',
      image: '/assets/media/smart-energy-app.webp',
      features: [
        'Real-time circuit-level consumption and generation telemetry',
        'Automatic smart load shedding during grid outages to double battery life',
        'Avoid expensive utility service drop upgrades when adding heat pumps or EV chargers',
        'Intuitive iOS & Android app control with instant overload notifications'
      ],
      specs: [
        { label: 'Service Rating', value: '200A or 225A Main Breaker' },
        { label: 'Controllable Circuits', value: 'Up to 32 Breakers' },
        { label: 'Switching Speed', value: 'Sub-cycle solid-state control' },
        { label: 'Enclosure', value: 'NEMA 3R Indoor/Outdoor' }
      ]
    },
    {
      id: 'microinverters',
      title: 'Microinverters',
      slug: 'microinverters',
      tagline: 'Panel-Level Power Optimization & Inherent Safety',
      description: 'Convert DC power to AC directly underneath each individual solar panel. Shading on one panel won’t drag down the rest of your system, ensuring maximum year-round kilowatt-hours.',
      image: '/assets/media/microinverter-hardware.webp',
      features: [
        'Independent panel operation eliminates single points of system failure',
        'Low-voltage AC rooftop wiring complies with rapid shutdown safety codes',
        'Burst mode captures early morning and late twilight solar irradiance',
        'Individual panel reporting in the Smart Way Solar monitoring mobile app'
      ],
      specs: [
        { label: 'Peak Efficiency', value: '97.6% CEC Weighted' },
        { label: 'Grid Voltage', value: '240 VAC Split-Phase' },
        { label: 'Warranty', value: '25-Year Manufacturer Warranty' },
        { label: 'Compliance', value: 'NEC 2017/2020/2023 Rapid Shutdown' }
      ]
    },
    {
      id: 'whole-home-solar',
      title: 'Whole-Home Solar',
      slug: 'whole-home-solar',
      tagline: 'The Complete Ecosystem: Generation, Storage & Management',
      description: 'Unify solar generation, high-capacity battery storage, smart electric panels, and EV charging into a single coordinated home energy ecosystem with unified monitoring and support.',
      image: '/assets/media/whole-home-diagram.webp',
      features: [
        'Single point of contact for engineering, permitting, installation, and warranty',
        'Intelligent software matches solar production directly with household consumption',
        'True energy resilience against grid instability, brownouts, and storms',
        'Significant reduction or total elimination of monthly electric bills'
      ],
      specs: [
        { label: 'Typical System Size', value: '8 kW - 20 kW DC' },
        { label: 'Battery Capacity', value: '10 - 30+ kWh' },
        { label: 'System Monitoring', value: 'Unified Smart Way Energy Portal' },
        { label: 'Coverage', value: 'Complete 25-Year Home Warranty' }
      ]
    }
  ],

  // EDITABLE CUSTOMER EXPERIENCES (Realistic, transparent feedback)
  testimonials: [
    {
      quote: 'Smart Way Solar made our transition so seamless. They walked through the finance and purchase options without any high-pressure sales tactics. Our monthly electric bill dropped from $290 to practically zero.',
      author: 'David & Sarah M.',
      location: 'Chester County, PA',
      system: '10.8 kW Solar + Enphase Microinverters',
      highlight: '92% Reduction in Grid Electricity'
    },
    {
      quote: 'When the severe winter storm knocked out power for two days, our battery kicked on immediately. The heat stayed on, the refrigerator stayed cold, and the neighbors came over to charge their phones.',
      author: 'Marcus K.',
      location: 'Montgomery County, MD',
      system: '12.4 kW Solar + 20 kWh Battery Storage',
      highlight: 'Continuous Backup During Outage'
    },
    {
      quote: 'Reviewing our options was refreshingly honest. They explained the differences between leasing and direct purchase clearly so we could pick what made sense for our retirement finances.',
      author: 'Elena R.',
      location: 'Bergen County, NJ',
      system: '8.4 kW EZ Plan Solar',
      highlight: 'Transparent Pricing & No Surprises'
    }
  ],

  // FAQS
  faqs: [
    {
      question: 'What is covered under your 25-year system warranty?',
      answer: 'Our comprehensive 25-year coverage protects your solar panels, microinverters, roof penetrations, and installation workmanship. If any component underperforms or requires service, our in-house certified technicians handle repairs and replacements at no cost to you.'
    },
    {
      question: 'Can anyone get a Smart Way Solar system for $0 down?',
      answer: 'Yes! Both our EZ Plan (lease/PPA) and Finance-to-own plans offer qualified homeowners a $0-down starting option. You can begin generating solar energy and lowering your monthly expenses without paying out-of-pocket setup costs.'
    },
    {
      question: 'How do solar panels perform in cloudy or snowy weather?',
      answer: 'Modern tier-1 monocrystalline panels produce electricity from ambient daylight even on overcast days. Because panels are installed at a slope and generate a small amount of heat when operating, snow typically slides off quickly.'
    },
    {
      question: 'What happens if I decide to move or sell my home?',
      answer: 'If you own or finance your system, studies show that solar installations increase home resale value and sell faster. If you chose our EZ Plan, the predictable monthly agreement is easily transferred to the new homeowner through our dedicated transfer coordinator.'
    },
    {
      question: 'How much can I realistically save by switching to solar?',
      answer: 'Savings depend on your roof orientation, local utility tariffs, and household consumption. Many homeowners save between $1,200 and $3,000+ each year on electricity costs, locking in predictable energy rates while utility prices continue to rise.'
    },
    {
      question: 'How long does the entire installation process take?',
      answer: 'The physical installation of solar panels on your roof typically takes only 1 to 2 days. The complete timeline—including site assessment, custom engineering designs, municipal permitting, and utility permission to operate (PTO)—generally spans 4 to 8 weeks.'
    }
  ]
};
