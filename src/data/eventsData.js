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
 * Authoritative 10-Event Catalog for CONSORTIUM 2026
 * 1. Paper Presentation
 * 2. Poster Presentations
 * 3. Project Expo
 * 4. LAN Gaming (BGMI & Free Fire Max)
 * 5. Photography
 * 6. Death Mystery
 * 7. Treasure Hunt
 * 8. Short Films
 * 9. Flight Simulator
 * 10. Bridge Mockup
 */

export const categories = [
  'All Events',
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
    eventCode: 'EVENT #01 // 10',
    arenaCode: 'EVENT #01 // 10',
    dateHud: '2026 10.09',
    title: 'Paper Presentation',
    category: 'Technical',
    tagline: 'Present ideas. Spark discussion.',
    subHeadline: 'DISRUPTIVE CONCEPTS // RESEARCH SYMPOSIUM',
    cyberTags: ['[RESEARCH DEFENSE]', '[TECHNICAL PAPERS]', '[FACULTY JURY]', '[SEMINAR HALL A]'],
    description: 'A prestigious forum for engineering scholars and researchers to defend original technical papers, disruptive findings, and breakthrough concepts before a distinguished panel of academicians and industry researchers.',
    image: imgPaperPresentation,
    icon: FileText,
    isFeaturedCenter: false,
    rules: 'Original research paper required. 10-minute presentation followed by a 5-minute technical Q&A session with the evaluation jury.',
    teamSize: 'Individual or Team of 2',
    venue: 'Seminar Hall Alpha',
    status: 'To be announced'
  },
  {
    id: 'poster-presentations',
    slug: 'poster-presentations',
    sourceOrder: 2,
    eventCode: 'EVENT #02 // 10',
    arenaCode: 'EVENT #02 // 10',
    dateHud: '2026 10.09',
    title: 'Poster Presentations',
    category: 'Technical',
    tagline: 'Big ideas. Clear visual stories.',
    subHeadline: 'SYNTHESIZING BREAKTHROUGHS // POSTER EXHIBIT',
    cyberTags: ['[VISUAL RESEARCH]', '[INFOGRAPHICS]', '[EXPO FLOOR]', '[INTERACTIVE JURY]'],
    description: 'Synthesize complex engineering breakthroughs, architectures, and scientific hypotheses into high-impact visual infographics and interactive physical poster exhibits reviewed by technical jurors.',
    image: imgPosterPresentation,
    icon: LayoutTemplate,
    isFeaturedCenter: false,
    rules: 'Standard A1 poster format. Evaluation based on technical depth, visual synthesis, methodology, and live oral defense.',
    teamSize: 'Individual or Team of 2',
    venue: 'Convention Atrium',
    status: 'To be announced'
  },
  {
    id: 'project-expo',
    slug: 'project-expo',
    sourceOrder: 3,
    eventCode: 'EVENT #03 // 10',
    arenaCode: 'EVENT #03 // 10',
    dateHud: '2026 10.09',
    title: 'Project Expo',
    category: 'Technical',
    tagline: 'Build it. Show it. Explain it.',
    subHeadline: 'THE PREMIER INNOVATION PAVILION // LIVE DEMO',
    cyberTags: ['[WORKING HARDWARE]', '[ROBOTICS & IOT]', '[LIVE PROTOTYPE]', '[MAIN PAVILION]'],
    description: 'The premier innovation showcase of Consortium 2026. Live interactive demonstration of working hardware prototypes, embedded robotics, autonomous IoT devices, and production-ready engineering solutions.',
    image: imgProjectExpo,
    icon: Box,
    isFeaturedCenter: true,
    rules: 'Working physical prototype or deployed software demonstration is mandatory. Open to IoT, robotics, AI, and multidisciplinary domains.',
    teamSize: 'Team of 2 to 4',
    venue: 'Innovation Pavilion',
    status: 'To be announced'
  },
  {
    id: 'lan-gaming',
    slug: 'lan-gaming',
    sourceOrder: 4,
    eventCode: 'EVENT #04 // 10',
    arenaCode: 'EVENT #04 // 10',
    dateHud: '2026 10.09',
    title: 'LAN Gaming: BGMI & Free Fire Max',
    category: 'Gaming & Simulation',
    tagline: 'Squad up. Drop in. Dominate.',
    subHeadline: 'BGMI & FREE FIRE MAX // MOBILE ESPORTS CHAMPIONSHIP',
    cyberTags: ['[BGMI SQUAD]', '[FREE FIRE MAX]', '[MOBILE ESPORTS]', '[STAGE FINALS]'],
    description: 'The ultimate collegiate mobile esports championship. Squad up in Battlegrounds Mobile India (BGMI) and Free Fire Max. Drop into intense tactical battlegrounds, execute clutch maneuvers, and claim victory on the live esports stage.',
    image: imgLanGaming,
    icon: Gamepad2,
    isFeaturedCenter: false,
    rules: 'Tournament played on BGMI & Free Fire Max. Mobile smartphones only (no emulators, tablets, or external triggers). Point system based on placement and eliminations.',
    teamSize: 'Squad of 4 (Mobile Only)',
    venue: 'Esports Mainstage & Gaming Arena',
    status: 'To be announced'
  },
  {
    id: 'photography',
    slug: 'photography',
    sourceOrder: 5,
    eventCode: 'EVENT #05 // 10',
    arenaCode: 'EVENT #05 // 10',
    dateHud: '2026 10.09',
    title: 'Photography',
    category: 'Creative',
    tagline: 'Frame a moment. Tell a story.',
    subHeadline: 'CHRONICLING CONSORTIUM // PHOTOJOURNALISM',
    cyberTags: ['[PHOTOJOURNALISM]', '[CAMPUS LIFE]', '[CANON / SONY / NIKON]', '[VISUAL ARTS]'],
    description: 'Capture the visual aesthetic, candid technological intensity, human emotion, and vibrant campus spirit of Consortium 2026 through the creative lens of documentary photojournalism.',
    image: imgPhotography,
    icon: Camera,
    isFeaturedCenter: false,
    rules: 'Photographs must be captured on-campus during festival days. Minimal color grading allowed; generative AI manipulation is strictly prohibited.',
    teamSize: 'Individual Photographer',
    venue: 'Campus-wide',
    status: 'To be announced'
  },
  {
    id: 'death-mystery',
    slug: 'death-mystery',
    sourceOrder: 6,
    eventCode: 'EVENT #06 // 10',
    arenaCode: 'EVENT #06 // 10',
    dateHud: '2026 10.09',
    title: 'Death Mystery',
    category: 'Challenges',
    tagline: 'Follow the clues. Find the truth.',
    subHeadline: 'CRIME SCENE INVESTIGATION // FORENSIC THRILLER',
    cyberTags: ['[CRIME SCENE]', '[FORENSIC EVIDENCE]', '[CIPHER DECODING]', '[TIMED MYSTERY]'],
    description: 'An immersive real-time investigative thriller. Examine physical crime scenes, analyze forensic evidence, interrogate suspicious role-play witnesses, decode cryptic clues, and identify the culprit before time expires.',
    image: imgDeathMystery,
    icon: Search,
    isFeaturedCenter: false,
    rules: 'Timed forensic investigation in staged crime rooms. Teams must submit a coherent deduction dossier with physical evidence cross-references.',
    teamSize: 'Team of 2 to 4',
    venue: 'Forensic Lab Deck B',
    status: 'To be announced'
  },
  {
    id: 'treasure-hunt',
    slug: 'treasure-hunt',
    sourceOrder: 7,
    eventCode: 'EVENT #07 // 10',
    arenaCode: 'EVENT #07 // 10',
    dateHud: '2026 10.09',
    title: 'Treasure Hunt',
    category: 'Challenges',
    tagline: 'Explore. Decode. Discover.',
    subHeadline: 'CAMPUS-WIDE EXPEDITION // RIDDLE & TIME ATTACK',
    cyberTags: ['[CAMPUS EXPEDITION]', '[RIDDLE SOLVING]', '[WAYPOINT HUNT]', '[FAST-PACED]'],
    description: 'The legendary campus-wide navigation sprint. Solve mathematical riddles, decode GPS coordinates and cryptic clues, locate hidden checkpoint tokens across campus, and race against the ticking clock.',
    image: imgTreasureHunt,
    icon: Compass,
    isFeaturedCenter: false,
    rules: 'Multi-stage navigation challenge. Checkpoints must be cleared in sequential order. First team to return with the master key wins.',
    teamSize: 'Team of 3 to 4',
    venue: 'Central Campus Grounds',
    status: 'To be announced'
  },
  {
    id: 'short-films',
    slug: 'short-films',
    sourceOrder: 8,
    eventCode: 'EVENT #08 // 10',
    arenaCode: 'EVENT #08 // 10',
    dateHud: '2026 10.10',
    title: 'Short Films',
    category: 'Creative',
    tagline: 'Small runtime. Big stories.',
    subHeadline: 'STUDENT CINEMA FESTIVAL // AUDITORIUM 4K',
    cyberTags: ['[CINEMATOGRAPHY]', '[ORIGINAL NARRATIVE]', '[4K PROJECTION]', '[JURY SCREENING]'],
    description: 'Screening and adjudication of original student cinematic shorts, visual documentaries, and creative fiction on the high-definition campus auditorium cinema display with live jury feedback.',
    image: imgShortFilms,
    icon: Film,
    isFeaturedCenter: false,
    rules: 'Maximum runtime of 12 minutes including credits. Original student cinematography, storyline, and sound design required.',
    teamSize: 'Crew of 1 to 5',
    venue: 'Main 4K Auditorium',
    status: 'To be announced'
  },
  {
    id: 'flight-simulator',
    slug: 'flight-simulator',
    sourceOrder: 9,
    eventCode: 'EVENT #09 // 10',
    arenaCode: 'EVENT #09 // 10',
    dateHud: '2026 10.10',
    title: 'Flight Simulator',
    category: 'Gaming & Simulation',
    tagline: 'Take the controls. Test your focus.',
    subHeadline: 'AVIONICS COCKPIT // PILOT FLIGHT TRIAL',
    cyberTags: ['[FLIGHT COCKPIT]', '[CROSSWIND LANDING]', '[AVIONICS CONTROLS]', '[AERO LAB]'],
    description: 'Take command in authentic aeronautical flight simulator rigs. Test your piloting skills through instrument takeoffs, turbulence handling, challenging crosswind runway landings, and emergency procedures.',
    image: imgFlightSim,
    icon: Plane,
    isFeaturedCenter: false,
    rules: 'Standardized flight profile and landing evaluation protocol under challenging atmospheric and crosswind conditions.',
    teamSize: 'Individual Pilot',
    venue: 'Aeronautical Simulation Lab',
    status: 'To be announced'
  },
  {
    id: 'bridge-mockup',
    slug: 'bridge-mockup',
    sourceOrder: 10,
    eventCode: 'EVENT #10 // 10',
    arenaCode: 'EVENT #10 // 10',
    dateHud: '2026 10.10',
    title: 'Bridge Mockup',
    category: 'Technical',
    tagline: 'Design a connection. Build an idea.',
    subHeadline: 'CIVIL TRUSS SHOWDOWN // HYDRAULIC LOAD TESTING',
    cyberTags: ['[STRUCTURAL TRUSS]', '[CIVIL ENGINEERING]', '[HYDRAULIC CRUSH]', '[LOAD CAPACITY]'],
    description: 'Civil engineering structural showdown. Design, fabricate, and test load-bearing truss bridges using prescribed lightweight materials until destructive hydraulic load failure to prove optimal strength-to-weight.',
    image: imgBridgeMockup,
    icon: DraftingCompass,
    isFeaturedCenter: false,
    rules: 'Truss bridges must adhere to strict weight, span, and material specifications. Scored by ultimate load capacity divided by bridge self-weight.',
    teamSize: 'Team of 2 to 3',
    venue: 'Civil Structures Testing Lab',
    status: 'To be announced'
  }
];

export const getEventBySlug = (slug) => {
  return eventsList.find((event) => event.slug === slug);
};

