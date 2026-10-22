/**
 * Portfolio Data Configuration
 * Gottipati Nishita Sri
 * 
 * Verified Resume Information
 * - Education: BITS Pilani (Digital) & NIAT
 * - Repositories:
 *   - Portfolio: https://github.com/Nishita-2009/Nishita_Portfolio
 *   - Growz: https://github.com/Nishita-2009/growz
 *   - Sujala RO Purifiers: https://github.com/Nishita-2009/sujala-ro-purifiers
 */

export const personalInfo = {
  name: "Gottipati Nishita Sri",
  shortName: "Nishita Sri",
  headline: "Computer Science Undergraduate | Software Development | AI Applications",
  roleTag: "Software Development & AI Aspirant",
  location: "Hyderabad, India",
  email: "nishithasri851@gmail.com",
  phone: "+91 7013360155",
  displayPhone: "7013360155",
  github: "https://github.com/Nishita-2009",
  linkedin: "https://linkedin.com/in/nishita-sri-gottipati-b8140a382",
  portfolioRepo: "https://github.com/Nishita-2009/Nishita_Portfolio",
  resumePath: "/resume.pdf",
  bio: "I am a Computer Science undergraduate at BITS Pilani with a foundation in programming, problem-solving and software development. I enjoy building practical applications, exploring Generative AI and developing technology-driven solutions to real-world problems.",
  contactMessage: "I am currently looking for internship opportunities where I can apply my programming, web development and problem-solving skills while learning from real-world software development work."
};

export const aboutData = {
  paragraphs: [
    "I am a Computer Science undergraduate pursuing my BSc in Computer Science at BITS Pilani (Digital) while concurrently undertaking intensive, industry-ready software engineering training through NxtWave of Innovation in Advanced Technologies (NIAT) in Hyderabad.",
    "My technical journey centers on software development, structured problem-solving, and building practical technology-driven solutions. I have cultivated a strong foundation in core computer science, particularly Data Structures & Algorithms (DSA), web development fundamentals, and modern database management.",
    "Beyond traditional software engineering, I am deeply curious about Generative AI, large language models (LLMs), and retrieval-augmented generation (RAG) fundamentals. I actively apply these concepts through hands-on projects, such as building multi-agent recruitment workflows and intelligent business platforms.",
    "As an aspiring software engineer, I bring analytical thinking, clear communication, a collaborative team mindset, and strong adaptability. I believe the most effective way to grow is through disciplined practice, continuous learning, and building software that addresses authentic user needs."
  ],
  highlights: [
    {
      title: "Academic Rigor",
      description: "Pursuing BSc Computer Science at BITS Pilani (Digital) focusing on core CS fundamentals."
    },
    {
      title: "Industry Training",
      description: "Hands-on engineering training at NIAT covering full-stack web and AI application development."
    },
    {
      title: "Practical Focus",
      description: "Building functional applications tackling real-world business and workflow challenges."
    },
    {
      title: "Eager Learner",
      description: "Passionate about exploring modern AI agents, LLM pipelines, and solid coding practices."
    }
  ]
};

export const coreSkills = [
  {
    category: "Programming Languages",
    icon: "code",
    skills: ["Python", "C++"]
  },
  {
    category: "Web Development",
    icon: "globe",
    skills: ["HTML", "CSS", "JavaScript"]
  },
  {
    category: "Computer Science Fundamentals",
    icon: "cpu",
    skills: ["Data Structures & Algorithms (DSA)", "Problem Solving", "Database Management Systems (DBMS)"]
  },
  {
    category: "AI Technologies",
    icon: "sparkles",
    skills: ["Generative AI", "Large Language Models (LLMs)", "Retrieval-Augmented Generation (RAG) Fundamentals"]
  },
  {
    category: "Databases",
    icon: "database",
    skills: ["SQLite", "MongoDB"]
  },
  {
    category: "Professional Skills",
    icon: "users",
    skills: ["Analytical Thinking", "Communication", "Teamwork", "Adaptability"]
  }
];

export const additionalTechnologies = [
  { name: "Node.js", category: "Runtime" },
  { name: "Express.js", category: "Backend" },
  { name: "Firebase Authentication", category: "Auth & Security" },
  { name: "Firebase Firestore", category: "Cloud Database" },
  { name: "Cloudinary", category: "Media Storage" },
  { name: "Git", category: "Version Control" },
  { name: "GitHub", category: "Collaboration" },
  { name: "Netlify", category: "Deployment" },
  { name: "React", category: "UI Library (Project-Specific)" }
];

export const projects = [
  {
    id: "growz",
    name: "Growz",
    badge: "AI & Business Intelligence",
    tagline: "Empowering MSMEs with AI-driven business intelligence and smarter decision-making.",
    description: "Growz is an AI-powered MSME business management platform designed to help small and medium-sized businesses manage their operations, analyze business performance and make informed decisions.",
    problemAddressed: "Micro, Small, and Medium Enterprises (MSMEs) frequently struggle with disjointed operational records, fragmented sales tracking, and an absence of accessible analytics to guide strategic business growth.",
    whatWasBuilt: "A centralized business intelligence platform integrating automated performance tracking, sales pattern understanding, and intelligent AI assistance tailored specifically for MSME operators.",
    keyFeatures: [
      "Business insights dashboard for unified operations visibility",
      "Data-driven recommendations to guide strategic decisions",
      "Intelligent assistance to answer operational queries",
      "Sales understanding and trend analysis",
      "Performance tracking across operational metrics",
      "Identifying growth opportunities with actionable intelligence"
    ],
    technologies: ["Python", "Generative AI", "LLMs", "React", "MongoDB", "Data Analytics"],
    // Verified repository URL provided by Nishita
    githubUrl: "https://github.com/Nishita-2009/growz",
    githubRepoName: "growz",
    demoUrl: null,
    statusNote: "GitHub Repository Connected"
  },
  {
    id: "opthire",
    name: "OptHire",
    badge: "AI Agent Architecture",
    tagline: "AI-Powered Recruitment and Candidate Assessment Platform.",
    description: "OptHire is an AI-assisted recruitment platform designed to automate key stages of the hiring process using specialized AI agents.",
    problemAddressed: "Traditional recruitment screening requires hours of manual resume vetting, is susceptible to subjective evaluation, and often fails to identify exact technical skill gaps or generate customized technical interviews efficiently.",
    whatWasBuilt: "An automated candidate evaluation pipeline utilizing specialized Python-based AI agents to parse candidate profiles, benchmark them against job criteria, and generate actionable assessment insights.",
    keyFeatures: [
      "Automated resume parsing and candidate matching against job descriptions",
      "Applicant Tracking System (ATS) compatibility scoring",
      "Detailed skill-gap analysis highlighting candidate readiness",
      "Targeted interview question generation based on profile gaps",
      "Candidate evaluation using specialized AI agent workflows",
      "Modular Python agent architecture for repeatable assessment cycles"
    ],
    technologies: ["Python", "AI Agent Architecture", "LLM Integration", "Prompt Engineering", "SQLite"],
    githubUrl: "https://github.com/Nishita-2009",
    githubRepoName: "OptHire",
    demoUrl: null,
    statusNote: "AI Agent workflow prototype"
  },
  {
    id: "sujala-ro-purifiers",
    name: "Sujala RO Purifiers",
    badge: "E-Commerce & Cloud Backend",
    tagline: "E-Commerce Website for Water Purification Products.",
    description: "A practical e-commerce website developed for a water purification business, designed to make product discovery and customer ordering easier.",
    problemAddressed: "Water purification service businesses often lack an organized online showcase, resulting in friction for customers trying to discover suitable purifiers, inspect specifications, and place instant orders.",
    whatWasBuilt: "A responsive, practical e-commerce web platform featuring dynamic product catalogs, secure user authentication, shopping cart workflows, direct WhatsApp order routing, and an administrative control panel.",
    keyFeatures: [
      "Interactive product listings with filtration specifications",
      "User authentication via Firebase Authentication",
      "Dynamic shopping cart and checkout calculation",
      "Direct WhatsApp-based instant ordering integration",
      "Admin dashboard for product catalog and order management",
      "Cloudinary integration for product image uploads and media hosting",
      "Firebase Firestore database for real-time order records"
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Firebase Auth", "Firebase Firestore", "Cloudinary", "WhatsApp API"],
    // Verified repository URL provided by Nishita
    githubUrl: "https://github.com/Nishita-2009/sujala-ro-purifiers",
    githubRepoName: "sujala-ro-purifiers",
    demoUrl: null,
    statusNote: "GitHub Repository Connected"
  }
];

export const education = [
  {
    degree: "BSc Computer Science",
    institution: "BITS Pilani (Digital)",
    duration: "September 2025 – Present",
    location: "Hyderabad",
    description: "Rigorous academic curriculum covering foundational and advanced computer science topics, including algorithmic problem-solving, computational systems, and software engineering methodologies.",
    type: "Degree Program"
  },
  {
    degree: "Industry-Ready Training",
    institution: "NxtWave of Innovation in Advanced Technologies (NIAT)",
    duration: "August 2025 – Present",
    location: "Hyderabad",
    description: "Hands-on, project-intensive industry preparation focusing on full-stack web application development, data structures, database design, and modern Generative AI technologies.",
    type: "Professional Training"
  }
];

export const certifications = [
  {
    title: "SOAR – AI To Aspire",
    issuer: "Microsoft & NSDC",
    description: "Industry-aligned foundational program exploring AI fundamentals, societal applications, and emerging digital technologies.",
    tag: "AI & Innovation"
  },
  {
    title: "AI Agent Workshop",
    issuer: "Practical Hands-on Workshop",
    description: "Intensive training on designing and orchestrating multi-agent systems, task delegation, and LLM-powered autonomous workflows.",
    tag: "Agentic AI"
  },
  {
    title: "Gesture Workshop",
    issuer: "Technology & Interaction Workshop",
    description: "Interactive session exploring computer vision principles, sensor-based inputs, and gesture-driven human-computer interaction.",
    tag: "Computer Vision & HCI"
  }
];

export const professionalStrengths = [
  {
    title: "Analytical Thinking",
    description: "Breaking complex software problems down into logical, structured components for systematic debugging and solution design.",
    icon: "brain"
  },
  {
    title: "Problem Solving",
    description: "Applying algorithm-driven thinking and clean logic to implement robust, practical software features.",
    icon: "puzzle"
  },
  {
    title: "Communication",
    description: "Articulating technical concepts clearly, documenting code thoughtfully, and presenting project ideas effectively.",
    icon: "message"
  },
  {
    title: "Teamwork",
    description: "Collaborating productively in peer development, participating in code reviews, and contributing to collective team goals.",
    icon: "users"
  },
  {
    title: "Adaptability",
    description: "Quickly assimilating new frameworks, programming languages, and modern AI paradigms with enthusiasm.",
    icon: "refresh"
  },
  {
    title: "Continuous Learning",
    description: "Proactively expanding computer science and software development foundations through practical, hands-on building.",
    icon: "book"
  }
];

export const experiences = [
  {
    id: "ibm-virtual-internship",
    organization: "IBM | 1M1B",
    role: "AI for Sustainability Virtual Internship",
    programTrack: "IBM SkillsBuild • Virtual Internship",
    status: "Completed",
    completionDate: "October 2026",
    issuer: "IBM SkillsBuild in collaboration with 1M1B",
    credentialId: "PLAN-56138075980A",
    systemOfRecord: "IBM Your Learning",
    certificateUrl: "https://drive.google.com/file/d/11JV6W1GhbcYBPdFcZGhYlE43Tj1T5mMD/view?usp=drive_link",
    description: "Successfully completed the virtual internship program offered through IBM SkillsBuild in collaboration with 1M1B, focusing on foundational AI applications for sustainability and verified under IBM's Your Learning system of record upon fulfilling all curriculum requirements.",
    highlights: [
      "Completed structured curriculum under the IBM SkillsBuild learning plan",
      "Explored practical concepts and foundational technology solutions in AI for Sustainability",
      "Official certificate of completion verified under Credential Plan PLAN-56138075980A"
    ],
    tags: ["IBM | 1M1B", "Virtual Internship", "AI for Sustainability", "IBM SkillsBuild"]
  }
];

export const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" }
];

