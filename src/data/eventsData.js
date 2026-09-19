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
  DraftingCompass,
  Database
} from 'lucide-react';

// Authentic Real Event Photographs
import imgPaperPresentation from '../assets/real_paper_presentation.jpg';
import imgPosterPresentation from '../assets/real_poster_presentation.jpg';
import imgProjectExpo from '../assets/real_project_expo.jpg';
import imgLanGaming from '../assets/real_lan_gaming.jpg';
import imgPhotography from '../assets/real_photography.jpg';
import imgShortFilms from '../assets/real_short_films.jpg';
import imgTreasureHunt from '../assets/real_treasure_hunt.jpg';
import imgDeathMystery from '../assets/real_death_mystery.jpg';
import imgDataGlitch from '../assets/real_data_glitch.jpg';
import imgFlightSim from '../assets/real_flight_sim.jpg';
import imgBridgeMockup from '../assets/real_bridge_mockup.jpg';

/**
 * OFFICIAL CONSORTIUM 2026 CANONICAL EVENT CATALOG
 * Strictly Ordered:
 * 01 — Paper Presentation
 * 02 — Poster Presentations
 * 03 — INVENTRA — Project Expo (Mechanical Engineering)
 * 04 — LAN Gaming (IT)
 * 05 — CSE Photography (CSE)
 * 06 — CSE Short Film (CSE)
 * 07 — Magic Witch (EEE)
 * 08 — Death Mystery (CSD)
 * 09 — DATA GLITCH (CSD)
 * 10 — Flight Simulator (Aeronautical)
 * 11 — Bridge Mockup — Span Wars (Civil Engineering)
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
    fee: '₹200 per team',
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
    fee: '₹200 per team',
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
    title: 'INVENTRA — Project Expo',
    shortTitle: 'INVENTRA',
    subtitle: 'From Vision to Innovation',
    type: 'TECH / PROJECT EXPO',
    category: 'Academic',
    department: 'Department of Mechanical Engineering',
    tagline: 'From Vision to Innovation',
    description: 'INVENTRA is an interdisciplinary Project Expo organized by the Department of Mechanical Engineering that showcases groundbreaking engineering projects from all departments. Promoting innovation, teamwork, and practical problem-solving, teams pitch their working prototypes before an expert inter-departmental jury. Prize money awarded to the top 2 winners.',
    image: imgProjectExpo,
    icon: Box,
    accentColor: 'cyan',
    fee: '₹300 per team',
    feeNote: 'A team must consist of 3 members. Registration fee is ₹300 per team.',
    teamSize: 'Team of 3 Members',
    venue: 'IARE Campus, Hyderabad',
    registrationEnabled: true,
    registrationUrl: 'https://forms.gle/ReeVJxZrn5dyD8Uw5',
    rules: 'A team must consist of 3 members. All team members must be present during project evaluation. Teams must designate a Team Leader responsible for communication. Each team will be given 10 minutes to present their ideas and showcase prototypes.',
    judgingCriteriaTitle: 'EVALUATION CRITERIA (2 MARKS EACH)',
    judgingCriteria: [
      'Problem Definition and Objective (2 Marks)',
      'Innovation and Technical Approach (2 Marks)',
      'Design, Methodology and Implementation (2 Marks)',
      'Presentation and Communication (2 Marks)',
      'Impact and Sustainability (2 Marks)'
    ],
    ruleSections: [
      {
        title: '1. Team Composition & Requirements',
        points: [
          'A team must consist of 3 members.',
          'All team members must be present during the project evaluation.',
          'Teams must designate a Team Leader responsible for communication with organizers.',
          'Registration fee: ₹ 300 / Team.'
        ]
      },
      {
        title: '2. Expo Format & Presentation',
        points: [
          'Each team will be given 10 minutes to present their ideas and showcase their prototypes if designed.',
          'Showcases innovative projects from all engineering departments, promoting creativity, teamwork, and practical learning.',
          'Encourages interdisciplinary collaboration and real-world problem-solving.',
          'The projects are evaluated by faculty concerning different departments.',
          'Prize money is to be awarded for the top 2 winners of the competition.'
        ]
      }
    ],
    facultyCoordinator: {
      name: 'Dr. B. Vijaya Krishna',
      role: 'Assistant Professor, Department of Mechanical Engineering',
      phone: '7386512008'
    },
    studentCoordinators: [
      { name: 'Ch. Mukesh Chowdary', year: '2nd Year', phone: '9441654370' },
      { name: 'Gali Hema Hamsini', year: '2nd Year', phone: '701327711' },
      { name: 'Asuri Akshitha', year: '3rd Year', phone: '7386669585' },
      { name: 'Kotra Abhignan Reddy', year: '3rd Year', phone: '8179201155' }
    ],
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
    fee: '₹200 per squad',
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
    id: 'short-films',
    number: '06',
    displayNumber: '06',
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
    id: 'magic-witch',
    number: '07',
    displayNumber: '07',
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
    number: '08',
    displayNumber: '08',
    title: 'Death Mystery',
    shortTitle: 'Death Mystery',
    subtitle: 'A Technical Investigation Challenge',
    type: 'INVESTIGATION / MYSTERY',
    category: 'Experience',
    department: 'Department of Computer Science and Engineering (Data Science) — CSD',
    tagline: 'Debug. Decode. Investigate. Deduce.',
    description: 'A laptop-only digital investigation challenge. Teams qualify through a technical entry gate, receive a confidential QR case briefing, and solve a multi-level mystery using coding, SQL, logs, timestamps, and digital forensics inside a custom investigation portal to deliver the final verdict.',
    image: imgDeathMystery,
    icon: Search,
    accentColor: 'blue',
    fee: '₹250 per team',
    teamSize: 'Team of 2 to 4',
    eventFormat: 'Technical qualification + QR case briefing + laptop-only digital investigation + sequential clue solving + final verdict.',
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
          'The mobile briefing contains the victim, important people, incident background, and crime-scene observations.',
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
          'Logs, timestamps, network events, file metadata, and hidden messages may be used.',
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
        title: '9. Scoring Protocol',
        points: [
          'Scoring includes qualification, technical challenges solved, clues recovered, contradictions identified, timeline accuracy, final verdict, and time taken.',
          'The organizer may apply penalties for rule violations or unauthorized assistance.'
        ]
      },
      {
        title: '10. General Instructions',
        points: [
          'Read every clue carefully, including timestamps and small details.',
          'Keep track of names, technical identifiers, file names, and contradictions.',
          'Do not assume that the first suspicious clue is the answer.',
          'Connect multiple independent clues before reaching the final conclusion.',
          'Follow organizer instructions immediately if the investigation is paused or ended.'
        ]
      },
      {
        title: 'No Outside Applications (Immediate Disqualification)',
        isDisqualification: true,
        points: [
          'Google, external AI tools, online decoders, online SQL tools, external coding websites, and communication with other teams are strictly prohibited during the investigation.'
        ]
      }
    ],
    isSpecialPaperFlow: false
  },
  {
    id: 'data-glitch',
    number: '09',
    displayNumber: '09',
    title: 'DATA GLITCH',
    shortTitle: 'Data Glitch',
    subtitle: 'Data Science Problem Investigation & AI Anomaly Detection',
    type: 'AI & DATA SCIENCE / INVESTIGATION',
    category: 'Academic',
    department: 'Department of Data Science (CSD)',
    tagline: 'Observe. Connect. Verify. Analyze. Solve the Glitch.',
    description: 'DATA GLITCH is the premier investigative data science challenge hosted by the Department of Data Science. Armed with mandatory laptops, teams dive into real-world system logs, prediction logs, transactional customer data, and incident records to uncover anomalies, verify AI clues, identify root causes, and build tangible analytical solutions.',
    image: imgDataGlitch,
    icon: Database,
    accentColor: 'cyan',
    fee: '₹300 per team',
    feeNote: 'Registration Fee: ₹300 per team. A laptop is mandatory for each team. Official team size to be confirmed with organizers.',
    teamSize: 'Team Event (Laptop Mandatory)',
    venue: 'IARE Campus, Hyderabad (Data Science Laboratories)',
    registrationEnabled: true,
    registrationUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSc8StooUUq5XD7yxOo3zcbD-JswPtz3sOkiO40xFGBVT6R3HA/viewform',
    rules: 'Work only with registered team and assigned account. Laptop is mandatory. External AI tools allowed but must be evidence-verified. Follow the investigation flow: OBSERVE → CONNECT → VERIFY → ANALYZE → IDENTIFY ROOT CAUSE → BUILD → PRESENT.',
    guidelinesList: [
      { label: 'Required Equipment', detail: 'A laptop is mandatory; smartphones may be used for authentication, communication and secondary clues.' },
      { label: 'Investigation Flow', detail: 'OBSERVE → CONNECT → VERIFY → ANALYZE → IDENTIFY ROOT CAUSE → BUILD → PRESENT.' },
      { label: 'Connect the Evidence', detail: 'Cross-check system logs, prediction logs, transaction/customer data, support messages, access logs and incident documents.' },
      { label: 'Verify AI', detail: 'Treat AI responses as investigative clues. Important claims must be checked against tangible evidence.' },
      { label: 'Build Something Tangible', detail: 'Produce a useful output such as a chart, dashboard, Python/SQL analysis, notebook, anomaly result or lightweight prototype.' },
      { label: 'Focus on Accuracy', detail: 'Speed is useful, but unsupported conclusions should not be prioritized over evidence-backed analysis.' },
      { label: 'Final Team Output', detail: 'Be prepared to explain what happened, what evidence proves it, what caused it, what was built and what should happen next.' }
    ],
    ruleSections: [
      {
        title: '1. DATA GLITCH Objectives',
        points: [
          'Investigate a problem under real-world simulated conditions.',
          'Find, filter, and extract critical evidence across multiple data sources.',
          'Use AI responsibly and critically to accelerate investigative breakthroughs.',
          'Build a tangible data solution (notebook, visualization, dashboard, or prototype).',
          'Defend the conclusion and recommendations with indisputable evidence before the jury.'
        ]
      },
      {
        title: '2. Rules and Regulations',
        points: [
          '1. Team Participation: Work only with the registered team and assigned workspace/account. The official team size must be confirmed by the organizers.',
          '2. Required Equipment: A laptop is mandatory; smartphones may be used for authentication, communication and secondary clues.',
          '3. Use of AI: External AI tools may be used unless a challenge restricts them. AI-generated answers must be verified using evidence.',
          '4. Evidence-Based Answers: Major conclusions must be supported by data, logs, documents or other approved evidence.',
          '5. Internet & Tools: Internet access is permitted unless specifically restricted. Permitted programming, analysis and visualization tools may be used.',
          '6. Fair Play: Do not access another team\'s files, accounts, workspace or clues. Do not manipulate scores, submissions or event data.',
          '7. Submission: Submit official answers and final findings through the designated event platform within the announced time.',
          '8. Technical Issues: Report technical problems to the support team. Do not interfere with event infrastructure.',
          '9. Disqualification: Cheating, unauthorized access, score manipulation, platform exploitation or interference may result in disqualification.',
          '10. Judging: The jury\'s validation of data-based answers is final for the event.'
        ]
      },
      {
        title: '3. Guidelines of the Event',
        points: [
          'Investigate Before You Conclude: Inspect available evidence before forming a conclusion.',
          'Connect the Evidence: Cross-check system logs, prediction logs, transaction/customer data, support messages, access logs and incident documents.',
          'Verify AI: Treat AI responses as investigative clues. Important claims must be checked against evidence.',
          'Investigation Pipeline: OBSERVE → CONNECT → VERIFY → ANALYZE → IDENTIFY ROOT CAUSE → BUILD → PRESENT.',
          'Build Tangible Artifact: Produce a useful output such as a chart, dashboard, Python/SQL analysis, notebook, anomaly result or lightweight prototype.',
          'Focus on Accuracy: Speed is useful, but unsupported conclusions should not be prioritized over evidence-backed analysis.',
          'Final Defense: Be prepared to explain what happened, what evidence proves it, what caused it, what was built and what should happen next.'
        ]
      },
      {
        title: '4. Disqualification Conditions',
        isDisqualification: true,
        points: [
          'Cheating, unauthorized access to another team\'s files, accounts, workspace or clues.',
          'Score manipulation, platform exploitation, or interference with event infrastructure.',
          'Using unverified AI assertions without evidence validation.',
          'Misconduct with organizers, jury, or fellow participants.'
        ]
      }
    ],
    isSpecialPaperFlow: false
  },
  {
    id: 'flight-simulator',
    number: '10',
    displayNumber: '10',
    title: 'Flight Simulator Competition',
    shortTitle: 'Flight Simulator',
    subtitle: 'Cockpit Mastery, Flight Operations & Emergency Simulation',
    type: 'AVIONICS / COCKPIT',
    category: 'Experience',
    department: 'Department of Aeronautical Engineering',
    tagline: 'Take control. Own the skies.',
    description: 'Take command in authentic aeronautical flight simulator rigs. Test piloting mastery across instrument takeoffs, flight paths, turbulence handling, challenging crosswind approaches, and high-pressure emergency procedures. Teams of 3 (Pilot, Co-Pilot, and Navigator) battle through three progressive stages to determine the ultimate aviators.',
    image: imgFlightSim,
    icon: Plane,
    accentColor: 'cyan',
    fee: '₹300 per team',
    feeNote: 'Registration Fee: ₹300 per team of 3 members (Pilot, Co-Pilot, and Navigator / Mission Officer). Valid College/Student ID mandatory.',
    teamSize: '3 Members per Team (Pilot, Co-Pilot, Navigator)',
    venue: 'IARE Campus, Hyderabad (Flight Simulator Laboratory)',
    registrationEnabled: true,
    registrationUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSdnbeMo7vdzdqFPdWwNIfEGDHjz3w7rSN61-Rv4AGc36hQKLw/viewform?usp=sharing&ouid=101677232307028085470',
    whatsappGroupUrl: 'https://chat.whatsapp.com/DiIvzg3fwSA4nE6FrDf98h?s=sh&p=a&mlu=0&ilr=4',
    rules: 'Each team consists of exactly 3 members. 3 progressive rounds: Round 1 Basic Flight Simulation (90 Marks), Round 2 Simulation Quiz (100 Marks), and Round 3 Emergency/Failure Flight Simulation (100 Marks).',
    guidelinesList: [
      { label: 'Crew Composition', detail: 'Exactly 3 Members: Pilot (Control), Co-Pilot (Instruments), Navigator (Mission Route)' },
      { label: 'Event Structure', detail: '3 Progressive Rounds: Basic Flight → Simulation Quiz → Emergency / Failure Simulation' },
      { label: 'Round 1 Scoring', detail: '90 Marks Total (Take-off, Heading, Altitude, Speed, Navigation, Approach, Landing, Coordination)' },
      { label: 'Round 2 Quiz', detail: '20 Questions, 30s per Question, +5 per Correct Answer, No Negative Marking (100 Marks Max)' },
      { label: 'Round 3 Emergency', detail: '100 Marks Total (Emergency Recognition, Aircraft Control, Procedure, Diversion, Landing)' },
      { label: 'Mandatory Discipline', detail: 'Valid college/student ID required. Report 15 mins prior. Active 3-member participation mandatory.' }
    ],
    ruleSections: [
      {
        title: '1. General Rules & Regulations',
        points: [
          'Each team shall consist of exactly 3 members.',
          'Each participant must carry a valid college/student ID card.',
          'Teams must report to the venue at least 15 minutes before their scheduled flight slot.',
          'The simulator, aircraft type, software, and relevant scenario settings shall be configured exclusively by the event coordinators.',
          'Participants are not permitted to alter simulator settings or parameters without explicit permission.',
          'Mobile phones, notes, internet resources, or external assistance are strictly prohibited during active competition rounds.',
          'Participants must follow the instructions of the event coordinators and judges at all times.',
          'Any attempt to interfere with the simulator, software, controls, or another team’s equipment will result in immediate disqualification.',
          'In case of a technical failure of the simulator, the concerned team may be granted a restart or reattempt at the sole discretion of the judges.',
          'The decision of the judges and event coordinators shall be final and binding on all teams.'
        ]
      },
      {
        title: '2. Team Composition & Crew Roles',
        points: [
          'Member 1 – Pilot: Aircraft control, take-off, flight path management, altitude, airspeed, heading, and landing execution.',
          'Member 2 – Co-Pilot: Instrument monitoring, cockpit assistance, flight parameter cross-checks, checklist execution, and pilot support.',
          'Member 3 – Navigator / Mission Officer: Navigation, waypoint monitoring, route information, mission instructions, and team coordination.',
          'Active Participation: All three members must actively participate throughout the flight mission. One member cannot perform the entire mission unless permitted.',
          'Role Rotation: The judges may specify or rotate roles between attempts to evaluate overall cockpit competency.'
        ]
      },
      {
        title: '3. Round 1 – Basic Flight Simulation (90 Marks)',
        points: [
          'Objective: Assess the team’s fundamental aircraft-handling, cockpit awareness, navigation, and landing precision.',
          'Standard Mission Profile: Pre-flight briefing → Take-off → Climb → Maintain assigned altitude → Maintain heading and speed → Follow assigned route/waypoint → Descend → Approach → Landing.',
          'Scoring Rubric (90 Marks Total): Take-off (10 Marks), Heading Control (10 Marks), Altitude Control (10 Marks), Speed Control (10 Marks), Basic Navigation (10 Marks), Approach (10 Marks), Landing (20 Marks), Team Coordination (10 Marks).',
          'Qualification Threshold: The top 50–60% of teams based on Round 1 score will qualify for Round 2.',
          'Performance Penalties: Minor heading deviation (-2), Excessive altitude deviation (-3), Excessive speed deviation (-3), Incorrect waypoint / route deviation (-5), Unstable approach (-5), Hard landing (-5), Runway excursion (-10), Crash (-15 to -20).'
        ]
      },
      {
        title: '4. Round 2 – Simulation Quiz (100 Marks)',
        points: [
          'Objective: Test the team’s aeronautical understanding of flight simulation, aircraft operations, cockpit instruments, navigation, and basic aviation procedures.',
          'Question Domains: Flight simulator controls & functions, Primary flight instruments (PFD/ND), Aircraft control surfaces & aerodynamics, Airspeed / altitude / heading / vertical speed indicators, Waypoint & VOR navigation, Aircraft systems & cockpit indications, Standard take-off / approach / landing procedures, Aviation safety terminology, and Basic emergency handling concepts.',
          'Quiz Format: 20 Questions | 30 Seconds per question | +5 marks for correct answer | 0 marks for incorrect answer | Negative marking: None | Maximum Score: 100 Marks.',
          'Qualification: The highest-scoring teams in Round 2 will advance to the Round 3 Grand Finale. Finalist count is determined based on total turnout and simulator rig availability.'
        ]
      },
      {
        title: '5. Round 3 – Emergency / Failure Flight Simulation (100 Marks)',
        points: [
          'Objective: Evaluate the crew’s ability to recognize abnormal/emergency conditions, maintain steady aircraft control, execute critical decisions, and complete emergency procedures.',
          'Possible Scenarios: In-flight engine failure, Instrument failure, Critical low-fuel situation, Loss of communication (NORDO), Navigation system failure, Severe weather / reduced visibility, Extreme crosswind landing, Hydraulic/system warnings, Go-around execution, or Alternate airport diversion.',
          'Evaluation Criteria (100 Marks Total): Recognition of emergency/failure (15 Marks), Immediate aircraft control recovery (15 Marks), Correct checklist decision-making & procedure (20 Marks), Navigation / diversion handling (15 Marks), Team communication & crew coordination (10 Marks), Aircraft control during emergency (10 Marks), Final approach & safe landing completion (15 Marks).',
          'Mandatory Requirement: Teams must successfully execute the assigned emergency procedure. Unsuccessful recovery may lead to disqualification or substantial penalty deductions.',
          'Winner Selection: The team securing the highest score in Round 3 (after applicable penalties and successful emergency completion) will be crowned the Flight Simulator Champion.'
        ]
      },
      {
        title: '6. Team Coordination & Communication Protocols',
        points: [
          'All three members must actively contribute during the flight mission.',
          'Communication between crew members must be clear, concise, and focused on mission objectives using standard terminology.',
          'Crew members must coordinate and confirm before initiating critical actions such as major heading modifications, altitude descent, diversion, or landing flaps deployment.',
          'Role swaps between competition rounds may be permitted upon coordinator approval.',
          'If a crew member becomes indisposed, the team may proceed only with formal clearance from event coordinators.'
        ]
      },
      {
        title: '7. Disqualification Conditions',
        isDisqualification: true,
        points: [
          'Use of unauthorized external assistance, devices, or communication during active rounds.',
          'Using mobile phones, internet resources, or unauthorized notes during restricted simulator sessions.',
          'Deliberately adjusting or tampering with simulator hardware, calibration, or system settings without authorization.',
          'Physical damage to simulator flight controls, yokes, rudders, throttles, or displays.',
          'Receiving external prompts or coaching from other teams or audience members.',
          'Misconduct or arguing with judges, volunteers, or fellow participants.',
          'Deliberately interfering with another team’s scheduled simulation run.',
          'Repeated disregard for coordinator safety instructions.'
        ]
      },
      {
        title: '8. Tie-Breaker Protocol',
        points: [
          'If two or more teams achieve identical scores in Round 3, the following sequential tie-breakers apply:',
          '1. Successful and clean completion of the assigned emergency flight procedure.',
          '2. Higher sub-score in immediate aircraft control and emergency response.',
          '3. Superior approach stability and smooth touchdown landing performance.',
          '4. Lowest cumulative penalty deductions across all attempts.',
          '5. If still tied, a sudden-death short emergency failure flight challenge will be conducted.'
        ]
      },
      {
        title: '9. Competition Progression & Instructions',
        points: [
          'Round 1 (Basic Flight) → Top 50–60% advance to Round 2 (Simulation Quiz) → Highest scorers advance to Round 3 (Emergency Simulation) → Top score wins.',
          'All teams must attend the mandatory flight briefing before their scheduled round slot.',
          'Prioritize steady, disciplined, and safe aircraft operation over speed or aggressive maneuvering.',
          'Scenario-specific instructions announced by the Chief Judge before a round supersede general guidance.',
          'Organizers reserve the right to modify aircraft model, weather conditions, or routing based on rig availability; updates will be briefed before the flight.'
        ]
      }
    ],
    isSpecialPaperFlow: false
  },
  {
    id: 'bridge-mockup',
    number: '11',
    displayNumber: '11',
    title: 'Bridge Mockup — Span Wars',
    shortTitle: 'Bridge Mockup',
    subtitle: 'Span Wars — Structural Efficiency Showdown',
    type: 'STRUCTURAL / LOAD TEST',
    category: 'Academic',
    department: 'Department of Civil Engineering',
    tagline: 'Design. Build. Test the limits. Maximize structural efficiency.',
    description: 'Span Wars is the premier civil engineering structural showdown. Teams design and fabricate load-bearing truss bridges using only wooden popsicle sticks and adhesive, adhering to strict dimensional limits and a 300g weight cap. Bridges undergo vertical load testing until catastrophic failure to determine the highest structural efficiency.',
    image: imgBridgeMockup,
    icon: DraftingCompass,
    accentColor: 'blue',
    fee: '₹200 per team',
    teamSize: '2–3 B.Tech Students (All Disciplines Eligible)',
    venue: 'IARE Campus, Hyderabad',
    registrationEnabled: true,
    rules: 'Only wooden popsicle sticks (max 110×12×2mm) and adhesive allowed. Max self-weight 300g. Dimensions: length 560-600mm, width 100-110mm, height 120-160mm. Clear opening 150×600mm beneath. Highest structural efficiency wins.',
    highlightFormula: 'Structural Efficiency = Ultimate Load Carried (N) / Self-Weight of Bridge (N)',
    guidelinesList: [
      { label: 'Overall Length', detail: '560 – 600 mm' },
      { label: 'Overall Width', detail: '100 – 110 mm' },
      { label: 'Overall Height', detail: '120 – 160 mm' },
      { label: 'Maximum Self-Weight', detail: '300 grams (Strict weight limit)' },
      { label: 'Clearance Requirement', detail: 'Minimum clear opening of 150 mm (H) × 600 mm (W) along passage beneath the bridge' },
      { label: 'Stick Dimensions', detail: 'Max Length: 110 mm, Width: 12 mm, Thickness: 2 mm' }
    ],
    ruleSections: [
      {
        title: '1. Team Eligibility & Bridge Preparation',
        points: [
          'Team Size: Each team shall consist of 2–3 B.Tech students. Students from any engineering discipline are eligible.',
          'Bridge Construction: The bridge shall be prepared before the event and brought to the venue for testing.'
        ]
      },
      {
        title: '2. Permitted & Prohibited Materials',
        points: [
          'Only wooden ice-cream / popsicle sticks and adhesive (glue) are permitted.',
          'Maximum stick dimensions: Length – 110 mm, Width – 12 mm, Thickness – 2 mm.',
          'Sticks may be cut, trimmed, or notched as required.',
          'Strictly Prohibited: Thread, wire, tape, paper, cardboard, metal components, or any other reinforcing material are strictly prohibited.'
        ]
      },
      {
        title: '3. Dimensional Envelope & Clearance',
        points: [
          'Overall Length: 560–600 mm | Overall Width: 100–110 mm | Overall Height: 120–160 mm.',
          'Maximum Self-Weight: 300 g.',
          'A minimum clear opening of 150 mm height × 600 mm width shall be maintained along the required passage beneath the bridge. No structural member shall obstruct the specified clearance.',
          'Bridge Configuration: Participants may adopt any bridge/truss configuration, provided it satisfies dimensional and material restrictions.'
        ]
      },
      {
        title: '4. Loading Protocol & Failure Criterion',
        points: [
          'The bridge shall be placed on the designated supports provided by the organizers.',
          'Load shall be applied vertically on the bridge deck gradually in increments until structural failure occurs.',
          'Only one official loading attempt is permitted for each bridge.',
          'Failure Criterion: The test shall be stopped when the bridge collapses, loses its ability to sustain the applied load, or undergoes significant structural failure as determined by the judges.'
        ]
      },
      {
        title: '5. Scoring & Inspection Protocol',
        points: [
          'Structural Efficiency = Ultimate Load Carried (N) / Self-Weight of Bridge (N).',
          'The bridge with the highest structural efficiency shall receive the highest score. The maximum load carried will also be recorded for reference.',
          'Inspection: Each bridge will be inspected and weighed before testing. Bridges exceeding specified dimensions, weight, or material restrictions will be disqualified before the loading test.'
        ]
      },
      {
        title: '6. Disqualification & Final Decision',
        isDisqualification: true,
        points: [
          'Use of prohibited materials',
          'Exceeding specified dimensions or weight (>300g)',
          'Modifying the bridge after submission/inspection',
          'Failure to comply with the instructions of the event coordinators or judges',
          'The decision of the judges regarding eligibility, structural failure, load carried, and final results shall be final.'
        ]
      }
    ],
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

export const getEventById = (id) => {
  if (!id) return undefined;
  if (id === 'project-expo' || id === 'inventra') {
    return eventsList.find((e) => e.id === 'project-expo' || e.id === 'inventra');
  }
  if (id === 'death-mystery-investigation') {
    return eventsList.find((e) => e.id === 'death-mystery');
  }
  if (id === 'treasure-hunt') {
    return eventsList.find((e) => e.id === 'magic-witch');
  }
  return eventsList.find((e) => e.id === id);
};
