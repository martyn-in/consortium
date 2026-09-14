import { 
  FileText, 
  LayoutTemplate, 
  Box, 
  Gamepad2, 
  Camera, 
  Search, 
  Compass, 
  Film, 
  Plane, 
  DraftingCompass 
} from 'lucide-react';

/**
 * Authoritative 10-Event Catalog for CONSORTIUM 2026
 * Sourced directly from 1000151936.jpg
 * 
 * Source order preserved in default view:
 * 1. Paper presentation -> Paper Presentation
 * 2. Poster presentations -> Poster Presentations
 * 3. Project expo -> Project Expo
 * 4. Langaming -> LAN Gaming (normalized)
 * 5. Photography -> Photography
 * 6. Death mystery -> Death Mystery (preserved verbatim)
 * 7. Treasure hunt -> Treasure Hunt
 * 8. Short flims -> Short Films (spelling corrected)
 * 9. Flight simulator -> Flight Simulator
 * 10. Bridge mockup -> Bridge Mockup
 */

export const categories = [
  'All Arenas',
  'Technical',
  'Gaming & Simulation',
  'Creative',
  'Challenges'
];

export const eventsList = [
  {
    id: 'paper-presentation',
    slug: 'paper-presentation',
    sourceOrder: 1,
    arenaCode: 'ARENA #01 // 10',
    dateHud: '2026 10.09',
    title: 'Paper Presentation',
    category: 'Technical',
    tagline: 'Present ideas. Spark discussion.',
    subHeadline: 'DISRUPTIVE CONCEPTS // RESEARCH SYMPOSIUM',
    cyberTags: ['[TECHNICAL]', '[PAPER-DEFENSE]', '[AI & DATA]', '[SEMINAR ALPHA]'],
    description: 'A prestigious forum for researchers and engineers to present novel technical papers, disruptive findings, and breakthrough concepts before a panel of distinguished academicians and industry researchers.',
    icon: FileText,
    isFeaturedCenter: false,
    rules: 'Original technical work required. 10-minute presentation followed by 5-minute Q&A.',
    teamSize: 'Individual or Team of 2',
    venue: 'Seminar Hall Alpha',
    status: 'To be announced'
  },
  {
    id: 'poster-presentations',
    slug: 'poster-presentations',
    sourceOrder: 2,
    arenaCode: 'ARENA #02 // 10',
    dateHud: '2026 10.09',
    title: 'Poster Presentations',
    category: 'Technical',
    tagline: 'Big ideas. Clear visual stories.',
    subHeadline: 'SYNTHESIZING BREAKTHROUGHS // POSTER EXHIBIT',
    cyberTags: ['[TECHNICAL]', '[VISUAL-DATA]', '[INFOGRAPHICS]', '[CONVENTION ATRIUM]'],
    description: 'Synthesize complex engineering breakthroughs, architectures, and scientific hypotheses into high-impact visual infographics and interactive physical poster exhibits.',
    icon: LayoutTemplate,
    isFeaturedCenter: false,
    rules: 'Standard A1 poster format. Evaluation based on novelty, technical depth, and aesthetic clarity.',
    teamSize: 'Individual or Team of 2',
    venue: 'Convention Atrium',
    status: 'To be announced'
  },
  {
    id: 'project-expo',
    slug: 'project-expo',
    sourceOrder: 3,
    arenaCode: 'ARENA #03 // 10',
    dateHud: '2026 10.09',
    title: 'Project Expo',
    category: 'Technical',
    tagline: 'Build it. Show it. Explain it.',
    subHeadline: 'THE PREMIER INNOVATION PAVILION // LIVE DEMO',
    cyberTags: ['[TECHNICAL]', '[WORKING PROTOTYPE]', '[HARDWARE & IOT]', '[C26 FLAGSHIP]'],
    description: 'The premier innovation showcase of Consortium 2026. Live interactive demonstration of working hardware prototypes, embedded systems, autonomous bots, and production-ready software solutions.',
    icon: Box,
    isFeaturedCenter: true,
    rules: 'Working prototype demonstration is mandatory. Open to software, hardware, and IoT domains.',
    teamSize: 'Team of 2 to 4',
    venue: 'Innovation Pavilion',
    status: 'To be announced'
  },
  {
    id: 'lan-gaming',
    slug: 'lan-gaming',
    sourceOrder: 4,
    arenaCode: 'ARENA #04 // 10',
    dateHud: '2026 10.09',
    title: 'LAN Gaming',
    category: 'Gaming & Simulation',
    tagline: 'Connect. Play. Compete.',
    subHeadline: 'HIGH-REFRESH TACTICAL WARFARE // TOURNAMENT',
    cyberTags: ['[ESPORTS]', '[TACTICAL LAN]', '[AUDITORIUM CASTING]', '[CHAMPIONSHIP]'],
    description: 'High-octane competitive LAN tournament uniting collegiate esports competitors in high-refresh tactical warfare with live auditorium casting and spectator displays.',
    icon: Gamepad2,
    isFeaturedCenter: false,
    rules: 'Standard esports tournament rules. Game titles and hardware specifics to be announced.',
    teamSize: 'Squad of 4 or 5',
    venue: 'Esports Mainstage',
    status: 'To be announced'
  },
  {
    id: 'photography',
    slug: 'photography',
    sourceOrder: 5,
    arenaCode: 'ARENA #05 // 10',
    dateHud: '2026 10.09',
    title: 'Photography',
    category: 'Creative',
    tagline: 'Frame a moment. Tell a story.',
    subHeadline: 'CHRONICLING CONSORTIUM // PHOTOJOURNALISM',
    cyberTags: ['[CREATIVE]', '[CYBER-LENS]', '[CAMPUS-WIDE]', '[NOCTURNAL]'],
    description: 'Capture the nocturnal cyber aesthetic, candid technological intensity, and raw human emotions of Consortium 2026 through the lens of creative photojournalism.',
    icon: Camera,
    isFeaturedCenter: false,
    rules: 'Photographs must be taken on-campus during the festival. Minimal post-processing allowed.',
    teamSize: 'Individual',
    venue: 'Campus-wide',
    status: 'To be announced'
  },
  {
    id: 'death-mystery',
    slug: 'death-mystery',
    sourceOrder: 6,
    arenaCode: 'ARENA #06 // 10',
    dateHud: '2026 10.09',
    title: 'Death Mystery',
    category: 'Challenges',
    tagline: 'Follow the clues. Find the truth.',
    subHeadline: 'INVESTIGATIVE THRILLER // DECODE FORENSICS',
    cyberTags: ['[CHALLENGES]', '[FORENSIC SCAN]', '[DECRYPTION]', '[CRIME SCENE B]'],
    description: 'An immersive real-time investigative thriller. Gather forensic evidence, interrogate suspicious characters, decode cryptic digital logs, and solve the simulated crime.',
    icon: Search,
    isFeaturedCenter: false,
    rules: 'Timed challenge with sequential forensic stages. Team collaboration and deduction essential.',
    teamSize: 'Team of 2 to 4',
    venue: 'Crime Scene Deck B',
    status: 'To be announced'
  },
  {
    id: 'treasure-hunt',
    slug: 'treasure-hunt',
    sourceOrder: 7,
    arenaCode: 'ARENA #07 // 10',
    dateHud: '2026 10.09',
    title: 'Treasure Hunt',
    category: 'Challenges',
    tagline: 'Explore. Decode. Discover.',
    subHeadline: 'CAMPUS-WIDE SCAVENGER SPRINT // TIME ATTACK',
    cyberTags: ['[CHALLENGES]', '[GPS RADAR]', '[ALGORITHMIC RIDDLE]', '[CAMPUS EXPEDITION]'],
    description: 'The legendary campus-wide scavenger sprint. Solve algorithmic riddles, decode cipher coordinates, navigate hidden checkpoints, and race against the ticking clock.',
    icon: Compass,
    isFeaturedCenter: false,
    rules: 'Multi-stage campus navigation challenge. First squad to decode all waypoints triumphs.',
    teamSize: 'Team of 3 to 4',
    venue: 'Campus Grounds',
    status: 'To be announced'
  },
  {
    id: 'short-films',
    slug: 'short-films',
    sourceOrder: 8,
    arenaCode: 'ARENA #08 // 10',
    dateHud: '2026 10.10',
    title: 'Short Films',
    category: 'Creative',
    tagline: 'Small runtime. Big stories.',
    subHeadline: 'STUDENT CINEMATIC FESTIVAL // 4K AUDITORIUM',
    cyberTags: ['[CREATIVE]', '[4K CINEMA]', '[SHORT-FORM]', '[VISUAL EFFECTS]'],
    description: 'Screening and judging of original student cinematic shorts, visual effects experiments, and narrative films on the high-definition campus auditorium cinema display.',
    icon: Film,
    isFeaturedCenter: false,
    rules: 'Maximum runtime of 12 minutes. Original script, visual, and audio composition required.',
    teamSize: 'Crew of 1 to 5',
    venue: '4K Auditorium',
    status: 'To be announced'
  },
  {
    id: 'flight-simulator',
    slug: 'flight-simulator',
    sourceOrder: 9,
    arenaCode: 'ARENA #09 // 10',
    dateHud: '2026 10.10',
    title: 'Flight Simulator',
    category: 'Gaming & Simulation',
    tagline: 'Take the controls. Test your focus.',
    subHeadline: 'PROFESSIONAL SIMULATOR RIGS // PILOT TRIAL',
    cyberTags: ['[SIMULATION]', '[AVIONICS COCKPIT]', '[CROSSWIND RUNWAY]', '[FLIGHT LAB]'],
    description: 'Step into the cockpit. Test your aeronautical piloting skills, instrument-only landings, crosswind maneuvers, and emergency checklists in professional flight simulator rigs.',
    icon: Plane,
    isFeaturedCenter: false,
    rules: 'Standardized flight profile and landing evaluation protocol under varying atmospheric conditions.',
    teamSize: 'Individual Pilot',
    venue: 'Aeronautical Simulation Lab',
    status: 'To be announced'
  },
  {
    id: 'bridge-mockup',
    slug: 'bridge-mockup',
    sourceOrder: 10,
    arenaCode: 'ARENA #10 // 10',
    dateHud: '2026 10.10',
    title: 'Bridge Mockup',
    category: 'Technical',
    tagline: 'Design a connection. Build an idea.',
    subHeadline: 'STRUCTURAL SHOWDOWN // STRENGTH-TO-WEIGHT',
    cyberTags: ['[TECHNICAL]', '[HYDRAULIC CRUSH]', '[TRUSS ANALYSIS]', '[STRUCTURES DECK]'],
    description: 'Structural engineering showdown. Design, fabricate, and test load-bearing truss bridges using prescribed lightweight materials until destructive hydraulic failure.',
    icon: DraftingCompass,
    isFeaturedCenter: false,
    rules: 'Bridges must adhere to strict dimensional and material limits. Judged by strength-to-weight ratio.',
    teamSize: 'Team of 2 to 3',
    venue: 'Civil Structures Deck',
    status: 'To be announced'
  }
];

export const getEventBySlug = (slug) => {
  return eventsList.find((event) => event.slug === slug);
};
