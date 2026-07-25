/**
 * OLAMIDE ANIFOWOSHE — PORTFOLIO DATA STORE
 * Clean modular data for backend developer portfolio
 */

export const TELEMETRY_METADATA = {
  status: "NORMAL",
  environment: "PRODUCTION",
  uptime: "99.99%",
  node: "los-lag-01",
  region: "Lagos, NG"
};

export const PROFILE = {
  name: "Anifowoshe Olamide",
  roleHeadline: "Backend developer focused on API design and scalable, transaction-safe systems — currently building at Ndara.ai.",
  location: "Lagos, Nigeria",
  availability: "ACTIVE — OPEN TO OPPORTUNITIES",
  email: "olamideanifowoshe2004@gmail.com",
  phone: "+234 901 051 6717",
  github: "https://github.com/Anifowoseolamide",
  aboutParagraphs: [
    "I'm a backend developer with a Computer Science degree from Lagos State University. I care deeply about the parts of a system users never see directly — API design, data integrity, and making sure money and state don't get lost between requests.",
    "I'm currently a <strong>Backend Developer at Ndara.ai</strong>, building backend features for a WhatsApp-integrated, AI-driven SaaS platform. Outside of work, I compete in high-stakes hackathons — leading backend development for <strong>Tidal (Scriva)</strong> at the 2026 OPay Hackathon and winning 2nd Place at the Nexus Hackathon Epe with <strong>PetrolLink</strong> — alongside architecting systems like <strong>LagosCP</strong> and <strong>RideShare</strong>."
  ],
  terminalStats: [
    { prompt: "$ whoami", val: "olamide --role=backend-engineer" },
    { prompt: "$ stack --core", val: "Python / Django / REST / PostgreSQL / Docker" },
    { prompt: "$ focus", val: "Atomic Escrow Transactions, AI Biometric APIs, Race-Condition Protection, API Design" },
    { prompt: "$ education", val: "B.Sc. CS @ Lagos State University (2026)" }
  ]
};

export const SKILL_GROUPS = [
  {
    title: "Core Languages",
    icon: "LANG",
    skills: ["Python", "SQL", "JavaScript", "VB.NET"]
  },
  {
    title: "Backend & API Architecture",
    icon: "ARCH",
    skills: ["Django", "Django REST Framework", "Django Channels", "WebSockets", "SimpleJWT", "AI Biometrics (Face++ / CompreFace)", "API Design", "Atomic Transactions"]
  },
  {
    title: "Databases & Data Layer",
    icon: "DATA",
    skills: ["PostgreSQL", "Select For Update", "Relational Schema Design", "Query Optimization", "Data Structures & Algorithms"]
  }
];

export const EXPERIENCE = [
  {
    role: "Backend Developer",
    org: "Ndara.ai",
    dates: "2025 — Present",
    status: "ACTIVE",
    items: [
      "Building backend features for a SaaS platform integrating WhatsApp APIs and AI-driven automation",
      "Designing and maintaining scalable APIs and system architecture",
      "Coordinating backend tasks and reviewing code across the team"
    ]
  },
  {
    role: "Lead Backend Developer (Hackathon)",
    org: "Tidal / Scriva — 2026 OPay Hackathon",
    dates: "2026",
    status: "COMPLETE",
    items: [
      "Architected the complete REST API for an AI-powered exam handwriting OCR & automated grading platform",
      "Engineered async Celery pipelines for background OCR canvas transcription and LLM-based answer evaluation",
      "Built role-based JWT workflows separating student exam submission flows and lecturer review queues"
    ]
  },
  {
    role: "Backend Developer (Hackathon — 2nd Place Winner)",
    org: "PetrolLink — Nexus Hackathon Epe",
    dates: "2026",
    status: "COMPLETE",
    items: [
      "Engineered the core Detection & Simulation Engine ('The Brain') — enabling the platform to understand sensor telemetry and function without physical IoT hardware",
      "Built a Digital Twin simulation engine (simulation.py) generating realistic Pressure, Flow, and Temperature data with stochastic noise to mimic real-world sensors",
      "Developed an Intelligent Analysis detection layer (detection.py) with rapid pressure drop leak alerting (>1.5 PSI) and flow discrepancy theft detection",
      "Led the backend architecture and development to secure 2nd Place overall at the Nexus Hackathon Epe"
    ]
  }
];

export const EDUCATION = [
  {
    role: "B.Sc. Computer Science",
    org: "Lagos State University",
    dates: "Graduated 04/2026",
    status: "COMPLETE",
    note: "Coursework: Algorithms & Data Structures, Computer Programming, Computer Architecture, Discrete Mathematics."
  },
  {
    role: "Harvard CS50",
    org: "Certification",
    dates: "Completed",
    status: "COMPLETE",
    note: "Foundation in algorithms, data structures, Python, SQL, and web development (HTML, CSS, JavaScript)."
  }
];

export const PROJECT_ORDER = ['lagoscp', 'synccare', 'rideshare', 'tidal', 'petrollink', 'prephive', 'geekspace', 'dineease'];

export const PROJECTS = {
  synccare: {
    slug: 'synccare',
    title: 'SyncCare',
    subtitle: 'Hybrid AI Healthcare Platform',
    tagline: 'An intelligent, local-first family healthcare platform providing personalized medical guidance and autonomous care coordination.',
    flagship: false,
    inProgress: true,
    category: 'Django REST',
    endpoint: '/api/ai/chat/',
    httpMethod: 'POST',
    status: { label: 'IN DEVELOPMENT', cls: 'pending' },
    overview: `SyncCare is a hybrid, local-first, intelligent family healthcare platform built to provide personalized, culturally attuned medical guidance, report analysis, environmental advisories, and autonomous care coordination for African families.`,
    gallery: [
      { src: 'syncCarehomepage.png', caption: 'SyncCare Dashboard & Environmental Advisories' },
      { src: 'syncCarefamilyprofilespage.png', caption: 'Centralized Family Profiles & Contextual Memory' },
      { src: 'syncCareaiassistantpage.png', caption: 'Culturally Attuned AI Health Chat Assistant' },
      { src: 'syncCaremedicalanalyzerpage.png', caption: 'Medical Report Analyzer' },
      { src: 'syncCarereminderpage.png', caption: 'Autonomous Care Coordination & Reminders' }
    ],
    sections: [
      {
        h: 'Contextual Medical Memory',
        p: 'An intelligent database that remembers each family member’s chronic conditions, allergies, and past lab reports so the AI reasons over precise history.',
        items: [
          'Automatically injects detailed family context into the system prompt',
          'Eliminates the need for manual re-entry of medical history every session'
        ]
      },
      {
        h: 'Hybrid Online/Offline AI Inference',
        p: 'Seamless fallback routing between cloud intelligence (Google Gemini) and local edge AI (Ollama).',
        items: [
          'Remains functional during internet dropouts via local on-device LLMs',
          'Fast-fail availability checks to prevent UI hangs'
        ]
      },
      {
        h: 'Autonomous Medical Tool Execution',
        p: 'Acts as an active care coordinator instead of a passive chatbot.',
        items: [
          'AI can autonomously trigger backend tools like creating reminders and logging vitals',
          'Executes Python services directly from AI JSON payload outputs'
        ]
      }
    ],
    tech: ['React', 'TypeScript', 'Django', 'Django REST Framework', 'Google Gemini', 'Ollama'],
    github: null
  },
  rideshare: {
    slug: 'rideshare',
    title: 'RideShare',
    subtitle: 'Peer-to-Peer Carpooling Backend',
    tagline: 'A trust-first backend for peer-to-peer ridesharing in Lagos.',
    flagship: false,
    category: 'Django REST',
    endpoint: '/api/v1/rides/escro',
    httpMethod: 'POST',
    status: { label: 'PRODUCTION-READY', cls: 'complete' },
    overview: `RideShare is a production-ready Django REST backend for a peer-to-peer ridesharing platform. It acts as the digital mediator between drivers offering open seats and riders looking to carpool — matching strangers, then earning their trust through a wallet-based escrow system, driver verification, and dynamic penalty logic.`,
    gallery: [
      { src: 'ridesharehomepage.png', caption: 'RideShare Homepage — Trust-First Carpooling UI' },
      { src: 'howrideshareworks.png', caption: 'Escrow & Transaction Flow — How RideShare Works' },
      { src: 'ridesharepage2.png', caption: 'Ride Booking & Seat Allocation Interface' }
    ],
    sections: [
      {
        h: 'Wallet & escrow payment flow',
        p: `To let strangers transact safely, every payment runs through an atomic escrow rather than sitting in limbo between booking and payout.`,
        items: [
          'Riders top up their wallet through Paystack, credited instantly to an internal balance',
          'Booking a seat wraps the request in a database lock, validates the balance, adjusts open seats, and moves funds into an EscrowRecord',
          'If a driver rejects a booking, the escrow reverses in full without ever calling the Paystack API'
        ]
      },
      {
        h: 'Ride lifecycle state machine',
        p: `The state machine behind every ride keeps payouts fair and prevents edge cases.`,
        flow: [
          { label: 'PENDING', dot: 'pending' },
          { label: 'ACTIVE', dot: 'active' },
          { label: 'COMPLETED', dot: 'complete' }
        ],
        flowCaption: 'Published by the driver → started once the ride departs → completed and escrow released to the driver.'
      },
      {
        h: 'Automated cancellation penalties',
        p: `A dynamic penalty mechanism protects driver earnings without punishing riders for genuine early changes of plan.`,
        items: [
          'Rejecting a pending booking, or cancelling before it’s accepted, refunds the rider in full',
          'Cancelling an already-accepted booking within 2 hours of departure splits the escrow 50/50 between rider and driver, and restores the seat'
        ]
      },
      {
        h: 'Trust mechanisms — KYC & ratings',
        p: `Verification and reputation are what let two strangers get in a car together.`,
        items: [
          'Admins verify a driver’s KYC status before they can publish rides',
          'After a completed ride, riders leave a 1–5 star rating, and the driver’s lifetime average updates instantly on their public profile'
        ]
      }
    ],
    tech: ['Django', 'Django REST Framework', 'PostgreSQL', 'Select For Update', 'JWT (SimpleJWT)', 'Paystack API', 'Django Channels'],
    github: null
  },
  prephive: {
    slug: 'prephive',
    title: 'PrepHive',
    subtitle: 'CBT Learning Platform',
    tagline: 'A CBT exam platform built for real exam-day pressure.',
    flagship: false,
    category: 'Django Fullstack',
    endpoint: '/api/v1/exams/session',
    httpMethod: 'POST',
    overview: `PrepHive is a full-featured computer-based-testing platform built with Django, letting students practice exams under real conditions — live timers, auto-submission, and performance tracking from the start.`,
    sections: [
      {
        h: 'What it does',
        p: '',
        items: [
          'Interactive quiz engine with a live timer and automatic submission when time runs out',
          'User dashboard tracking progress and performance history over time',
          'Resource system for downloading study materials alongside practice tests'
        ]
      }
    ],
    tech: ['Django', 'PostgreSQL', 'Bootstrap', 'JavaScript'],
    github: 'https://github.com/Anifowoseolamide/prephive_premium'
  },
  geekspace: {
    slug: 'geekspace',
    title: 'GeekSpace',
    subtitle: 'Campus Information System',
    tagline: 'Keeping a campus in sync — announcements, resources, and people.',
    flagship: false,
    category: 'Django Fullstack',
    endpoint: '/api/v1/announcements',
    httpMethod: 'GET',
    overview: `GeekSpace is a comprehensive web platform for students and administrators to share and access important campus information including announcements, events, academic resources, and departmental updates.`,
    sections: [
      {
        h: 'Public Campus Knowledge Engine',
        p: `Open access layer allowing any campus user to find critical announcements and downloads instantly.`,
        items: [
          'Live campus announcements and event feeds with department-level search and filtering',
          'Academic resource repository for downloading timetables, past questions, and study guides without login bottlenecks'
        ]
      },
      {
        h: 'Student & Departmental Portal',
        p: `Authenticated student experience tailored to individual departments and courses.`,
        items: [
          'Personalized student dashboard with profile management and saved resources',
          'Targeted departmental notifications so students never miss urgent academic updates'
        ]
      },
      {
        h: 'Role-Based Admin Control & File Management',
        p: `Complete administrative suite for departmental officers and system administrators.`,
        items: [
          'Full CRUD management for announcements, events, and departmental resources',
          'File upload/download pipeline supporting local or cloud storage for study materials and timetables',
          'Student roster oversight and direct inquiry management via integrated contact form submissions'
        ]
      }
    ],
    tech: ['Django 5', 'PostgreSQL', 'Python', 'Tailwind CSS', 'HTML5'],
    github: 'https://github.com/Anifowoseolamide/Geekspace'
  },
  dineease: {
    slug: 'dineease',
    title: 'DineEase',
    subtitle: 'Restaurant Management Website',
    tagline: 'Reservations and menus for a modern restaurant, without the front desk.',
    flagship: false,
    category: 'Django Fullstack',
    endpoint: '/api/v1/reservations',
    httpMethod: 'POST',
    overview: `DineEase is a restaurant management platform that moves reservations and menu management online, with an admin layer to keep both under control.`,
    sections: [
      {
        h: 'What it does',
        p: '',
        items: [
          'Booking system with validation rules and admin oversight of reservations',
          'Responsive UI with a media gallery for showcasing the restaurant',
          'Scalable backend handling both content and user interactions'
        ]
      }
    ],
    tech: ['Django', 'PostgreSQL', 'Bootstrap'],
    github: 'https://github.com/Anifowoseolamide/DineEase'
  },
  lagoscp: {
    slug: 'lagoscp',
    title: 'LagosCP',
    subtitle: 'Lagos State Crime Profiling System',
    tagline: 'An AI-powered criminal identification, profiling, and geographic intelligence backend for law enforcement.',
    flagship: true,
    category: 'Django REST',
    endpoint: '/api/v1/identify/scan',
    httpMethod: 'POST',
    status: { label: 'PRODUCTION-READY', cls: 'complete' },
    overview: `LagosCP is an AI-powered criminal identification and profiling platform built for the Lagos State Police Command. Field officers capture a suspect's photograph, run it against a centralised criminal database via facial recognition, instantly surface the full crime history, and log new offences — all with immutable GPS-stamped audit trails.`,
    sections: [
      {
        h: 'Field Biometric Identification Flow',
        p: `Officers capture suspect photos in the field and match them against enrolled mugshots via cloud/self-hosted biometric engines.`,
        items: [
          'Base64 image capture uploaded to Cloudinary as an immutable evidence record and sent to Face++ / CompreFace biometric matching engines',
          'Resolves face_recognition_id to structured Subject records in PostgreSQL and atomically updates GPS coordinates (last_known_lat/lng)',
          'Checks active arrest warrants (ROUTINE, URGENT, CRITICAL) and returns immediate on-screen alerts with full criminal history'
        ]
      },
      {
        h: 'Subject & Offence Lifecycle Tracking',
        p: `Centralises criminal records with structured case numbering and comprehensive risk stratification.`,
        items: [
          'Auto-generates structured Case IDs (e.g. LG-ARB-2026-00184) across 11 crime categories and 5 severity levels',
          'Dynamic risk tiering (LOW to EXTREME) and status state machine (ACTIVE, WANTED, INCARCERATED, DECEASED)',
          'Automatic armed & dangerous flagging when a CRITICAL priority warrant is issued'
        ]
      },
      {
        h: 'Geographic Crime Intelligence',
        p: `Real-time spatial mapping layer for command centre resource allocation and hotspot tracking.`,
        items: [
          'Interactive Leaflet maps rendering incident hotspot clusters sized by volume and colored by crime severity',
          'Live wanted persons layer with pulsing markers and collision-separation coordinate jitter algorithms (~30m separation)'
        ]
      },
      {
        h: 'Immutable Audit Trail & Role-Based Access Control',
        p: `Enforces strict accountability across police divisions and field operations.`,
        items: [
          'Append-only AuditLog models that prevent deletion or modification at the database/ORM layer',
          'Logs officer badge numbers, action codes, GPS coordinates, and IP metadata for every query and write operation',
          'Role-based access control separating FIELD_OFFICER, SUPERVISOR, ANALYST, and ADMIN permissions'
        ]
      }
    ],
    tech: ['Django', 'Django REST Framework', 'PostgreSQL', 'Face++ API', 'CompreFace', 'SimpleJWT', 'Cloudinary', 'React', 'Leaflet.js'],
    github: 'https://github.com/Anifowoseolamide/crime_profiling'
  },
  tidal: {
    slug: 'tidal',
    title: 'Tidal (Scriva)',
    subtitle: 'AI Exam OCR & Grading Platform',
    tagline: 'Async handwriting OCR and automated LLM exam scoring backend built for the 2026 OPay Hackathon.',
    flagship: false,
    category: 'Django REST',
    endpoint: '/api/submissions/',
    httpMethod: 'POST',
    status: { label: 'OPAY HACKATHON 2026', cls: 'complete' },
    overview: `Tidal (Scriva) is an AI-assisted exam handwriting OCR and automated scoring backend built for university exam administration during the 2026 OPay Hackathon. Students submit hand-drawn canvas answers which are processed asynchronously via Celery background workers for handwriting transcription and rubric-aligned LLM evaluation.`,
    sections: [
      {
        h: 'Asynchronous OCR & AI Scoring Pipeline',
        p: `Decouples heavy OCR and LLM grading tasks from HTTP requests to keep API latencies under 200ms.`,
        flow: [
          { label: 'POST /api/submissions/ (202 Accepted)', dot: 'pending' },
          { label: 'CELERY WORKER OCR & LLM', dot: 'active' },
          { label: 'SCORED / FLAGGED FOR REVIEW', dot: 'complete' }
        ],
        flowCaption: 'Submissions return 202 instantly; frontend polls GET /api/submissions/<id>/ every 3s until completion.'
      },
      {
        h: 'Canvas Handwriting Capture Flow',
        p: `Students complete exams on drawing tablets and submit exported PNG canvases tied to enrollment records.`,
        items: [
          'Direct enrollment_id embedding within active exam queries (GET /api/exams/) to eliminate secondary roundtrips',
          'Multipart PNG image upload pipeline processing student handwriting against question-specific rubrics and keywords'
        ]
      },
      {
        h: 'Lecturer Review Queue & Override Engine',
        p: `Human-in-the-loop oversight ensuring grading fairness when AI confidence drops below threshold.`,
        items: [
          'Automatic flagging (is_flagged: true) when OCR or LLM scoring confidence intervals are low',
          'Dedicated review endpoints (POST /api/review/<id>/confirm/ and /override/) allowing lecturers to inspect raw handwriting, OCR text, and AI rationale before authorizing final scores'
        ]
      },
      {
        h: 'Role-Based Access Control & Course Materials',
        p: `Strict JWT role enforcement across student, lecturer, and administrative boundaries.`,
        items: [
          'Role-scoped JWT tokens regulating access to student submission endpoints versus lecturer grading queues',
          'Background extraction pipeline for uploaded course materials (PDF/TXT handouts & syllabi) against which the LLM grades student submissions'
        ]
      }
    ],
    tech: ['Django', 'Django REST Framework', 'Celery', 'PostgreSQL', 'AI Handwriting OCR', 'LLM Grading API', 'SimpleJWT', 'Render'],
    github: 'https://tidal-backend.onrender.com/api'
  },
  petrollink: {
    slug: 'petrollink',
    title: 'PetrolLink',
    subtitle: 'Detection & Simulation Engine Backend',
    tagline: 'The Brain of PetrolLink: Digital twin simulation and real-time intelligent analysis engine built for the Nexus Hackathon Epe (2nd Place Winner).',
    flagship: false,
    category: 'Django REST',
    endpoint: '/api/v1/detection/analyze',
    httpMethod: 'POST',
    status: { label: '2ND PLACE — NEXUS HACKATHON EPE', cls: 'complete' },
    overview: `PetrolLink is powered by a core Detection & Simulation Engine — 'The Brain' of the system. The backend doesn't just pass data; it understands it. To make the platform functional without physical IoT hardware attached, it combines a Digital Twin simulation engine (simulation.py) generating realistic sensor telemetry with stochastic noise and an Intelligent Analysis detection layer (detection.py) for real-time leak and theft alerting.`,
    sections: [
      {
        h: 'Digital Twin Simulation Engine (simulation.py)',
        p: `To make the platform functional even without real hardware attached, we built a simulation engine that generates realistic sensor data.`,
        items: [
          'Generates realistic sensor telemetry across core pipeline metrics including Pressure, Flow, and Temperature',
          'Injects stochastic noise into synthetic sensor streams to accurately mimic the imperfections and fluctuations of real-world hardware sensors',
          'Decouples platform end-to-end testing, alert triggers, and frontend visualization from physical IoT sensor hardware'
        ]
      },
      {
        h: 'Intelligent Analysis & Detection Layer (detection.py)',
        p: `As data flows through the system, it hits a detection layer where the backend understands incoming sensor metrics and flags critical anomalies in real time.`,
        flow: [
          { label: 'SIMULATOR STREAM (simulation.py)', dot: 'pending' },
          { label: 'DETECTION ENGINE (detection.py)', dot: 'active' },
          { label: 'CRITICAL ALERT / WARNING', dot: 'complete' }
        ],
        flowCaption: 'Stochastic sensor data passes through detection.py → evaluated for pressure drops (>1.5 PSI) and flow discrepancies → triggers instant real-time alerts.',
        items: [
          'Leak Detection: Continuously monitors pressure checks; if it sees a rapid pressure drop (>1.5 PSI) between two checks, it instantly flags a Critical Alert',
          'Theft Detection: Compares how much oil enters the pipe versus how much leaves; if there is a Flow Discrepancy (suggesting an illegal tap), it triggers a Warning'
        ]
      },
      {
        h: 'Real-Time Telemetry & Supply Distribution Tracking',
        p: `Provides real-time visibility into pipeline health, station reserves, and supply chain throughput.`,
        items: [
          'Real-time status and telemetry APIs connecting detection signals with monitoring dashboards',
          'Secured 2nd Place overall at the Nexus Hackathon Epe for innovative backend architecture and real-time detection capabilities'
        ]
      }
    ],
    tech: ['Python', 'Django', 'Django REST Framework', 'PostgreSQL', 'Stochastic Simulation', 'Anomaly Detection', 'API Design'],
    github: null
  }
};
