/**
 * Portfolio Data Configuration
 * Gottipati Nishita Sri
 *
 * Verified Resume Information
 * - Education: BITS Pilani (Digital) & NIAT (NxtWave)
 * - Repositories:
 *   - Portfolio: https://github.com/Nishita-2009/Nishita_Portfolio
 *   - Growz: https://github.com/Nishita-2009/growz
 *   - Sujala RO Purifiers: https://github.com/Nishita-2009/sujala-ro-purifiers
 */

export const personalInfo = {
  name: "Gottipati Nishita Sri",
  firstName: "Gottipati",
  lastName: "Nishita Sri",
  shortName: "Nishita Sri",
  brandSub: "BITS PILANI • CS & AI",
  availability: "OPEN TO SOFTWARE DEVELOPMENT INTERNSHIPS",
  headlineUpper: "COMPUTER SCIENCE UNDERGRADUATE AT BITS PILANI",
  headline: "Computer Science Undergraduate | Software Development | AI Applications",
  roleTag: "Software Development & AI Aspirant",
  location: "Hyderabad, India",
  email: "nishithasri851@gmail.com",
  phone: "+91 7013360155",
  displayPhone: "7013360155",
  github: "https://github.com/Nishita-2009",
  githubDisplay: "github.com/Nishita-2009",
  linkedin: "https://linkedin.com/in/nishita-sri-gottipati-b8140a382",
  linkedinDisplay: "linkedin.com/in/nishita-sri-gottipati",
  portfolioRepo: "https://github.com/Nishita-2009/Nishita_Portfolio",
  resumePath: "/resume.pdf",
  heroIntro:
    "Passionate about building real-world solutions with software development, AI and problem-solving.",
  bio: "I’m a Computer Science undergraduate at BITS Pilani with a foundation in programming, problem-solving and software development. I enjoy building practical applications, exploring Generative AI and developing technology-driven solutions to real-world problems.",
  contactMessage:
    "Open to software development internships and collaborative engineering opportunities."
};

export const credentialsStrip = [
  {
    id: "bits-pilani",
    title: "BITS Pilani (Digital)",
    subtitle: "BSc Computer Science",
    icon: "graduation"
  },
  {
    id: "niat-training",
    title: "NIAT (NxtWave)",
    subtitle: "Industry Ready Training",
    icon: "code"
  },
  {
    id: "practical-projects",
    title: "3+ Projects",
    subtitle: "Practical Projects",
    icon: "cube"
  },
  {
    id: "open-internships",
    title: "Open",
    subtitle: "To Internships",
    icon: "bolt"
  }
];

export const aboutData = {
  leadParagraph:
    "I’m a Computer Science undergraduate at BITS Pilani with a foundation in programming, problem-solving and software development. I enjoy building practical applications, exploring Generative AI and developing technology-driven solutions to real-world problems.",
  interests: [
    "Software Development",
    "Artificial Intelligence",
    "Real-world Problem Solving",
    "Continuous Learning"
  ],
  quickFacts: [
    { label: "Degree", value: "BSc CS @ BITS Pilani" },
    { label: "Training", value: "NIAT (NxtWave)" },
    { label: "Focus", value: "Full-Stack & GenAI" }
  ]
};

export const coreSkills = [
  {
    category: "Programming",
    icon: "code",
    summary: "Python, C++",
    skills: ["Python", "C++"]
  },
  {
    category: "Web Development",
    icon: "globe",
    summary: "HTML, CSS, JavaScript, Node.js, Express.js",
    skills: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js"]
  },
  {
    category: "AI Technologies",
    icon: "sparkles",
    summary: "Generative AI, LLMs, RAG Fundamentals",
    skills: ["Generative AI", "LLMs", "RAG Fundamentals"]
  },
  {
    category: "Database",
    icon: "database",
    summary: "SQLite, MongoDB, DBMS",
    skills: ["SQLite", "MongoDB", "DBMS"]
  },
  {
    category: "Computer Science",
    icon: "cpu",
    summary: "Data Structures & Algorithms, Problem Solving",
    skills: ["Data Structures", "Algorithms", "Problem Solving"]
  },
  {
    category: "Professional Skills",
    icon: "users",
    summary: "Analytical Thinking, Communication, Teamwork, Adaptability",
    skills: ["Analytical Thinking", "Communication", "Teamwork", "Adaptability"]
  }
];

export const additionalTechnologies = [
  { name: "Firebase Authentication", category: "Auth" },
  { name: "Firebase Firestore", category: "Cloud DB" },
  { name: "Cloudinary", category: "Media CDN" },
  { name: "Git & GitHub", category: "Version Control" },
  { name: "React", category: "UI Library" },
  { name: "Netlify & Vercel", category: "Deployment" }
];

export const projects = [
  {
    id: "growz",
    index: "01",
    name: "Growz",
    badge: "AI & Business Intelligence",
    tagline:
      "Empowering MSMEs with AI-driven business intelligence, sales tracking, and smarter decision-making.",
    overview:
      "An AI-powered MSME business management platform designed to unify sales tracking, operational metrics, and actionable growth recommendations.",
    problemAddressed:
      "Small and medium businesses often rely on fragmented records and lack accessible analytics to understand sales velocity or operational bottlenecks.",
    whatWasBuilt:
      "A unified React & Python analytics workspace combining MongoDB operational ledgers with LLM-driven insights and trend forecasting.",
    architectureFlow: [
      { step: "01", title: "Operational Ledger", detail: "MongoDB & Sales Ingestion" },
      { step: "02", title: "Analytics Engine", detail: "Python Trend Processing" },
      { step: "03", title: "AI Advisor", detail: "LLM Growth Recommendations" },
      { step: "04", title: "Executive UI", detail: "Interactive React Dashboard" }
    ],
    keyFeatures: [
      "Unified MSME operations & revenue visibility dashboard",
      "AI-generated recommendations for inventory and sales growth",
      "Conversational operational query assistant powered by LLMs",
      "Automated sales trend velocity and performance tracking"
    ],
    tags: ["AI", "Business Tools", "Data Analytics", "Web App"],
    technologies: [
      "Python",
      "Generative AI",
      "LLMs",
      "React",
      "MongoDB",
      "Data Analytics"
    ],
    githubUrl: "https://github.com/Nishita-2009/growz",
    githubRepoName: "growz",
    demoUrl: null,
    statusNote: "GitHub Repository Connected"
  },
  {
    id: "opthire",
    index: "02",
    name: "OptHire",
    badge: "AI Agent Architecture",
    tagline:
      "AI-powered recruitment and candidate assessment platform with ATS scoring and skill-gap analysis.",
    overview:
      "An automated recruitment pipeline using specialized AI agents for resume parsing, candidate matching, ATS scoring, and interview generation.",
    problemAddressed:
      "Manual resume screening is slow, inconsistent, and struggles to map exact technical skill gaps or tailor interview questions per candidate.",
    whatWasBuilt:
      "A modular multi-agent Python system that parses resumes into structured profiles, scores ATS alignment, and synthesizes targeted technical questions.",
    architectureFlow: [
      { step: "01", title: "Resume Parser", detail: "Structured Profile Extraction" },
      { step: "02", title: "ATS Matcher", detail: "Job Criteria Benchmarking" },
      { step: "03", title: "Skill Gap Agent", detail: "Readiness Matrix Analysis" },
      { step: "04", title: "Interview Gen", detail: "Targeted Technical Prompts" }
    ],
    keyFeatures: [
      "Automated resume parsing and job-description alignment",
      "Applicant Tracking System (ATS) compatibility scoring",
      "Granular skill-gap detection across technical requirements",
      "Custom interview question generation targeting profile gaps"
    ],
    tags: ["AI Agents", "NLP", "Python", "Recruitment Tech"],
    technologies: [
      "Python",
      "AI Agent Architecture",
      "LLM Integration",
      "Prompt Engineering",
      "SQLite"
    ],
    githubUrl: "https://github.com/Nishita-2009",
    githubRepoName: "OptHire",
    demoUrl: null,
    statusNote: "AI Agent Workflow Prototype"
  },
  {
    id: "sujala-ro-purifiers",
    index: "03",
    name: "Sujala RO Purifiers",
    badge: "E-Commerce & Cloud Backend",
    tagline:
      "E-commerce website for water purification products with WhatsApp ordering and an admin dashboard.",
    overview:
      "A full-featured e-commerce platform enabling seamless water purifier discovery, cart management, instant WhatsApp ordering, and cloud catalog control.",
    problemAddressed:
      "Local water purification businesses lack digital storefronts where customers can compare filtration specs and place immediate, friction-free orders.",
    whatWasBuilt:
      "A responsive storefront backed by Firebase Authentication, Cloud Firestore, Cloudinary media hosting, and automated WhatsApp order dispatch.",
    architectureFlow: [
      { step: "01", title: "Catalog & Auth", detail: "Firebase Auth & Cloudinary CDN" },
      { step: "02", title: "Cart Engine", detail: "Dynamic Order Calculation" },
      { step: "03", title: "WhatsApp API", detail: "Instant Order Dispatch" },
      { step: "04", title: "Admin Console", detail: "Firestore Catalog & Order Sync" }
    ],
    keyFeatures: [
      "Interactive purifier catalog with filtration stage specifications",
      "Secure customer login via Firebase Authentication",
      "Dynamic shopping cart with one-click WhatsApp order routing",
      "Admin dashboard for real-time product & inventory management"
    ],
    tags: ["Web Development", "E-commerce", "Firebase", "Cloudinary"],
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Firebase Auth",
      "Firebase Firestore",
      "Cloudinary",
      "WhatsApp API"
    ],
    githubUrl: "https://github.com/Nishita-2009/sujala-ro-purifiers",
    githubRepoName: "sujala-ro-purifiers",
    demoUrl: null,
    statusNote: "GitHub Repository Connected"
  }
];

export const experiences = [
  {
    id: "ibm-virtual-internship",
    organization: "IBM | 1M1B",
    badgeText: "IBM",
    role: "AI for Sustainability Virtual Internship",
    programTrack: "IBM SkillsBuild • Virtual Internship",
    status: "Completed",
    completionDate: "October 2026",
    issuer: "IBM SkillsBuild in collaboration with 1M1B",
    credentialId: "PLAN-56138075980A",
    systemOfRecord: "IBM SkillsBuild",
    certificateUrl:
      "https://drive.google.com/file/d/11JV6W1GhbcYBPdFcZGhYlE43Tj1T5mMD/view?usp=drive_link",
    description:
      "Completed the IBM 1M1B AI for Sustainability Virtual Internship through IBM SkillsBuild, gaining hands-on exposure to foundational AI applications and sustainable technology solutions.",
    highlights: [
      "Followed the structured IBM SkillsBuild internship curriculum.",
      "Explored AI applications for environmental and sustainability problem-solving."
    ],
    tags: ["IBM | 1M1B", "Virtual Internship", "AI for Sustainability", "IBM SkillsBuild"]
  },
  {
    id: "niat-industry-training",
    organization: "Industry Ready Training",
    badgeText: "</>",
    role: "NIAT (NxtWave)",
    programTrack: "Practical Engineering Training",
    status: "Ongoing",
    completionDate: "08/2025 – Present",
    issuer: "NIAT (NxtWave) • Hyderabad",
    credentialId: null,
    systemOfRecord: null,
    certificateUrl: null,
    description:
      "Practical software development training focused on hands-on problem-solving, full-stack technologies, and building real-world applications.",
    highlights: [
      "Hands-on coding in modern full-stack web and database technologies.",
      "Continuous algorithmic problem-solving and technical practice."
    ],
    tags: ["Full-Stack", "Problem Solving", "Web Technologies"]
  }
];

export const education = [
  {
    id: "bits-pilani-bsc",
    degree: "BSc Computer Science",
    institution: "BITS Pilani (Digital)",
    duration: "09/2025 – Present",
    fullDuration: "September 2025 – Present",
    location: "Hyderabad",
    status: "Current Undergraduate",
    description:
      "Undergraduate computer science curriculum focused on algorithms, computational systems, database theory, and software engineering.",
    pillars: ["Data Structures & Algorithms", "Computational Systems", "DBMS", "Software Engineering"],
    type: "Degree Program",
    icon: "graduation"
  },
  {
    id: "niat-training-edu",
    degree: "Industry Ready Training",
    institution: "NIAT (NxtWave)",
    duration: "08/2025 – Present",
    fullDuration: "August 2025 – Present",
    location: "Hyderabad",
    status: "Active Fellow",
    description:
      "Project-intensive preparation covering full-stack web architecture, modern databases, and Generative AI workflows.",
    pillars: ["Full-Stack Web", "LLM & RAG Workflows", "System Design", "Practical Building"],
    type: "Professional Training",
    icon: "code"
  }
];

export const certifications = [
  {
    id: "cert-ibm-1m1b",
    title: "IBM | 1M1B",
    subtitle: "AI for Sustainability Virtual Internship",
    issuer: "IBM SkillsBuild",
    completionDate: "October 2026",
    planId: "PLAN-56138075980A",
    description:
      "Virtual internship focused on foundational AI applications, sustainability challenges, and responsible technology solutions through IBM SkillsBuild.",
    tag: "Verified Credential",
    certificateUrl:
      "https://drive.google.com/file/d/11JV6W1GhbcYBPdFcZGhYlE43Tj1T5mMD/view?usp=drive_link",
    icon: "award"
  },
  {
    id: "cert-ai-agent",
    title: "AI Agent Workshop",
    subtitle: "Multi-Agent Systems & Autonomous LLM Workflows",
    issuer: "NxtWave • Hands-on Workshop",
    completionDate: "2026",
    description:
      "Hands-on workshop introducing AI agents and multi-agent workflow concepts.",
    tag: "Agentic AI",
    certificateUrl:
      "https://s3-ap-south-1.amazonaws.com/poster-generation-backend-nxtwave-media-static/ccbp_beta/AI-AGENTS-NIAT/PPKYA5RUKY.png",
    icon: "bot"
  },
  {
    id: "cert-gesture",
    title: "Gesture Workshop",
    subtitle: "Computer Vision & Human-Computer Interaction",
    issuer: "NIAT Chevella • Interactive Workshop",
    completionDate: "2026",
    description:
      "Workshop exploring gesture-based interaction and computer vision concepts.",
    tag: "Computer Vision",
    certificateUrl:
      "https://s3-ap-south-1.amazonaws.com/poster-generation-backend-nxtwave-media-static/ccbp_beta/NIAT_Chevella_guesture_workshop/0IK601HO8L.png",
    icon: "cpu"
  },
  {
    id: "cert-soar",
    title: "SOAR – AI To Aspire",
    subtitle: "By Microsoft and NSDC",
    issuer: "Microsoft & NSDC",
    completionDate: "2026",
    description:
      "AI-focused learning initiative associated with Microsoft and NSDC.",
    tag: "AI & Innovation",
    certificateUrl:
      "https://drive.google.com/file/d/1HAMcIxMnBOIaDCXdab6dUrx_-FN7Eo4M/view?usp=sharing",
    icon: "star"
  }
];

export const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" }
];
