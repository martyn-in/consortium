import { 
  FileText, 
  PanelsTopLeft, 
  Box, 
  Gamepad2, 
  Camera, 
  Search,
  Sparkles,
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
 * 07 — Death Mystery
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
    tagline: 'Enter the tournament. Play for the win.',
    description: 'The ultimate collegiate mobile esports championship featuring Battlegrounds Mobile India (BGMI) and Free Fire Max. Tactical squad warfare, high-pressure clutch plays, and live esports stage showdowns.',
    image: imgLanGaming,
    icon: Gamepad2,
    accentColor: 'violet',
    teamSize: 'Squad / Team (Mobile Only)',
    venue: 'IARE Campus, Hyderabad',
    registrationEnabled: true,
    registrationUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScnxJBndJukZZ70fU1Pixf1u_Z1bkjOIuyEsnblpqJ1upNKHw/viewform?usp=header',
    rules: 'Mobile smartphones only (strictly no emulators, iPads/tablets, or external triggers). Point system based on match placement and elimination score across tournament brackets.',
    numberedRules: [
      'Only registered students are allowed to participate in the event.',
      'Participants must carry their valid college ID card.',
      'All players must use the game version and settings provided by the organizers.',
      'Players must report to the venue before their scheduled match time.',
      'Each team must follow the specified team size and match format.',
      'Use of cheats, hacks, unauthorized software, or scripts is strictly prohibited.',
      'Exploiting game bugs or glitches to gain an unfair advantage is not allowed.',
      'Players must use only the assigned computers and official LAN network.',
      'Any technical or network issue must be immediately reported to the organizers.',
      'Players must not interfere with other participants\' systems or network connections.',
      'Abusive language, misconduct, and disruptive behavior are not permitted.',
      'Players must respect opponents, coordinators, faculty, and college property.',
      'Violation of rules may result in match loss or disqualification.',
      'All disputes must be reported to the event coordinators immediately.',
      'The decision of the organizing committee will be final.'
    ],
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
    tagline: 'Our College Through Your Lens.',
    description: 'Capture the essence of campus life, architectural aesthetics, candid emotion, and festival energy of Consortium 2026 through the creative lens of photography.',
    image: imgPhotography,
    icon: Camera,
    accentColor: 'cyan',
    fee: '₹79 per participant',
    teamSize: 'Individual Participation Only',
    eventDuration: '2 Days (October 9 & 10, 2026)',
    theme: '“Our College Through Your Lens” – Photos captured only within IARE campus',
    venue: 'IARE Campus, Hyderabad',
    registrationEnabled: true,
    registrationUrl: 'https://forms.gle/d8rPJCVxPcf7wgcy8',
    rules: 'Individual participation only. Each participant can submit a maximum of two photos. Photos must be original and captured within the IARE campus during the event.',
    guidelinesList: [
      { label: 'Event Duration', detail: 'The contest will be conducted over two days.' },
      { label: 'Theme', detail: '“Our College Through Your Lens” – Participants must capture photos only within the IARE campus.' },
      { label: 'Participation', detail: 'Individual participation only. Each participant can submit a maximum of two photos.' },
      { label: 'Submission Rules', detail: 'Photos should be in JPEG or PNG format. Basic editing like brightness, cropping, and contrast adjustment is allowed. AI-generated or overly edited images are not permitted.' },
      { label: 'Originality & Integrity', detail: 'Photos must be original and captured during the event. Plagiarism or use of stock images will result in immediate disqualification.' },
      { label: 'Decision', detail: 'Judges’ decisions will be final and binding.' }
    ],
    judgingCriteria: [
      'Creativity & Originality',
      'Composition',
      'Relevance to Theme',
      'Technical Quality'
    ],
    isSpecialPaperFlow: false
  },
  {
    id: 'magic-witch',
    number: '06',
    displayNumber: '06',
    title: 'Magic Witch — The Elixir of Eternal Life',
    shortTitle: 'Magic Witch',
    subtitle: 'The Elixir of Eternal Life',
    type: 'QUEST / ADVENTURE',
    category: 'Experience',
    department: 'Department of Electrical & Electronics Engineering (EEE)',
    tagline: 'Survive three worlds. Collect the 10 Sacred Ingredients. Claim the Witch\'s treasure.',
    description: 'Legend says that the most powerful witch in the realm created the Elixir of Eternal Life using 10 enchanted ingredients. Before disappearing, she scattered the ingredients across the Forbidden Realm and protected them with magical trials. The Witch Hunters must survive three worlds, solve challenges, collect the 10 Sacred Ingredients, and place them in the correct sequence. Only the team that successfully reconstructs the Elixir of Eternal Life can claim the Witch\'s treasure.',
    image: imgTreasureHunt,
    icon: Sparkles,
    accentColor: 'magenta',
    fee: '₹360 per team',
    feeNote: 'A team contains 3 members max. Even 1 or 2 can participate but the amount is fixed at ₹360 per team.',
    teamSize: '1 to 3 Members Max',
    venue: 'IARE Campus, Hyderabad',
    registrationEnabled: true,
    registrationUrl: 'https://forms.gle/BCGLRCbEVwuRBYGi7',
    rules: 'Teams must navigate three magical worlds, retrieve all 10 Sacred Ingredients legitimately, and arrange them in the precise sequence before time runs out.',
    gameStory: 'Legend says that the most powerful witch in the realm created the Elixir of Eternal Life using 10 enchanted ingredients. Before disappearing, she scattered the ingredients across the Forbidden Realm and protected them with magical trials. The Witch Hunters must survive three worlds, solve challenges, collect the 10 Sacred Ingredients, and place them in the correct sequence. Only the team that successfully reconstructs the Elixir of Eternal Life can claim the Witch\'s treasure.',
    ruleSections: [
      {
        title: '1. Team Integrity',
        points: [
          'Teams must remain together unless a challenge specifically allows separation.',
          'Members cannot exchange clues or answers with other teams.',
          'No outside assistance is permitted.'
        ]
      },
      {
        title: '2. Ingredient Rules',
        points: [
          'Ingredients cannot be stolen, exchanged, hidden, damaged or tampered with.',
          'Teams may only collect ingredients that they have legitimately earned.',
          'Ingredients must remain with the team throughout the game.',
          'Organizers may verify ingredients at any checkpoint.'
        ]
      },
      {
        title: '3. Arrangement Rules',
        points: [
          'Teams may rearrange their ingredients during designated arrangement periods.',
          'Once the final sequence is submitted, it is considered a final attempt.',
          'The number of final attempts can be restricted by the organizers.'
        ]
      },
      {
        title: '4. Technology',
        points: [
          'Specifically permitted: Mobile phones and smartwatches are useable.',
          'Phones may be permitted for specific QR-code or game mechanics if instructed by organizers.'
        ]
      },
      {
        title: '5. Time',
        points: [
          'Every challenge has a defined time limit.',
          'When the time expires, the challenge ends.'
        ]
      },
      {
        title: '6. Hints',
        points: [
          'Hints can be provided by the Witch/Guardians.',
          'Each hint can carry a Magic Power penalty or time penalty.'
        ]
      },
      {
        title: '7. Fair Play (Immediate Disqualification)',
        isDisqualification: true,
        points: [
          'Cheating',
          'Tampering with game installations',
          'Entering restricted areas',
          'Taking another team\'s ingredients',
          'Receiving outside assistance',
          'Damaging event property',
          'Misconduct toward organizers or participants'
        ]
      }
    ],
    isSpecialPaperFlow: false
  },
  {
    id: 'death-mystery',
    number: '07',
    displayNumber: '07',
    title: 'Death Mystery',
    shortTitle: 'Death Mystery',
    subtitle: 'A Technical Investigation Challenge',
    type: 'INVESTIGATION / MYSTERY',
    category: 'Experience',
    department: 'Department of Electrical & Electronics Engineering (EEE)',
    tagline: 'Debug. Decode. Investigate. Deduce.',
    description: 'A laptop-only digital investigation challenge. Teams qualify through a technical gate, receive a QR case briefing, and solve a multi-level mystery using coding, SQL, logs, timestamps, and digital forensics — all inside a custom investigation website.',
    image: imgDeathMystery,
    icon: Search,
    accentColor: 'blue',
    fee: 'TBA',
    teamSize: 'Team of 2 to 4',
    venue: 'IARE Campus, Hyderabad',
    registrationEnabled: true,
    registrationUrl: 'https://forms.gle/q8sNCG6mc378WRyt8',
    rules: 'Technical qualification + QR case briefing + laptop-only digital investigation + sequential clue solving + final verdict. No outside applications permitted.',
    gameStory: 'A mysterious death has occurred. Your team of investigators must qualify through a technical entry gate, receive a confidential case briefing via QR code, and solve the entire case on the provided laptop. Debug code, decode messages, query databases, analyze logs, and reconstruct the timeline to deliver your final verdict.',
    ruleSections: [
      {
        title: '1. Team & Registration',
        points: [
          'Each team must consist of 2-4 members.',
          'All participants must complete registration before the event begins.',
          'Team members must work together as one investigation team.'
        ]
      },
      {
        title: '2. Qualification Round',
        points: [
          'The entry gate contains 6 questions.',
          '2 questions are based on Java / HTML / programming.',
          '2 questions are based on EEE / ECE / Civil / Mechanical Engineering.',
          '2 questions are General Knowledge based.',
          'Teams must answer any 2 questions correctly to qualify.',
          'Participants must press SUBMIT ANSWERS before the system checks qualification.'
        ]
      },
      {
        title: '3. QR Case Briefing',
        points: [
          'After qualification, a QR code will appear on the laptop.',
          'Scan the QR code with a phone to open the case briefing.',
          'The mobile briefing contains the victim, important people, incident background and crime-scene observations.',
          'The mobile briefing does not reveal the technical clues or final solution.'
        ]
      },
      {
        title: '4. Main Investigation',
        points: [
          'The technical investigation begins on the provided laptop.',
          'The complete case must be solved inside the event website.',
          'Every major conclusion should be supported by evidence discovered during the investigation.'
        ]
      },
      {
        title: '5. Technical Challenges',
        points: [
          'Participants may face small coding/debugging tasks.',
          'Encoding / decoding challenges may be used to reveal clues.',
          'Simple SQL queries may be required to search fictional case data.',
          'Logs, timestamps, network events, file metadata and hidden messages may be used.',
          'A final timeline reconstruction connects the evidence.'
        ]
      },
      {
        title: '6. Level System',
        points: [
          'Levels are completed in sequence.',
          'Solving one level unlocks the next level.',
          'A clue recovered from one level is often required to solve the next level.',
          'Random guessing should not be necessary; read the case evidence carefully.'
        ]
      },
      {
        title: '7. Secure Investigation Mode',
        points: [
          'The qualification stage is not secure mode.',
          'Secure mode starts only after the team clicks START INVESTIGATION.',
          'Once secure mode begins, leaving or hiding the investigation page may automatically close the attempt.',
          'Participants should remain on the investigation website throughout the main case.'
        ]
      },
      {
        title: '8. Final Verdict',
        points: [
          'At the end, teams must submit who is responsible, what happened, the motive, and the supporting evidence.',
          'The final answer should explain the evidence chain rather than only naming a suspect.',
          'Incorrect or unsupported accusations may receive reduced points.'
        ]
      },
      {
        title: '9. Scoring',
        points: [
          'Scoring may include qualification, technical challenges solved, clues recovered, contradictions identified, timeline accuracy, final verdict, and time taken.',
          'The organizer may apply penalties for rule violations or unauthorized assistance.'
        ]
      },
      {
        title: '10. General Instructions',
        points: [
          'Read every clue carefully, including timestamps and small details.',
          'Keep track of names, technical identifiers, file names and contradictions.',
          'Do not assume that the first suspicious clue is the answer.',
          'Connect multiple independent clues before reaching the final conclusion.',
          'Follow organizer instructions immediately if the investigation is paused or ended.'
        ]
      },
      {
        title: 'No Outside Applications',
        isDisqualification: true,
        points: [
          'Google, external AI tools, online decoders, online SQL tools, external coding websites and communication with other teams are not permitted during the investigation.'
        ]
      }
    ],
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
    tagline: 'Tell a story worth remembering. Reflect positivity, awareness, or creativity.',
    description: 'A platform for aspiring filmmakers to showcase cinematic creativity, powerful narratives, and meaningful visual storytelling on the grand auditorium cinema display.',
    image: imgShortFilms,
    icon: Clapperboard,
    accentColor: 'magenta',
    fee: '₹249 per team',
    teamSize: 'Maximum 5 Members per Team',
    duration: '3 to 10 Minutes (including credits)',
    submissionFormat: 'MP4 format (Named as TeamName_ShortFilmTitle)',
    venue: 'IARE Campus, Hyderabad',
    registrationEnabled: true,
    registrationUrl: 'https://forms.gle/DBNtqjMA8QpmdW15A',
    rules: 'No fixed theme – open to any genre, but must carry a meaningful message or motto. Strictly no offensive content. 3 to 10 minutes runtime.',
    guidelinesList: [
      { label: 'Theme', detail: 'No fixed theme – participants can choose any theme and genre of their choice. However, the short film must carry a meaningful message or motto that reflects positivity, awareness, or creativity.' },
      { label: 'Content Restrictions', detail: 'Strictly no vulgar, offensive, or inappropriate content. Avoid abusive language, violent scenes, or sensitive political/religious depictions.' },
      { label: 'Team Composition', detail: 'A team can have a maximum of 5 members.' },
      { label: 'Duration', detail: 'The short film should be between 3 to 10 minutes in length, including credits.' },
      { label: 'Submission Format', detail: 'The film should be submitted in MP4 format, named as TeamName_ShortFilmTitle. Submission details will be shared after registration through the WhatsApp group you are added to.' },
      { label: 'Decision', detail: 'The judges’ decision will be final and binding.' }
    ],
    judgingCriteria: [
      'Storyline & Creativity',
      'Cinematography & Editing',
      'Acting & Direction',
      'Overall Message'
    ],
    generalInstructions: [
      'All participants must register before the deadline.',
      'Entries submitted after the due date will not be accepted.',
      'Ensure that your entries align with college ethics and discipline.',
      'Organizers reserve the right to disqualify entries violating guidelines.',
      'Shortfilms will be shortlisted & screened for final adjudication.'
    ],
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
