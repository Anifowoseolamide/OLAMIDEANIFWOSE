(() => {
  // js/data.js
  var PROFILE = {
    name: "Anifowoshe Olamide",
    roleHeadline: "Backend developer focused on API design and scalable, transaction-safe systems \u2014 currently building at Ndara.ai.",
    location: "Lagos, Nigeria",
    availability: "ACTIVE \u2014 OPEN TO OPPORTUNITIES",
    email: "olamideanifowoshe2004@gmail.com",
    phone: "+234 901 051 6717",
    github: "https://github.com/Anifowoseolamide",
    aboutParagraphs: [
      "I'm a backend developer with a Computer Science degree from Lagos State University. I care deeply about the parts of a system users never see directly \u2014 API design, data integrity, and making sure money and state don't get lost between requests.",
      "I'm currently a <strong>Backend Developer at Ndara.ai</strong>, building backend features for a WhatsApp-integrated, AI-driven SaaS platform. Outside of work, I compete in high-stakes hackathons \u2014 leading backend development for <strong>Tidal (Scriva)</strong> at the 2026 OPay Hackathon and winning 2nd Place at the Nexus Hackathon Epe with <strong>PetrolLink</strong> \u2014 alongside architecting systems like <strong>LagosCP</strong> and <strong>RideShare</strong>."
    ],
    terminalStats: [
      { prompt: "$ whoami", val: "olamide --role=backend-engineer" },
      { prompt: "$ stack --core", val: "Python / Django / REST / PostgreSQL / Docker" },
      { prompt: "$ focus", val: "Atomic Escrow Transactions, AI Biometric APIs, Race-Condition Protection, API Design" },
      { prompt: "$ education", val: "B.Sc. CS @ Lagos State University (2026)" }
    ]
  };
  var EXPERIENCE = [
    {
      role: "Backend Developer",
      org: "Ndara.ai",
      dates: "2025 \u2014 Present",
      status: "ACTIVE",
      items: [
        "Building backend features for a SaaS platform integrating WhatsApp APIs and AI-driven automation",
        "Designing and maintaining scalable APIs and system architecture",
        "Coordinating backend tasks and reviewing code across the team"
      ]
    },
    {
      role: "Lead Backend Developer (Hackathon)",
      org: "Tidal / Scriva \u2014 2026 OPay Hackathon",
      dates: "2026",
      status: "COMPLETE",
      items: [
        "Architected the complete REST API for an AI-powered exam handwriting OCR & automated grading platform",
        "Engineered async Celery pipelines for background OCR canvas transcription and LLM-based answer evaluation",
        "Built role-based JWT workflows separating student exam submission flows and lecturer review queues"
      ]
    },
    {
      role: "Backend Developer (Hackathon \u2014 2nd Place Winner)",
      org: "PetrolLink \u2014 Nexus Hackathon Epe",
      dates: "2026",
      status: "COMPLETE",
      items: [
        "Engineered the core Detection & Simulation Engine ('The Brain') \u2014 enabling the platform to understand sensor telemetry and function without physical IoT hardware",
        "Built a Digital Twin simulation engine (simulation.py) generating realistic Pressure, Flow, and Temperature data with stochastic noise to mimic real-world sensors",
        "Developed an Intelligent Analysis detection layer (detection.py) with rapid pressure drop leak alerting (>1.5 PSI) and flow discrepancy theft detection",
        "Led the backend architecture and development to secure 2nd Place overall at the Nexus Hackathon Epe"
      ]
    }
  ];
  var EDUCATION = [
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
  var PROJECT_ORDER = ["lagoscp", "synccare", "rideshare", "tidal", "petrollink", "prephive", "geekspace", "dineease"];
  var PROJECTS = {
    synccare: {
      slug: "synccare",
      title: "SyncCare",
      subtitle: "Hybrid AI Healthcare Platform",
      tagline: "An intelligent, local-first family healthcare platform providing personalized medical guidance and autonomous care coordination.",
      flagship: false,
      inProgress: true,
      category: "Django REST",
      endpoint: "/api/ai/chat/",
      httpMethod: "POST",
      status: { label: "IN DEVELOPMENT", cls: "pending" },
      overview: `SyncCare is a hybrid, local-first, intelligent family healthcare platform built to provide personalized, culturally attuned medical guidance, report analysis, environmental advisories, and autonomous care coordination for African families.`,
      gallery: [
        { src: "syncCarehomepage.png", caption: "SyncCare Dashboard & Environmental Advisories" },
        { src: "syncCarefamilyprofilespage.png", caption: "Centralized Family Profiles & Contextual Memory" },
        { src: "syncCareaiassistantpage.png", caption: "Culturally Attuned AI Health Chat Assistant" },
        { src: "syncCaremedicalanalyzerpage.png", caption: "Medical Report Analyzer" },
        { src: "syncCarereminderpage.png", caption: "Autonomous Care Coordination & Reminders" }
      ],
      sections: [
        {
          h: "Contextual Medical Memory",
          p: "An intelligent database that remembers each family member\u2019s chronic conditions, allergies, and past lab reports so the AI reasons over precise history.",
          items: [
            "Automatically injects detailed family context into the system prompt",
            "Eliminates the need for manual re-entry of medical history every session"
          ]
        },
        {
          h: "Hybrid Online/Offline AI Inference",
          p: "Seamless fallback routing between cloud intelligence (Google Gemini) and local edge AI (Ollama).",
          items: [
            "Remains functional during internet dropouts via local on-device LLMs",
            "Fast-fail availability checks to prevent UI hangs"
          ]
        },
        {
          h: "Autonomous Medical Tool Execution",
          p: "Acts as an active care coordinator instead of a passive chatbot.",
          items: [
            "AI can autonomously trigger backend tools like creating reminders and logging vitals",
            "Executes Python services directly from AI JSON payload outputs"
          ]
        }
      ],
      tech: ["React", "TypeScript", "Django", "Django REST Framework", "Google Gemini", "Ollama"],
      github: null
    },
    rideshare: {
      slug: "rideshare",
      title: "RideShare",
      subtitle: "Peer-to-Peer Carpooling Backend",
      tagline: "A trust-first backend for peer-to-peer ridesharing in Lagos.",
      flagship: false,
      category: "Django REST",
      endpoint: "/api/v1/rides/escro",
      httpMethod: "POST",
      status: { label: "PRODUCTION-READY", cls: "complete" },
      overview: `RideShare is a production-ready Django REST backend for a peer-to-peer ridesharing platform. It acts as the digital mediator between drivers offering open seats and riders looking to carpool \u2014 matching strangers, then earning their trust through a wallet-based escrow system, driver verification, and dynamic penalty logic.`,
      gallery: [
        { src: "ridesharehomepage.png", caption: "RideShare Homepage \u2014 Trust-First Carpooling UI" },
        { src: "howrideshareworks.png", caption: "Escrow & Transaction Flow \u2014 How RideShare Works" },
        { src: "ridesharepage2.png", caption: "Ride Booking & Seat Allocation Interface" }
      ],
      sections: [
        {
          h: "Wallet & escrow payment flow",
          p: `To let strangers transact safely, every payment runs through an atomic escrow rather than sitting in limbo between booking and payout.`,
          items: [
            "Riders top up their wallet through Paystack, credited instantly to an internal balance",
            "Booking a seat wraps the request in a database lock, validates the balance, adjusts open seats, and moves funds into an EscrowRecord",
            "If a driver rejects a booking, the escrow reverses in full without ever calling the Paystack API"
          ]
        },
        {
          h: "Ride lifecycle state machine",
          p: `The state machine behind every ride keeps payouts fair and prevents edge cases.`,
          flow: [
            { label: "PENDING", dot: "pending" },
            { label: "ACTIVE", dot: "active" },
            { label: "COMPLETED", dot: "complete" }
          ],
          flowCaption: "Published by the driver \u2192 started once the ride departs \u2192 completed and escrow released to the driver."
        },
        {
          h: "Automated cancellation penalties",
          p: `A dynamic penalty mechanism protects driver earnings without punishing riders for genuine early changes of plan.`,
          items: [
            "Rejecting a pending booking, or cancelling before it\u2019s accepted, refunds the rider in full",
            "Cancelling an already-accepted booking within 2 hours of departure splits the escrow 50/50 between rider and driver, and restores the seat"
          ]
        },
        {
          h: "Trust mechanisms \u2014 KYC & ratings",
          p: `Verification and reputation are what let two strangers get in a car together.`,
          items: [
            "Admins verify a driver\u2019s KYC status before they can publish rides",
            "After a completed ride, riders leave a 1\u20135 star rating, and the driver\u2019s lifetime average updates instantly on their public profile"
          ]
        }
      ],
      tech: ["Django", "Django REST Framework", "PostgreSQL", "Select For Update", "JWT (SimpleJWT)", "Paystack API", "Django Channels"],
      github: "https://github.com/Anifowoseolamide/LiftLink"
    },
    prephive: {
      slug: "prephive",
      title: "PrepHive",
      subtitle: "CBT Learning Platform",
      tagline: "A CBT exam platform built for real exam-day pressure.",
      flagship: false,
      category: "Django Fullstack",
      endpoint: "/api/v1/exams/session",
      httpMethod: "POST",
      overview: `PrepHive is a full-featured computer-based-testing platform built with Django, letting students practice exams under real conditions \u2014 live timers, auto-submission, and performance tracking from the start.`,
      sections: [
        {
          h: "What it does",
          p: "",
          items: [
            "Interactive quiz engine with a live timer and automatic submission when time runs out",
            "User dashboard tracking progress and performance history over time",
            "Resource system for downloading study materials alongside practice tests"
          ]
        }
      ],
      tech: ["Django", "PostgreSQL", "Bootstrap", "JavaScript"],
      github: "https://github.com/Anifowoseolamide/prephive_premium"
    },
    geekspace: {
      slug: "geekspace",
      title: "GeekSpace",
      subtitle: "Campus Information System",
      tagline: "Keeping a campus in sync \u2014 announcements, resources, and people.",
      flagship: false,
      category: "Django Fullstack",
      endpoint: "/api/v1/announcements",
      httpMethod: "GET",
      overview: `GeekSpace is a comprehensive web platform for students and administrators to share and access important campus information including announcements, events, academic resources, and departmental updates.`,
      sections: [
        {
          h: "Public Campus Knowledge Engine",
          p: `Open access layer allowing any campus user to find critical announcements and downloads instantly.`,
          items: [
            "Live campus announcements and event feeds with department-level search and filtering",
            "Academic resource repository for downloading timetables, past questions, and study guides without login bottlenecks"
          ]
        },
        {
          h: "Student & Departmental Portal",
          p: `Authenticated student experience tailored to individual departments and courses.`,
          items: [
            "Personalized student dashboard with profile management and saved resources",
            "Targeted departmental notifications so students never miss urgent academic updates"
          ]
        },
        {
          h: "Role-Based Admin Control & File Management",
          p: `Complete administrative suite for departmental officers and system administrators.`,
          items: [
            "Full CRUD management for announcements, events, and departmental resources",
            "File upload/download pipeline supporting local or cloud storage for study materials and timetables",
            "Student roster oversight and direct inquiry management via integrated contact form submissions"
          ]
        }
      ],
      tech: ["Django 5", "PostgreSQL", "Python", "Tailwind CSS", "HTML5"],
      github: "https://github.com/Anifowoseolamide/Geekspace"
    },
    dineease: {
      slug: "dineease",
      title: "DineEase",
      subtitle: "Restaurant Management Website",
      tagline: "Reservations and menus for a modern restaurant, without the front desk.",
      flagship: false,
      category: "Django Fullstack",
      endpoint: "/api/v1/reservations",
      httpMethod: "POST",
      overview: `DineEase is a restaurant management platform that moves reservations and menu management online, with an admin layer to keep both under control.`,
      sections: [
        {
          h: "What it does",
          p: "",
          items: [
            "Booking system with validation rules and admin oversight of reservations",
            "Responsive UI with a media gallery for showcasing the restaurant",
            "Scalable backend handling both content and user interactions"
          ]
        }
      ],
      tech: ["Django", "PostgreSQL", "Bootstrap"],
      github: "https://github.com/Anifowoseolamide/DineEase"
    },
    lagoscp: {
      slug: "lagoscp",
      title: "LagosCP",
      subtitle: "Lagos State Crime Profiling System",
      tagline: "An AI-powered criminal identification, profiling, and geographic intelligence backend for law enforcement.",
      flagship: true,
      category: "Django REST",
      endpoint: "/api/v1/identify/scan",
      httpMethod: "POST",
      status: { label: "PRODUCTION-READY", cls: "complete" },
      overview: `LagosCP is an AI-powered criminal identification and profiling platform built for the Lagos State Police Command. Field officers capture a suspect's photograph, run it against a centralised criminal database via facial recognition, instantly surface the full crime history, and log new offences \u2014 all with immutable GPS-stamped audit trails.`,
      sections: [
        {
          h: "Field Biometric Identification Flow",
          p: `Officers capture suspect photos in the field and match them against enrolled mugshots via cloud/self-hosted biometric engines.`,
          items: [
            "Base64 image capture uploaded to Cloudinary as an immutable evidence record and sent to Face++ / CompreFace biometric matching engines",
            "Resolves face_recognition_id to structured Subject records in PostgreSQL and atomically updates GPS coordinates (last_known_lat/lng)",
            "Checks active arrest warrants (ROUTINE, URGENT, CRITICAL) and returns immediate on-screen alerts with full criminal history"
          ]
        },
        {
          h: "Subject & Offence Lifecycle Tracking",
          p: `Centralises criminal records with structured case numbering and comprehensive risk stratification.`,
          items: [
            "Auto-generates structured Case IDs (e.g. LG-ARB-2026-00184) across 11 crime categories and 5 severity levels",
            "Dynamic risk tiering (LOW to EXTREME) and status state machine (ACTIVE, WANTED, INCARCERATED, DECEASED)",
            "Automatic armed & dangerous flagging when a CRITICAL priority warrant is issued"
          ]
        },
        {
          h: "Geographic Crime Intelligence",
          p: `Real-time spatial mapping layer for command centre resource allocation and hotspot tracking.`,
          items: [
            "Interactive Leaflet maps rendering incident hotspot clusters sized by volume and colored by crime severity",
            "Live wanted persons layer with pulsing markers and collision-separation coordinate jitter algorithms (~30m separation)"
          ]
        },
        {
          h: "Immutable Audit Trail & Role-Based Access Control",
          p: `Enforces strict accountability across police divisions and field operations.`,
          items: [
            "Append-only AuditLog models that prevent deletion or modification at the database/ORM layer",
            "Logs officer badge numbers, action codes, GPS coordinates, and IP metadata for every query and write operation",
            "Role-based access control separating FIELD_OFFICER, SUPERVISOR, ANALYST, and ADMIN permissions"
          ]
        }
      ],
      tech: ["Django", "Django REST Framework", "PostgreSQL", "Face++ API", "CompreFace", "SimpleJWT", "Cloudinary", "React", "Leaflet.js"],
      github: "https://github.com/Anifowoseolamide/crime_profiling"
    },
    tidal: {
      slug: "tidal",
      title: "Tidal (Scriva)",
      subtitle: "AI Exam OCR & Grading Platform",
      tagline: "Async handwriting OCR and automated LLM exam scoring backend built for the 2026 OPay Hackathon.",
      flagship: false,
      category: "Django REST",
      endpoint: "/api/submissions/",
      httpMethod: "POST",
      status: { label: "OPAY HACKATHON 2026", cls: "complete" },
      overview: `Tidal (Scriva) is an AI-assisted exam handwriting OCR and automated scoring backend built for university exam administration during the 2026 OPay Hackathon. Students submit hand-drawn canvas answers which are processed asynchronously via Celery background workers for handwriting transcription and rubric-aligned LLM evaluation.`,
      sections: [
        {
          h: "Asynchronous OCR & AI Scoring Pipeline",
          p: `Decouples heavy OCR and LLM grading tasks from HTTP requests to keep API latencies under 200ms.`,
          flow: [
            { label: "POST /api/submissions/ (202 Accepted)", dot: "pending" },
            { label: "CELERY WORKER OCR & LLM", dot: "active" },
            { label: "SCORED / FLAGGED FOR REVIEW", dot: "complete" }
          ],
          flowCaption: "Submissions return 202 instantly; frontend polls GET /api/submissions/<id>/ every 3s until completion."
        },
        {
          h: "Canvas Handwriting Capture Flow",
          p: `Students complete exams on drawing tablets and submit exported PNG canvases tied to enrollment records.`,
          items: [
            "Direct enrollment_id embedding within active exam queries (GET /api/exams/) to eliminate secondary roundtrips",
            "Multipart PNG image upload pipeline processing student handwriting against question-specific rubrics and keywords"
          ]
        },
        {
          h: "Lecturer Review Queue & Override Engine",
          p: `Human-in-the-loop oversight ensuring grading fairness when AI confidence drops below threshold.`,
          items: [
            "Automatic flagging (is_flagged: true) when OCR or LLM scoring confidence intervals are low",
            "Dedicated review endpoints (POST /api/review/<id>/confirm/ and /override/) allowing lecturers to inspect raw handwriting, OCR text, and AI rationale before authorizing final scores"
          ]
        },
        {
          h: "Role-Based Access Control & Course Materials",
          p: `Strict JWT role enforcement across student, lecturer, and administrative boundaries.`,
          items: [
            "Role-scoped JWT tokens regulating access to student submission endpoints versus lecturer grading queues",
            "Background extraction pipeline for uploaded course materials (PDF/TXT handouts & syllabi) against which the LLM grades student submissions"
          ]
        }
      ],
      tech: ["Django", "Django REST Framework", "Celery", "PostgreSQL", "AI Handwriting OCR", "LLM Grading API", "SimpleJWT", "Render"],
      github: "https://tidal-backend.onrender.com/api"
    },
    petrollink: {
      slug: "petrollink",
      title: "PetrolLink",
      subtitle: "Detection & Simulation Engine Backend",
      tagline: "The Brain of PetrolLink: Digital twin simulation and real-time intelligent analysis engine built for the Nexus Hackathon Epe (2nd Place Winner).",
      flagship: false,
      category: "Django REST",
      endpoint: "/api/v1/detection/analyze",
      httpMethod: "POST",
      status: { label: "2ND PLACE \u2014 NEXUS HACKATHON EPE", cls: "complete" },
      overview: `PetrolLink is powered by a core Detection & Simulation Engine \u2014 'The Brain' of the system. The backend doesn't just pass data; it understands it. To make the platform functional without physical IoT hardware attached, it combines a Digital Twin simulation engine (simulation.py) generating realistic sensor telemetry with stochastic noise and an Intelligent Analysis detection layer (detection.py) for real-time leak and theft alerting.`,
      sections: [
        {
          h: "Digital Twin Simulation Engine (simulation.py)",
          p: `To make the platform functional even without real hardware attached, we built a simulation engine that generates realistic sensor data.`,
          items: [
            "Generates realistic sensor telemetry across core pipeline metrics including Pressure, Flow, and Temperature",
            "Injects stochastic noise into synthetic sensor streams to accurately mimic the imperfections and fluctuations of real-world hardware sensors",
            "Decouples platform end-to-end testing, alert triggers, and frontend visualization from physical IoT sensor hardware"
          ]
        },
        {
          h: "Intelligent Analysis & Detection Layer (detection.py)",
          p: `As data flows through the system, it hits a detection layer where the backend understands incoming sensor metrics and flags critical anomalies in real time.`,
          flow: [
            { label: "SIMULATOR STREAM (simulation.py)", dot: "pending" },
            { label: "DETECTION ENGINE (detection.py)", dot: "active" },
            { label: "CRITICAL ALERT / WARNING", dot: "complete" }
          ],
          flowCaption: "Stochastic sensor data passes through detection.py \u2192 evaluated for pressure drops (>1.5 PSI) and flow discrepancies \u2192 triggers instant real-time alerts.",
          items: [
            "Leak Detection: Continuously monitors pressure checks; if it sees a rapid pressure drop (>1.5 PSI) between two checks, it instantly flags a Critical Alert",
            "Theft Detection: Compares how much oil enters the pipe versus how much leaves; if there is a Flow Discrepancy (suggesting an illegal tap), it triggers a Warning"
          ]
        },
        {
          h: "Real-Time Telemetry & Supply Distribution Tracking",
          p: `Provides real-time visibility into pipeline health, station reserves, and supply chain throughput.`,
          items: [
            "Real-time status and telemetry APIs connecting detection signals with monitoring dashboards",
            "Secured 2nd Place overall at the Nexus Hackathon Epe for innovative backend architecture and real-time detection capabilities"
          ]
        }
      ],
      tech: ["Python", "Django", "Django REST Framework", "PostgreSQL", "Stochastic Simulation", "Anomaly Detection", "API Design"],
      github: null
    }
  };

  // js/components.js
  function initials(title) {
    const clean = title.replace(/[()]/g, "").trim();
    const words = clean.split(/[\s\-\/_]+/).filter(Boolean);
    if (words.length >= 2) {
      return (words[0][0] + words[1][0]).toUpperCase();
    }
    const capitals = clean.match(/[A-Z]/g);
    if (capitals && capitals.length >= 2) {
      return capitals.slice(0, 2).join("").toUpperCase();
    }
    return clean.slice(0, 2).toUpperCase();
  }
  function techChips(arr, max = 4) {
    return arr.slice(0, max).map((t) => `<span class="proj-tech-chip">${t}</span>`).join("");
  }
  function techTags(arr) {
    return arr.map((t) => `<span class="tech-tag">${t}</span>`).join("");
  }
  var GH_ICON = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>`;
  var LI_ICON = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`;
  function renderFooter() {
    return `
    <footer class="site-footer wrap">
      <div class="footer-divider"></div>
      <div class="footer-inner">
        <div class="footer-brand">
          <a href="#/" class="footer-name">Olamide Anifowose</a>
          <p class="footer-role">Backend Developer &middot; APIs, Systems &amp; Architecture</p>
          <p class="footer-bio-short">
            Specializing in high-concurrency API design, atomic escrow transactions, and robust database architecture.
          </p>
        </div>
        <div class="footer-nav">
          <div class="footer-nav-col">
            <span class="footer-col-title">Navigation</span>
            <a href="#/">Home</a>
            <a href="#/about">About</a>
            <a href="#/projects">Projects</a>
            <a href="#/experience">Experience</a>
            <a href="#/contact">Contact</a>
          </div>
          <div class="footer-nav-col">
            <span class="footer-col-title">Connect</span>
            <a href="${PROFILE.github}" target="_blank" rel="noopener">GitHub</a>
            <a href="https://www.linkedin.com/in/anifowoshe-olamide" target="_blank" rel="noopener">LinkedIn</a>
            <a href="mailto:${PROFILE.email}">Email</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <span class="footer-copy">&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} Olamide Anifowose. All rights reserved.</span>
        <span class="footer-location">Lagos, Nigeria &middot; Available Worldwide</span>
      </div>
    </footer>
  `;
  }
  function renderHeroSection() {
    return `
    <section id="home-hero" class="wrap fade-in">
      <div class="hero-avatar">
        <img src="images/avatar.jpg" alt="Anifowoshe Olamide" width="80" height="80" />
      </div>

      <h1 class="hero-name">Backend Developer,<br>Builder, Problem Solver.</h1>

      <p class="hero-role">
        Hi, I'm Olamide. \u{1F44B}<br>
        ${PROFILE.roleHeadline}
      </p>

      <div class="hero-social">
        <a href="${PROFILE.github}" target="_blank" rel="noopener" aria-label="GitHub">${GH_ICON}</a>
        <a href="https://www.linkedin.com/in/anifowoshe-olamide" target="_blank" rel="noopener" aria-label="LinkedIn">${LI_ICON}</a>
        <a href="mailto:${PROFILE.email}" aria-label="Email" style="font-size:13px; color:var(--text-muted); font-weight:500; transition:color 0.2s;" onmouseover="this.style.color='var(--accent)'" onmouseout="this.style.color='var(--text-muted)'">${PROFILE.email}</a>
      </div>

      <!-- 3-Photo Showcase Grid matching Screenshot 365 -->
      <div class="hero-photo-showcase">
        <div class="showcase-card tilt-left">
          <img src="images/showcase1.jpg" alt="Olamide Anifowoshe - Tech & Community" loading="lazy" />
        </div>
        <div class="showcase-card tilt-center">
          <img src="images/showcase2.jpg" alt="Anifowoshe Olamide - Backend Systems" loading="lazy" />
        </div>
        <div class="showcase-card tilt-right">
          <img src="images/showcase3.jpg" alt="Olamide Anifowoshe - Builder & Problem Solver" loading="lazy" />
        </div>
      </div>
    </section>
  `;
  }
  function renderFeaturedCard(p) {
    return `
    <a class="project-featured fade-in" href="#/project/${p.slug}">
      <div class="featured-badge">\u2605 Featured Project</div>
      <h3>${p.title} \u2014 ${p.subtitle}</h3>
      <p>${p.tagline}</p>
      <div class="proj-tech-chips" style="margin-bottom:16px;">
        ${techChips(p.tech, 6)}
      </div>
      <span class="proj-arrow-link">Explore architecture &amp; docs \u2192</span>
    </a>
  `;
  }
  function renderProjectCard(p) {
    return `
    <a class="project-card fade-in" href="#/project/${p.slug}" data-category="${p.category || "All"}">
      <div class="proj-initials">${initials(p.title)}</div>
      <h4>${p.title}</h4>
      <p>${p.tagline}</p>
      <div class="proj-tech-chips">${techChips(p.tech, 3)}</div>
      <span class="proj-arrow-link">View Project \u2192</span>
    </a>
  `;
  }
  var SKILL_CATEGORIES = [
    { label: "Languages", skills: ["Python", "SQL", "JavaScript", "VB.NET"] },
    { label: "Frameworks & APIs", skills: ["Django", "Django REST Framework", "Django Channels", "WebSockets", "SimpleJWT", "API Design"] },
    { label: "Databases & Concurrency", skills: ["PostgreSQL", "Select For Update", "Relational Schema Design", "Query Optimization", "Database Migrations"] },
    { label: "AI, Biometrics & Security", skills: ["AI Biometrics (Face++ / CompreFace)", "Atomic Escrow Transactions", "Celery", "LLM Grading", "RBAC"] },
    { label: "Infrastructure & DevOps", skills: ["Docker", "Cloudinary", "Render", "Git", "GitHub Actions", "Linux / Bash"] }
  ];
  function renderSkillsSection() {
    return `
    <div class="skills-block fade-in">
      <p class="section-label">Technical Skills</p>
      <div class="skills-table">
        ${SKILL_CATEGORIES.map((cat) => `
          <div class="skills-row">
            <span class="skills-row-label">${cat.label}</span>
            <div class="skills-chips">
              ${cat.skills.map((s) => `<span class="skill-chip">${s}</span>`).join("")}
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  `;
  }
  function renderEducationBlock() {
    return `
    <div class="education-block fade-in">
      <p class="section-label">Education &amp; Credentials</p>
      <div class="edu-list">
        ${EDUCATION.map((item) => `
          <div class="edu-item">
            <div class="edu-role">${item.role}</div>
            <div class="edu-org">${item.org} &mdash; ${item.dates}</div>
            ${item.note ? `<p class="edu-note">${item.note}</p>` : ""}
          </div>
        `).join("")}
      </div>
    </div>
  `;
  }
  function renderLandingPageTemplate() {
    const flagship = PROJECTS["lagoscp"];
    const previewProjects = ["rideshare", "tidal"].map((slug) => PROJECTS[slug]);
    return `
    ${renderHeroSection()}

    <!-- Teaser: About -->
    <section class="wrap teaser-section fade-in">
      <div class="teaser-header">
        <p class="section-label">About</p>
        <h2 class="teaser-title">Architecting for resilience behind the scenes.</h2>
      </div>
      <div class="teaser-body">
        <p class="teaser-desc">
          I care deeply about the parts of a system users never see directly \u2014 API design, data integrity, and making sure money and state don't get lost between requests. Currently engineering backend features at <strong>Ndara.ai</strong>.
        </p>
        <div class="teaser-link-wrap">
          <a href="#/about" class="btn btn-ghost">Read Full Story &amp; Skills &rarr;</a>
        </div>
      </div>
    </section>

    <!-- Teaser: Selected Work -->
    <section class="wrap teaser-section fade-in">
      <div class="teaser-header">
        <p class="section-label">Selected Work</p>
        <h2 class="teaser-title">Featured Systems &amp; APIs</h2>
      </div>

      ${renderFeaturedCard(flagship)}

      <div class="project-grid" style="margin-top: 36px;">
        ${previewProjects.map((p) => renderProjectCard(p)).join("")}
      </div>

      <div class="teaser-action">
        <a href="#/projects" class="btn btn-ghost">Explore All Projects (${PROJECT_ORDER.length}) &rarr;</a>
      </div>
    </section>

    <!-- Teaser: Experience -->
    <section class="wrap teaser-section fade-in">
      <div class="teaser-header">
        <p class="section-label">Experience</p>
        <h2 class="teaser-title">Recent Roles &amp; Competitions</h2>
      </div>

      <div class="exp-list">
        ${EXPERIENCE.slice(0, 2).map((item) => `
          <div class="exp-item">
            <div class="exp-left">
              <span class="exp-org">${item.org}</span>
              <span class="exp-role">${item.role}</span>
              <span class="exp-status ${item.status === "ACTIVE" ? "active" : "complete"}">
                <span class="exp-status-dot"></span>
                ${item.status === "ACTIVE" ? "Present" : item.status}
              </span>
            </div>
            <span class="exp-dates">${item.dates}</span>
            <ul class="exp-bullets">
              ${item.items.slice(0, 2).map((b) => `<li>${b}</li>`).join("")}
            </ul>
          </div>
        `).join("")}
      </div>

      <div class="teaser-action">
        <a href="#/experience" class="btn btn-ghost">View Full Experience &amp; Education &rarr;</a>
      </div>
    </section>

    <!-- Callout Banner: Collaborate -->
    <section class="wrap fade-in">
      <div class="cta-banner">
        <p class="section-label">Collaborate</p>
        <h2>Have a system challenge or project in mind?</h2>
        <p>Available for full-time backend engineering roles, API architecture consultations, and select engineering contracts.</p>
        <div class="cta-actions">
          <a href="#/contact" class="btn btn-primary">Get In Touch &rarr;</a>
          <a href="#/projects" class="btn btn-ghost">Browse Architecture &rarr;</a>
        </div>
      </div>
    </section>

    ${renderFooter()}
  `;
  }
  function renderAboutPageTemplate() {
    return `
    <div class="page-wrap wrap fade-in">
      <header class="page-header">
        <span class="page-breadcrumb">PROFILE &amp; BACKGROUND</span>
        <h1 class="page-title">About Me</h1>
        <p class="page-subtitle">
          Backend Developer with a deep focus on API design, atomic transactions, and scalable data layers.
        </p>
      </header>

      <div class="about-grid">
        <div class="about-body">
          <p>
            I'm a backend developer based in Lagos, Nigeria with a Computer Science degree from Lagos State University. My focus is on the foundational architecture of digital products \u2014 the parts users never see directly, but feel immediately when they fail: API design, data integrity, and making sure money, state, and concurrency don't get lost between requests.
          </p>
          <p>
            I currently serve as a <strong>Backend Developer at Ndara.ai</strong>, engineering scalable backend services and AI-driven automation workflows integrated with WhatsApp APIs. Before and alongside this, I've architected backend engines under high-stakes hackathon environments \u2014 leading backend development for <strong>Tidal (Scriva)</strong> at the 2026 OPay Hackathon and winning 2nd Place at the Nexus Hackathon Epe with <strong>PetrolLink</strong>.
          </p>
          <p>
            When building systems, my core priority is transaction safety. Whether it's row-level locking with <code>select_for_update()</code> to eliminate wallet double-spending or designing async Celery workers for OCR transcription, I strive to make distributed workflows predictable, auditable, and resilient to failure.
          </p>
          <p>
            I believe that great backend systems are easy for other developers to integrate with and hard for bad actors or concurrent requests to break.
          </p>
        </div>

        <div class="about-portrait-col">
          <div class="about-photo-card">
            <img src="images/about_portrait.jpg" alt="Anifowoshe Olamide" loading="lazy" />
          </div>
          <div class="about-portrait-meta">
            <div class="portrait-badge">
              <span class="portrait-dot"></span>
              <span>Lagos, Nigeria &middot; WAT (UTC+1)</span>
            </div>
            <p class="portrait-note">Available for full-time backend roles &amp; contracts</p>
          </div>
        </div>
      </div>

      <div class="about-divider"></div>

      ${renderSkillsSection()}

      <div class="about-divider"></div>

      ${renderEducationBlock()}

      <div class="page-ctas">
        <a href="#/projects" class="btn btn-primary">See What I've Built &rarr;</a>
        <a href="#/contact" class="btn btn-ghost">Get In Touch &rarr;</a>
      </div>
    </div>

    ${renderFooter()}
  `;
  }
  function renderExperiencePageTemplate() {
    return `
    <div class="page-wrap wrap fade-in">
      <header class="page-header">
        <span class="page-breadcrumb">CAREER &amp; TRACK RECORD</span>
        <h1 class="page-title">Experience &amp; Leadership</h1>
        <p class="page-subtitle">
          Engineering high-concurrency APIs, hackathon-winning architectures, and production systems.
        </p>
      </header>

      <div class="exp-list">
        ${EXPERIENCE.map((item) => `
          <div class="exp-item">
            <div class="exp-left">
              <span class="exp-org">${item.org}</span>
              <span class="exp-role">${item.role}</span>
              <span class="exp-status ${item.status === "ACTIVE" ? "active" : "complete"}">
                <span class="exp-status-dot"></span>
                ${item.status === "ACTIVE" ? "Present" : item.status}
              </span>
            </div>
            <span class="exp-dates">${item.dates}</span>
            <ul class="exp-bullets">
              ${item.items.map((b) => `<li>${b}</li>`).join("")}
            </ul>
          </div>
        `).join("")}
      </div>

      <div class="about-divider"></div>

      ${renderEducationBlock()}

      <div class="page-ctas">
        <a href="#/projects" class="btn btn-primary">Explore Project Details &rarr;</a>
        <a href="#/contact" class="btn btn-ghost">Contact Me &rarr;</a>
      </div>
    </div>

    ${renderFooter()}
  `;
  }
  function renderProjectsPageTemplate(activeFilter = "All") {
    const flagship = PROJECTS["lagoscp"];
    const restSlugs = PROJECT_ORDER.filter((slug) => slug !== "lagoscp");
    const restProjects = restSlugs.map((slug) => PROJECTS[slug]).filter((p) => !p.inProgress);
    const inProgressProjects = restSlugs.map((slug) => PROJECTS[slug]).filter((p) => p.inProgress);
    const filtered = activeFilter === "All" ? restProjects : restProjects.filter((p) => p.category === activeFilter || p.tech.includes(activeFilter));
    const filteredInProgress = activeFilter === "All" ? inProgressProjects : inProgressProjects.filter((p) => p.category === activeFilter || p.tech.includes(activeFilter));
    const showFlagship = activeFilter === "All" || activeFilter === "Django REST";
    return `
    <div class="page-wrap wrap fade-in">
      <header class="page-header">
        <span class="page-breadcrumb">PORTFOLIO OF WORK</span>
        <h1 class="page-title">Projects &amp; Systems Architecture</h1>
        <p class="page-subtitle">
          Deep dives into production APIs, escrow transaction engines, biometric verification backends, and fullstack platforms.
        </p>
      </header>

      <div class="filter-row" id="projectFilter">
        <button class="filter-btn ${activeFilter === "All" ? "active" : ""}" data-filter="All">All</button>
        <button class="filter-btn ${activeFilter === "Django REST" ? "active" : ""}" data-filter="Django REST">Django REST</button>
        <button class="filter-btn ${activeFilter === "Django Fullstack" ? "active" : ""}" data-filter="Django Fullstack">Django Fullstack</button>
      </div>

      ${showFlagship ? renderFeaturedCard(flagship) : ""}

      <div class="project-grid" id="projectGrid" style="margin-top: 36px;">
        ${filtered.map((p) => renderProjectCard(p)).join("")}
      </div>

      ${filteredInProgress.length > 0 ? `
        <div style="margin-top: 64px;">
          <p class="section-sublabel">In Active Development</p>
          <div class="project-grid">
            ${filteredInProgress.map((p) => renderProjectCard(p)).join("")}
          </div>
        </div>
      ` : ""}
    </div>

    ${renderFooter()}
  `;
  }
  function renderContactPageTemplate() {
    return `
    <div class="page-wrap wrap fade-in">
      <header class="page-header">
        <span class="page-breadcrumb">LET'S CONNECT</span>
        <h1 class="page-title">Get In Touch</h1>
        <p class="page-subtitle">
          Have an engineering challenge, an open backend role, or a project in mind? I'd love to hear from you.
        </p>
      </header>

      <div class="contact-cards-grid">
        <div class="contact-card">
          <span class="contact-card-label">Direct Email</span>
          <a class="contact-card-val" href="mailto:${PROFILE.email}">${PROFILE.email}</a>
          <button id="copyEmailBtn" class="contact-copy-btn" type="button" data-email="${PROFILE.email}">
            Copy Email
          </button>
        </div>

        <div class="contact-card">
          <span class="contact-card-label">Phone &amp; WhatsApp</span>
          <a class="contact-card-val" href="tel:${PROFILE.phone}">${PROFILE.phone}</a>
          <span class="contact-card-hint">Available for calls &amp; WhatsApp</span>
        </div>

        <div class="contact-card">
          <span class="contact-card-label">Location &amp; Timezone</span>
          <p class="contact-card-val">Lagos, Nigeria</p>
          <span class="contact-card-hint">WAT (UTC+1) &middot; Remote Worldwide</span>
        </div>

        <div class="contact-card">
          <span class="contact-card-label">Engineering Profiles</span>
          <div class="contact-links-row">
            <a href="${PROFILE.github}" target="_blank" rel="noopener">GitHub</a>
            <span>&middot;</span>
            <a href="https://www.linkedin.com/in/anifowoshe-olamide" target="_blank" rel="noopener">LinkedIn</a>
          </div>
          <span class="contact-card-hint">Open-source &amp; professional updates</span>
        </div>
      </div>

      <!-- Interactive Contact Message Form -->
      <div class="contact-form-block">
        <h3 class="contact-form-title">Send a Direct Message</h3>
        <p class="contact-form-desc">
          Drop your details and project overview below. This will prepare a direct email to my inbox.
        </p>

        <form id="contactForm" class="contact-form" onsubmit="return false;">
          <div class="form-row">
            <div class="form-group">
              <label for="contactName">Your Name</label>
              <input type="text" id="contactName" name="name" placeholder="Alex Rivers" required />
            </div>
            <div class="form-group">
              <label for="contactEmail">Your Email</label>
              <input type="email" id="contactEmail" name="email" placeholder="alex@company.com" required />
            </div>
          </div>

          <div class="form-group">
            <label for="contactSubject">Subject</label>
            <input type="text" id="contactSubject" name="subject" placeholder="Backend Engineer Role / Project Consultation" required />
          </div>

          <div class="form-group">
            <label for="contactMessage">Message</label>
            <textarea id="contactMessage" name="message" rows="5" placeholder="Tell me about your team, system requirements, or project scope..." required></textarea>
          </div>

          <div class="form-submit-row">
            <button type="submit" class="btn btn-primary" id="sendMessageBtn">
              Send Message &rarr;
            </button>
            <span id="formFeedback" class="form-feedback"></span>
          </div>
        </form>
      </div>
    </div>

    ${renderFooter()}
  `;
  }
  function renderDetailSection(s) {
    const flowHTML = s.flow ? `
    <div class="flow">
      ${s.flow.map((f, i) => `
        <span class="flow-step"><span class="flow-dot ${f.dot}"></span>${f.label}</span>
        ${i < s.flow.length - 1 ? '<span class="flow-arrow">\u2192</span>' : ""}
      `).join("")}
    </div>
    ${s.flowCaption ? `<p class="flow-caption">${s.flowCaption}</p>` : ""}
  ` : "";
    const itemsHTML = s.items ? `
    <ul class="detail-list">
      ${s.items.map((i) => `<li>${i}</li>`).join("")}
    </ul>
  ` : "";
    return `
    <div class="detail-section">
      <h2>${s.h}</h2>
      ${s.p ? `<p>${s.p}</p>` : ""}
      ${flowHTML}
      ${itemsHTML}
    </div>
  `;
  }
  function renderProjectDetailTemplate(p) {
    const statusClass = p.status ? p.status.cls : "";
    const statusPill = p.status ? `
    <span class="detail-pill ${statusClass}">
      <span class="detail-pill-dot"></span>
      ${p.status.label}
    </span>
  ` : "";
    const endpointPill = p.endpoint ? `
    <span class="detail-pill">
      <span class="detail-pill-dot" style="background:var(--status-active)"></span>
      ${p.httpMethod || "GET"} ${p.endpoint}
    </span>
  ` : "";
    return `
    <div class="detail-wrap wrap fade-in">
      <a class="back-link" href="#/projects">
        <svg viewBox="0 0 24 24" aria-hidden="true"><polyline points="15 18 9 12 15 6"/></svg>
        Back to projects
      </a>

      <div class="detail-head">
        <h1>${p.title} <span style="color:var(--text-faint); font-weight:400">\u2014 ${p.subtitle}</span></h1>
        <p class="detail-tagline">${p.tagline}</p>
        <div class="detail-meta">
          ${statusPill}
          ${endpointPill}
        </div>
        <p class="detail-overview">${p.overview}</p>
      </div>

      ${p.gallery ? `
        <div class="detail-section">
          <h2>System Previews</h2>
          <div class="project-gallery">
            ${p.gallery.map((img) => `
              <div class="gallery-card">
                <div class="gallery-img-wrap">
                  <img src="${img.src}" alt="${img.caption}" loading="lazy" />
                </div>
                <div class="gallery-caption">${img.caption}</div>
              </div>
            `).join("")}
          </div>
        </div>
      ` : ""}

      ${p.sections.map(renderDetailSection).join("")}

      <div class="tech-block">
        <h2>Tech Stack</h2>
        <div class="tech-tags">${techTags(p.tech)}</div>
        <div class="detail-links">
          ${p.github ? `<a class="btn btn-primary" href="${p.github}" target="_blank" rel="noopener">View Source</a>` : ""}
          <a class="btn btn-ghost" href="#/projects">\u2190 All Projects</a>
          <a class="btn btn-ghost" href="#/">\u2190 Home</a>
        </div>
      </div>
    </div>

    ${renderFooter()}
  `;
  }

  // js/app.js
  var PortfolioApp = class {
    constructor() {
      this.appEl = document.getElementById("app");
      this.pillNav = document.getElementById("pill-nav");
      this.currentFilter = "All";
      this.init();
    }
    init() {
      this.initTheme();
      this.initLiquidNav();
      this.bindEvents();
      this.render();
    }
    /* ─── Theme Management ────────────────────────────────── */
    initTheme() {
      const savedTheme = localStorage.getItem("olamide_portfolio_theme");
      const systemPrefersLight = window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;
      const initialTheme = savedTheme || (systemPrefersLight ? "light" : "dark");
      this.applyTheme(initialTheme);
      const toggleBtn = document.getElementById("theme-toggle");
      if (toggleBtn) {
        toggleBtn.addEventListener("click", () => {
          const currentTheme = document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
          const nextTheme = currentTheme === "dark" ? "light" : "dark";
          this.applyTheme(nextTheme);
        });
      }
    }
    applyTheme(theme) {
      const moonIcon = document.querySelector(".theme-icon-moon");
      const sunIcon = document.querySelector(".theme-icon-sun");
      if (theme === "light") {
        document.documentElement.setAttribute("data-theme", "light");
        if (moonIcon) moonIcon.style.display = "none";
        if (sunIcon) sunIcon.style.display = "block";
      } else {
        document.documentElement.removeAttribute("data-theme");
        if (moonIcon) moonIcon.style.display = "block";
        if (sunIcon) sunIcon.style.display = "none";
      }
      localStorage.setItem("olamide_portfolio_theme", theme);
    }
    /* ─── Liquid Bouncy Water Navigation ──────────────────── */
    initLiquidNav() {
      if (!this.pillNav) return;
      const items = [...this.pillNav.querySelectorAll(".nav-item")];
      let rafId = null;
      let leaveTimeout = null;
      const onMouseEnter = () => {
        if (leaveTimeout) {
          clearTimeout(leaveTimeout);
          leaveTimeout = null;
        }
        this.pillNav.classList.add("is-expanded");
      };
      const onMouseMove = (e) => {
        if (leaveTimeout) {
          clearTimeout(leaveTimeout);
          leaveTimeout = null;
        }
        this.pillNav.classList.add("is-expanded");
        if (rafId) cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(() => {
          const mouseX = e.clientX;
          const maxDist = 160;
          items.forEach((item) => {
            const rect = item.getBoundingClientRect();
            const itemCenterX = rect.left + rect.width / 2;
            const dx = mouseX - itemCenterX;
            const dist = Math.abs(dx);
            if (dist < maxDist) {
              const norm = dist / maxDist;
              const curve = Math.cos(norm * Math.PI) * 0.5 + 0.5;
              const scale = 1 + curve * 0.58;
              const translateY = -curve * 22;
              const pushX = Math.sin(norm * Math.PI) * (dx < 0 ? 12 : -12) * curve;
              item.style.transform = `translate3d(${pushX}px, ${translateY}px, 0) scale(${scale})`;
              item.style.zIndex = Math.round(curve * 40) + 2;
              if (curve > 0.25) {
                item.classList.add("in-bubble");
              } else {
                item.classList.remove("in-bubble");
              }
            } else {
              item.style.transform = "";
              item.style.zIndex = "";
              item.classList.remove("in-bubble");
            }
          });
        });
      };
      const onMouseLeave = () => {
        leaveTimeout = setTimeout(() => {
          if (rafId) cancelAnimationFrame(rafId);
          this.pillNav.classList.remove("is-expanded");
          items.forEach((item) => {
            item.style.transform = "";
            item.style.zIndex = "";
            item.classList.remove("in-bubble");
          });
        }, 80);
      };
      this.pillNav.addEventListener("mouseenter", onMouseEnter);
      this.pillNav.addEventListener("mousemove", onMouseMove);
      this.pillNav.addEventListener("mouseleave", onMouseLeave);
    }
    /* ─── Routing ─────────────────────────────────────────── */
    parseRoute() {
      const hash = window.location.hash.trim();
      const slugMatch = hash.match(/^#\/project\/([a-z]+)/);
      if (slugMatch) {
        return { type: "project", slug: slugMatch[1] };
      }
      const clean = hash.replace(/^#\/?/, "").toLowerCase();
      if (clean === "about") return { type: "about" };
      if (clean === "experience") return { type: "experience" };
      if (clean === "projects" || clean === "work") return { type: "projects" };
      if (clean === "contact") return { type: "contact" };
      return { type: "home" };
    }
    render() {
      const route = this.parseRoute();
      window.scrollTo({ top: 0, behavior: "instant" });
      switch (route.type) {
        case "project": {
          const project = PROJECTS[route.slug];
          if (project) {
            this.appEl.innerHTML = renderProjectDetailTemplate(project);
            document.title = `${project.title} \u2014 System Architecture & Details`;
            this.updateNavActive("projects");
          } else {
            this.appEl.innerHTML = renderProjectsPageTemplate(this.currentFilter);
            document.title = "Projects & Systems Architecture \u2014 Anifowoshe Olamide";
            this.updateNavActive("projects");
          }
          break;
        }
        case "about": {
          this.appEl.innerHTML = renderAboutPageTemplate();
          document.title = "About Me \u2014 Anifowoshe Olamide";
          this.updateNavActive("about");
          break;
        }
        case "experience": {
          this.appEl.innerHTML = renderExperiencePageTemplate();
          document.title = "Experience & Leadership \u2014 Anifowoshe Olamide";
          this.updateNavActive("experience");
          break;
        }
        case "projects": {
          this.appEl.innerHTML = renderProjectsPageTemplate(this.currentFilter);
          document.title = "Projects & Systems Architecture \u2014 Anifowoshe Olamide";
          this.updateNavActive("projects");
          break;
        }
        case "contact": {
          this.appEl.innerHTML = renderContactPageTemplate();
          document.title = "Get In Touch \u2014 Anifowoshe Olamide";
          this.updateNavActive("contact");
          break;
        }
        case "home":
        default: {
          this.appEl.innerHTML = renderLandingPageTemplate();
          document.title = "Anifowoshe Olamide \u2014 Backend Developer";
          this.updateNavActive("home");
          break;
        }
      }
      this.bindDynamicEvents();
      this.initFadeIns();
    }
    /* ─── Event Binding ───────────────────────────────────── */
    bindEvents() {
      window.addEventListener("hashchange", () => this.render());
    }
    bindDynamicEvents() {
      const filterContainer = document.getElementById("projectFilter");
      if (filterContainer) {
        filterContainer.querySelectorAll(".filter-btn").forEach((btn) => {
          btn.addEventListener("click", (e) => {
            const filterVal = e.currentTarget.getAttribute("data-filter");
            if (filterVal) {
              this.currentFilter = filterVal;
              this.appEl.innerHTML = renderProjectsPageTemplate(this.currentFilter);
              this.bindDynamicEvents();
              this.initFadeIns();
            }
          });
        });
      }
      const copyBtn = document.getElementById("copyEmailBtn");
      if (copyBtn) {
        copyBtn.addEventListener("click", () => {
          const email = copyBtn.getAttribute("data-email") || PROFILE.email;
          navigator.clipboard.writeText(email).then(() => {
            copyBtn.textContent = "\u2713 Copied to Clipboard!";
            copyBtn.classList.add("copied");
            setTimeout(() => {
              copyBtn.textContent = "Copy Email";
              copyBtn.classList.remove("copied");
            }, 2500);
          }).catch(() => {
            copyBtn.textContent = "Email: " + email;
          });
        });
      }
      const contactForm = document.getElementById("contactForm");
      if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
          e.preventDefault();
          const name = document.getElementById("contactName")?.value || "";
          const email = document.getElementById("contactEmail")?.value || "";
          const subject = document.getElementById("contactSubject")?.value || "Backend Engineer Inquiry";
          const message = document.getElementById("contactMessage")?.value || "";
          const mailtoUrl = `mailto:${PROFILE.email}?subject=${encodeURIComponent(subject + " - " + name)}&body=${encodeURIComponent(message + "\n\n---\nFrom: " + name + " (" + email + ")")}`;
          const feedback = document.getElementById("formFeedback");
          if (feedback) {
            feedback.textContent = "Opening your email client...";
            feedback.style.color = "var(--accent)";
          }
          window.location.href = mailtoUrl;
        });
      }
    }
    /* ─── Pill Nav Active State ───────────────────────────── */
    updateNavActive(routeName) {
      if (!this.pillNav) return;
      this.pillNav.querySelectorAll(".nav-item").forEach((item) => {
        item.classList.remove("active");
      });
      if (!routeName) return;
      const navId = `nav-${routeName}`;
      const activeItem = document.getElementById(navId);
      if (activeItem) {
        activeItem.classList.add("active");
      }
    }
    /* ─── Fade-in Animations ──────────────────────────────── */
    initFadeIns() {
      const fadeEls = this.appEl.querySelectorAll(".fade-in, .project-card, .exp-item, .contact-card");
      if (!fadeEls.length) return;
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const parent = entry.target.parentElement;
            const siblings = parent ? [...parent.querySelectorAll(".project-card, .exp-item, .contact-card, .fade-in")] : [];
            const index = siblings.indexOf(entry.target);
            const delay = Math.min(index * 60, 300);
            setTimeout(() => {
              entry.target.classList.add("visible");
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.08,
        rootMargin: "0px 0px -40px 0px"
      });
      fadeEls.forEach((el) => observer.observe(el));
    }
  };
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      new PortfolioApp();
    });
  } else {
    new PortfolioApp();
  }
})();
