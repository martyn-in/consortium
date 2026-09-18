import { 
  FileText, 
  PanelsTopLeft, 
  Box, 
  Gamepad2, 
  Camera, 
  Search, 
  Compass, 
  Clapperboard, 
  Plane, 
  DraftingCompass 
} from 'lucide-react';

// Authentic Real Event Photographs
import imgPaperPresentation from '../assets/real_paper_presentation.jpg';
import imgPosterPresentation from '../assets/real_poster_presentation.jpg';
import imgProjectExpo from '../assets/real_project_expo.jpg';
import imgLanGaming from '../assets/real_lan_gaming.jpg';
import imgPhotography from '../assets/real_photography.jpg';
import imgDeathMystery from '../assets/real_death_mystery.jpg';
import imgTreasureHunt from '../assets/real_treasure_hunt.jpg';
import imgShortFilms from '../assets/real_short_films.jpg';
import imgFlightSim from '../assets/real_flight_sim.jpg';
import imgBridgeMockup from '../assets/real_bridge_mockup.jpg';

/**
 * OFFICIAL CONSORTIUM 2026 10-EVENT CANONICAL CATALOG
 * Strictly Ordered:
 * 01 — Paper Presentation
 * 02 — Poster Presentations
 * 03 — Project Expo
 * 04 — LAN Gaming
 * 05 — CINEVO — Photography
 * 06 — Magic Witch
 * 07 — Treasure Hunt
 * 08 — CINEVO — Short Films
 * 09 — Flight Simulator
 * 10 — Bridge Mockup
 */

export const categories = [
  'All Events',
  'Academic',
  'Creative',
  'Experience'
];

export const eventsList = [
  {
    id: 'paper-presentation',
    number: '01',
    displayNumber: '01',
    title: 'Paper Presentation',
    shortTitle: 'Paper Presentation',
    type: 'RESEARCH / SYMPOSIUM',
    category: 'Academic',
    department: 'Inter-Departmental Technical Board (Aero, CSE, IT, EEE, ECE, Mech, Civil)',
    tagline: 'Research. Present. Challenge the ordinary.',
    description: 'A prestigious national forum for engineering scholars to defend original technical papers, disruptive findings, and breakthrough concepts before a distinguished panel of academicians and industry researchers.',
    image: imgPaperPresentation,
    icon: FileText,
    accentColor: 'cyan',
    rules: 'Original technical research paper required in IEEE format (max 6 pages). 10-minute presentation followed by a 5-minute defense before the academic evaluation jury. Plagiarism must be strictly under 15%.',
    teamSize: 'Individual or Team of 2',
    venue: 'IARE Campus, Hyderabad',
    registrationEnabled: true,
    isSpecialPaperFlow: true
  },
  {
    id: 'poster-presentations',
    number: '02',
    displayNumber: '02',
    title: 'Poster Presentation',
    shortTitle: 'Poster Presentation',
    type: 'ECE / VISUAL RESEARCH',
    category: 'Academic',
    department: 'Department of Electronics & Communication Engineering (ECE)',
    tagline: 'Visualize an idea. Explain the technology. Make an impact.',
    description: 'Present your original research or innovative concept as a high-impact A3 poster before an expert jury. Open to all branches and years — translate complex technical ideas into clear, compelling visual narratives and defend your work in a focused 2–3 minute presentation.',
    image: imgPosterPresentation,
    icon: PanelsTopLeft,
    accentColor: 'blue',
    rules: 'Poster must be A3 size (oil prints preferred). Max team of 2. Each team gets 2–3 minutes to present, followed by a Q&A. Original work only — plagiarism strictly prohibited. Evaluation based on originality, technical content, creativity, relevance, presentation, and Q&A response.',
    teamSize: 'Individual or Team of 2',
    venue: 'IARE Campus, Hyderabad',
    registrationEnabled: true,
    isSpecialPaperFlow: false,
    isSpecialPosterFlow: true
  },
  {
    id: 'project-expo',
    number: '03',
    displayNumber: '03',
    title: 'Project Expo',
    shortTitle: 'Project Expo',
    type: 'TECH / EXHIBITION',
    category: 'Academic',
    department: 'Department of Electronics & Communication Engineering (ECE)',
    tagline: 'Build it. Demonstrate it. Make it real.',
    description: 'The premier innovation pavilion of Consortium 2026. Live interactive demonstration of working hardware prototypes, embedded robotics, autonomous IoT systems, and production-ready engineering solutions.',
    image: imgProjectExpo,
    icon: Box,
    accentColor: 'cyan',
    rules: 'Working physical prototype or deployed software demonstration is mandatory. Open to IoT, robotics, AI, and multidisciplinary engineering domains. Power and Wi-Fi will be provided.',
    teamSize: 'Team of 2 to 4',
    venue: 'IARE Campus, Hyderabad',
    registrationEnabled: true,
    isSpecialPaperFlow: false
  },
  {
    id: 'lan-gaming',
    number: '04',
    displayNumber: '04',
    title: 'LAN Gaming',
    shortTitle: 'LAN Gaming',
    type: 'ESPORTS / COMBAT',
    category: 'Experience',
    department: 'Department of Information Technology (IT)',
    tagline: 'Enter the arena. Play for the win.',
    description: 'The ultimate collegiate mobile esports championship featuring Battlegrounds Mobile India (BGMI) and Free Fire Max. Tactical squad warfare, high-pressure clutch plays, and live esports stage showdowns.',
    image: imgLanGaming,
    icon: Gamepad2,
    accentColor: 'violet',
    rules: 'Mobile smartphones only (strictly no emulators, iPads/tablets, or external triggers). Point system based on match placement and elimination score across tournament brackets.',
    teamSize: 'Squad of 4 (Mobile Only)',
    venue: 'IARE Campus, Hyderabad',
    registrationEnabled: true,
    registrationUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScnxJBndJukZZ70fU1Pixf1u_Z1bkjOIuyEsnblpqJ1upNKHw/viewform?usp=header',
    isSpecialPaperFlow: false
  },
  {
    id: 'photography',
    number: '05',
    displayNumber: '05',
    title: 'CINEVO — Photography',
    shortTitle: 'CINEVO',
    type: 'VISUAL / LENS',
    category: 'Creative',
    department: 'Department of Computer Science and Engineering (CSE)',
    tagline: 'Find the frame everyone else missed.',
    description: 'Capture the nocturnal cyber aesthetic, candid technological intensity, human emotion, and vibrant fest spirit of Consortium 2026 through the creative lens of documentary photojournalism.',
    image: imgPhotography,
    icon: Camera,
    accentColor: 'cyan',
    rules: 'Photographs must be captured on-campus during festival days (October 9 & 10, 2026). Minimal color grading allowed; strictly no AI image generation or composite editing.',
    teamSize: 'Individual Photographer',
    venue: 'IARE Campus, Hyderabad',
    registrationEnabled: true,
    registrationUrl: 'https://forms.gle/d8rPJCVxPcf7wgcy8',
    isSpecialPaperFlow: false
  },
  {
    id: 'death-mystery',
    number: '06',
    displayNumber: '06',
    title: 'Magic Witch',
    shortTitle: 'Magic Witch',
    type: 'FORENSICS / THRILLER',
    category: 'Experience',
    department: 'Department of Electrical & Electronics Engineering (EEE)',
    tagline: 'Observe. Connect. Solve the impossible.',
    description: 'An immersive real-time investigative thriller. Examine simulated crime scenes, inspect physical forensics, interrogate role-play witnesses, decode cryptic ciphers, and deduce the perpetrator before time runs out.',
    image: imgDeathMystery,
    icon: Search,
    accentColor: 'magenta',
    rules: 'Timed forensic investigation in staged scenario chambers. Teams must examine physical clues, decode ciphers, and submit a coherent deduction dossier with physical evidence cross-references.',
    teamSize: 'Team of 2 to 4',
    venue: 'IARE Campus, Hyderabad',
    registrationEnabled: true,
    registrationUrl: 'https://forms.gle/BCGLRCbEVwuRBYGi7',
    isSpecialPaperFlow: false
  },
  {
    id: 'treasure-hunt',
    number: '07',
    displayNumber: '07',
    title: 'Treasure Hunt',
    shortTitle: 'Treasure Hunt',
    type: 'EXPEDITION / PUZZLE',
    category: 'Experience',
    department: 'Department of Electrical & Electronics Engineering (EEE)',
    tagline: 'Follow the clues. Beat the clock.',
    description: 'The legendary campus-wide navigation sprint. Solve mathematical riddles, decode GPS waypoints and cryptographic coordinates, find hidden checkpoint tokens, and sprint against the clock.',
    image: imgTreasureHunt,
    icon: Compass,
    accentColor: 'blue',
    rules: 'Multi-stage navigation challenge across 10 acres. Checkpoints must be solved and cleared sequentially. First squad to return with the verified master token wins.',
    teamSize: 'Team of 3 to 4',
    venue: 'IARE Campus, Hyderabad',
    registrationEnabled: true,
    isSpecialPaperFlow: false
  },
  {
    id: 'short-films',
    number: '08',
    displayNumber: '08',
    title: 'CINEVO — Short Films',
    shortTitle: 'CINEVO',
    type: 'CINEMA / STORYTELLING',
    category: 'Creative',
    department: 'Department of Computer Science and Engineering (CSE)',
    tagline: 'Tell a story worth remembering.',
    description: 'Screening and adjudication of original student cinematic shorts, visual documentaries, and creative fiction on the high-definition campus auditorium cinema display with live jury feedback.',
    image: imgShortFilms,
    icon: Clapperboard,
    accentColor: 'magenta',
    rules: 'Maximum runtime of 12 minutes including credits. Original student cinematography, narrative script, and sound design required. Submissions must be 1080p MP4 format.',
    teamSize: 'Crew of 1 to 5',
    venue: 'IARE Campus, Hyderabad',
    registrationEnabled: true,
    registrationUrl: 'https://forms.gle/DBNtqjMA8QpmdW15A',
    isSpecialPaperFlow: false
  },
  {
    id: 'flight-simulator',
    number: '09',
    displayNumber: '09',
    title: 'Flight Simulator',
    shortTitle: 'Flight Simulator',
    type: 'AVIONICS / COCKPIT',
    category: 'Experience',
    department: 'Department of Aeronautical Engineering',
    tagline: 'Take control. Own the skies.',
    description: 'Take command in authentic aeronautical flight simulator rigs. Test piloting mastery across instrument takeoffs, turbulence handling, challenging crosswind runway approaches, and emergency maneuvers.',
    image: imgFlightSim,
    icon: Plane,
    accentColor: 'cyan',
    rules: 'Standardized flight profile and landing evaluation protocol under challenging atmospheric, turbulence, and crosswind runway scenarios in authentic simulation rigs.',
    teamSize: 'Individual Pilot',
    venue: 'IARE Campus, Hyderabad',
    registrationEnabled: true,
    isSpecialPaperFlow: false
  },
  {
    id: 'bridge-mockup',
    number: '10',
    displayNumber: '10',
    title: 'Bridge Mockup',
    shortTitle: 'Bridge Mockup',
    type: 'STRUCTURAL / LOAD TEST',
    category: 'Academic',
    department: 'Department of Civil Engineering',
    tagline: 'Design. Build. Test the limits.',
    description: 'Civil engineering structural showdown. Design, fabricate, and test load-bearing truss bridges using prescribed lightweight materials until destructive hydraulic load failure to prove optimal strength-to-weight.',
    image: imgBridgeMockup,
    icon: DraftingCompass,
    accentColor: 'blue',
    rules: 'Truss bridges must adhere to strict dimensional envelopes, span, and material specifications. Scored by ultimate hydraulic failure load capacity divided by bridge self-weight.',
    teamSize: 'Team of 2 to 3',
    venue: 'IARE Campus, Hyderabad',
    registrationEnabled: true,
    isSpecialPaperFlow: false
  }
];

/**
 * PAPER PRESENTATION DEPARTMENT ORDER
 * Strictly Structured:
 * LEFT COLUMN:
 * 1. AERONAUTICAL ENGINEERING
 * 2. CSE (AI & ML)
 * 3. INFORMATION TECHNOLOGY
 * 4. EEE
 * 
 * RIGHT COLUMN:
 * 1. CSE
 * 2. CSE (DATA SCIENCE)
 * 3. ECE
 * 4. MECHANICAL ENGINEERING
 * 5. CIVIL ENGINEERING
 */
export const paperPresentationDepartments = {
  left: [
    {
      id: 'aero',
      code: 'AERO',
      name: 'Aeronautical Engineering',
      hasOfficialThemes: true,
      themes: [
        'AI-Powered Drones: Transforming Autonomous Flight and Intelligent Aerial Systems',
        'The Future of Space Technology: Innovations, Opportunities and Emerging Trends',
        'Advanced Materials for Aerospace and Engineering Applications: Beyond Conventional Composites',
        'Aerodynamics and Propulsion: Engineering the Next Generation of Flight Future',
        'Defence Technologies: Autonomous Systems, Surveillance and Strategic Innovations',
        'Vāyuśastra: Exploring Ancient Indian Concepts of Aviation, Flight and Aerospace Knowledge'
      ]
    },
    {
      id: 'cse-aiml',
      code: 'CSE (AI & ML)',
      name: 'CSE (AI & ML)',
      hasOfficialThemes: true,
      themes: [
        'Climate-Resilient AI For Smart Agriculture and Food Security',
        'Trustworthy AI for Accessible and Preventive Healthcare',
        'Inclusive Generative AI for Education and Skill Development',
        'Green AI and Sustainable Computing for a Net-Zero Digital Future',
        'GeoAI And Digital Twins for Resilient Cities and Disaster Management',
        'AI For Water, Oceans, Biodiversity, And Ecosystem Intelligence',
        'Human-Centred AI for Social Inclusion, Safety, and Digital Justice',
        'Responsible Autonomous Intelligence for Sustainable Industry and Circular Economy'
      ]
    },
    {
      id: 'it',
      code: 'IT',
      name: 'Information Technology',
      hasOfficialThemes: true,
      themes: [
        'AI-Driven Personalized Learning System',
        'AI-Powered Route Optimization Framework',
        'AI-Powered Chest X-Ray Imaging Analytics for Pneumonia Detection',
        'Automated Clinical Text Extraction System using NLP',
        'AI-Powered Career Path Recommendation Framework',
        'Robust Object Detection in Challenging Environmental Conditions Using FCOS',
        'A Smart Knowledge Hub Overcoming Multilingual and Access Barriers',
        'AI-Driven Logistics and Delivery Optimization.'
      ]
    },
    {
      id: 'eee',
      code: 'EEE',
      name: 'Electrical & Electronics Engineering',
      hasOfficialThemes: true,
      themes: [
        'Smart and Resilient Power Systems: AI, Smart Grids and Cyber-Secure Electricity Networks',
        'Next-Generation Renewable Energy Systems: Grid Integration of Solar, Wind, Green Hydrogen and Energy Storage',
        'Electric Vehicles 2.0: Advanced Batteries, Fast Charging, V2G and Intelligent Energy Management',
        'Power Electronics for a Sustainable Future: Wide-Bandgap Devices and High-Efficiency Converter Technologies',
        'Industrial Electrification and Automation 5.0: Digital Twins, IoT, Robotics and Intelligent Motor Drives',
        'Future of Electronics: Edge AI, Semiconductor Technologies and Intelligent Embedded Systems for Next-Generation Applications'
      ]
    }
  ],
  right: [
    {
      id: 'cse',
      code: 'CSE',
      name: 'Computer Science & Engineering',
      hasOfficialThemes: true,
      themes: [
        'Agentic AI & Future of Artificial Intelligence\n  Main Focus: Generative AI, AI agents, multimodal AI, reasoning',
        'Cybersecurity, AI Security & Digital Trust\n  Main Focus: Cybersecurity, deepfakes, privacy, post-quantum security',
        'Edge AI, IoT & Autonomous Systems\n  Main Focus: Robotics, drones, TinyML, autonomous systems, 6G',
        'Green Technology & Sustainable Engineering\n  Main Focus: Green AI, EVs, smart grids, energy, climate tech',
        'AI, Healthcare & Human Augmentation\n  Main Focus: Medical AI, BCI, wearables, biotechnology'
      ]
    },
    {
      id: 'cse-ds',
      code: 'CSE (DATA SCIENCE)',
      name: 'CSE (Data Science)',
      hasOfficialThemes: true,
      themes: [
        'AI-Powered Quantum Resource Allocation for 6G Networks.',
        'AI-Optimized Quantum Sensors for Autonomous Vehicles',
        'Hybrid Quantum-Classical Neural Networks (QNN) for Real-Time Fraud Detection',
        'Accelerating Unstructured Database Queries: Implementing Grover’s Search in Big Data Pipelines',
        'Quantum-Enhanced Natural Language Processing (QNLP) for Sentiment Analysis in Financial Trading',
        'Post-Quantum Cryptography (PQC) and the Imminent Threat to Data Science Blockchains'
      ]
    },
    {
      id: 'ece',
      code: 'ECE',
      name: 'Electronics and Communication Engineering',
      hasOfficialThemes: true,
      themes: [
        'AI & Machine Learning in Electronics',
        '5G/6G & Wireless Communication',
        'VLSI & Semiconductor Technology',
        'Embedded Systems & IoT',
        'Signal & Image Processing',
        'Power Electronics & Electric Vehicles',
        'Satellite & Space Communication',
        'Robotics & Automation',
        'Hardware & Cybersecurity',
        'Sustainable/Green Electronics'
      ]
    },
    {
      id: 'mech',
      code: 'MECH',
      name: 'Mechanical Engineering',
      hasOfficialThemes: true,
      themes: [
        'Future Mobility',
        'Electric Aviation',
        'Hydrogen Mobility',
        'Generative Engineering',
        'Digital Twins',
        'Smart Manufacturing',
        'Advanced Robotics',
        'Space Propulsion',
        'Hypersonic Engineering',
        'Autonomous Vehicles'
      ]
    },
    {
      id: 'civil',
      code: 'CIVIL',
      name: 'Civil Engineering',
      hasOfficialThemes: true,
      themes: [
        'Sustainable Construction & Green Buildings',
        'Artificial Intelligence & Machine Learning in Civil Engineering',
        'Smart Cities & Intelligent Infrastructure',
        'Sustainable & Innovative Construction Materials',
        'Climate-Resilient Infrastructure',
        'Structural Engineering: Innovations & Emerging Trends',
        'Transportation Engineering & Future Mobility',
        'Water Resources & Sustainable Water Management',
        'Environmental Engineering & Waste Management',
        'Smart Materials & Emerging Technologies',
        'Heritage Conservation & Sustainable Restoration'
      ]
    }
  ]
};

export const getEventById = (id) => eventsList.find((e) => e.id === id);
