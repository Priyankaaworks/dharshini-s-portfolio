export interface Project {
  slug: string;
  title: string;
  category: 'Web Development' | 'Frontend' | 'Backend' | 'Full Stack' | 'AI/ML' | 'Data Science';
  tags: string[];
  image: string;
  shortDescription: string;
  fullDescription: string;
  problem: string;
  solution: string;
  keyFeatures: string[];
  techStack: string[];
  challenges: string[];
  lessonsLearned: string[];
  liveDemoUrl: string;
  githubUrl: string;
  featured: boolean;
  isSample: boolean;
  publishedDate: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    level?: string;
    icon?: string;
    familiarity?: 'Proficient' | 'Intermediate' | 'Learning';
  }[];
}

export interface ExperienceItem {
  id: string;
  type: 'work' | 'education' | 'certification' | 'hackathon';
  roleOrDegree: string;
  organization: string;
  period: string;
  location?: string;
  description: string;
  achievements?: string[];
  skills?: string[];
  credentialUrl?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  summary: string;
  readTime: string;
  date: string;
  content: string[];
}

export const portfolioConfig = {
  // Personal Info (Easily editable by user)
  name: "Dharshini",
  fullName: "Dharshini B",
  initialsLogo: "D. </>",
  role: "Software Developer",
  tagline: "Building thoughtful digital experiences through clean code and creative problem-solving.",
  bio: "I create simple, beautiful and functional web applications and love turning ideas into real-world solutions.",
  aboutExtended: "I am a passionate software developer dedicated to crafting intuitive, performant web applications with clean architecture and delightful user experiences. With a foundation in computer science and front-end engineering, I focus on bridging the gap between artistic visual aesthetics and solid technical execution.",
  email: "dharshini9847@gmail.com",
  phone: "8807639507",
  phoneFormatted: "+91 8807639507",
  location: "Coimbatore, India",
  availableForHire: true,
  statusText: "Available for full-time roles & internships",

  // Social links
  social: {
    github: "https://github.com/Priyankaaworks",
    linkedin: "https://www.linkedin.com/in/dharshini-b-48bb0a413?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    email: "mailto:dharshini9847@gmail.com",
    phone: "tel:8807639507",
    twitter: "https://twitter.com",
  },

  // Media
  avatar: "/src/assets/images/darshini_portrait.jpg",

  // Key Statistics
  stats: [
    { label: "PROJECTS COMPLETED", value: "6+", icon: "laptop" },
    { label: "TECHNOLOGIES", value: "5+", icon: "code" },
    { label: "CERTIFICATIONS", value: "2+", icon: "graduation" },
    { label: "LEARNING & GROWTH", value: "100%", icon: "heart" },
  ],

  // 4-step development process
  processSteps: [
    {
      step: "01",
      title: "Discover",
      description: "Understand user needs and problem.",
      icon: "search",
    },
    {
      step: "02",
      title: "Design",
      description: "Plan the structure and user flow.",
      icon: "edit",
    },
    {
      step: "03",
      title: "Develop",
      description: "Write clean, efficient and scalable code.",
      icon: "code",
    },
    {
      step: "04",
      title: "Deliver",
      description: "Test, improve and launch the product.",
      icon: "rocket",
    },
  ],

  // Philosophy & Values
  philosophy: [
    {
      title: "Clean & Readable Code",
      description: "Writing code that is modular, maintainable, and self-documenting for seamless team collaboration.",
    },
    {
      title: "Human-Centered Design",
      description: "Every button, interaction, and layout choice is grounded in empathy for the person using it.",
    },
    {
      title: "Continuous Learning",
      description: "Exploring new frameworks, performance optimization patterns, and modern web architectures daily.",
    },
  ],
};

export const sampleProjects: Project[] = [
  {
    slug: "bakery-website",
    title: "Bakery Website",
    category: "Web Development",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "/src/assets/images/project_bakery_preview_1792248018173.jpg",
    shortDescription: "A responsive bakery website with a clean and modern UI design.",
    fullDescription: "A responsive artisanal bakery website featuring interactive pastry catalogs, warm pastel bakery aesthetics, fresh daily specials, smooth scroll animations, and customer inquiry workflows.",
    problem: "Artisan bakeries often struggle to present daily baked goods online with high visual appeal while preserving snappy mobile load times.",
    solution: "Engineered a lightweight, responsive web storefront using semantic HTML5, modern flexbox and grid layouts, and interactive vanilla JavaScript for menu filtering and basket calculations.",
    keyFeatures: [
      "Categorized dessert & pastry display with dynamic filtering",
      "Interactive cart estimation and custom cake ordering inquiry modal",
      "Responsive navigation tailored for mobile foodies on the go",
      "Accessibility-tested keyboard navigation and semantic landmarks"
    ],
    techStack: ["HTML5", "CSS3", "JavaScript (ES6+)", "Responsive Web Design"],
    challenges: [
      "Optimizing high-resolution food imagery without slowing down mobile performance",
      "Designing clean micro-interactions without relying on heavy external animation libraries"
    ],
    lessonsLearned: [
      "Deepened understanding of native DOM manipulation and CSS Grid transitions",
      "Learned how typography and warm color palettes influence user trust and appetite appeal"
    ],
    liveDemoUrl: "https://example.com/bakery-demo",
    githubUrl: "https://github.com/example/bakery-website",
    featured: true,
    isSample: true,
    publishedDate: "2026"
  },
  {
    slug: "task-management-app",
    title: "Task Management App",
    category: "Frontend",
    tags: ["React", "CSS", "JavaScript"],
    image: "/src/assets/images/project_task_manager_1792248019827.jpg",
    shortDescription: "A simple and efficient task management application with add, edit and delete features.",
    fullDescription: "A sleek productivity tool designed for agile individuals and software teams to organize, prioritize, and track tasks across different project stages with zero clutter.",
    problem: "Most task managers are overly bloated with enterprise workflows, making daily personal task organization slow and distracting.",
    solution: "Built a streamlined Kanban-style application with instant status updates, local state persistence, priority tagging, and subtask progress tracking.",
    keyFeatures: [
      "Kanban workflow (To Do, In Progress, In Review, Testing, Done)",
      "Instant task creation, inline editing, and deletion with undo buffer",
      "Priority badges, due-date reminders, and search/filter bar",
      "Persistent browser storage ensuring zero data loss across reloads"
    ],
    techStack: ["React 19", "JavaScript (ES6+)", "Tailwind CSS", "LocalStorage API"],
    challenges: [
      "Managing complex state across columns while preventing unnecessary re-renders",
      "Ensuring fluid drag-and-drop / column shifting on touch devices"
    ],
    lessonsLearned: [
      "Mastered React custom hooks for persistent state synchronisation",
      "Gained hands-on experience in atomic component architecture"
    ],
    liveDemoUrl: "https://example.com/task-demo",
    githubUrl: "https://github.com/example/task-management",
    featured: true,
    isSample: true,
    publishedDate: "2026"
  },
  {
    slug: "weather-dashboard",
    title: "Weather Dashboard",
    category: "Web Development",
    tags: ["HTML", "CSS", "JavaScript", "API"],
    image: "/src/assets/images/project_weather_dash_1792248019565.jpg",
    shortDescription: "A real-time weather app with location search and detailed weather information.",
    fullDescription: "An atmospheric weather web application providing real-time meteorological conditions, hourly temperature curves, 7-day forecasts, and dynamic visual landscapes.",
    problem: "Checking weather on conventional sites is cluttered with invasive banner ads, slow widgets, and cumbersome geographic search.",
    solution: "Created an uncluttered, scenic weather dashboard that leverages OpenWeather API to display temperature, humidity, wind velocity, and UV index with atmospheric backdrop themes.",
    keyFeatures: [
      "Real-time weather data fetching by city name or auto-geolocation",
      "7-day predictive forecast cards with temperature range indicators",
      "Atmospheric theme changes responding to time of day and current weather condition",
      "Metric and Imperial unit toggle with instant recalculation"
    ],
    techStack: ["JavaScript", "HTML5 Canvas", "RESTful Weather API", "CSS Custom Properties"],
    challenges: [
      "Handling edge-case API error responses gracefully (e.g. rate limits, misspelled cities)",
      "Caching recent weather queries to reduce redundant external API hits"
    ],
    lessonsLearned: [
      "Solidified asynchronous programming with Promises and async/await",
      "Implemented resilient fallback error boundaries for third-party network services"
    ],
    liveDemoUrl: "https://example.com/weather-demo",
    githubUrl: "https://github.com/example/weather-dashboard",
    featured: true,
    isSample: true,
    publishedDate: "2026"
  },
  {
    slug: "ai-powered-application",
    title: "AI-Powered Application",
    category: "AI/ML",
    tags: ["React", "TypeScript", "Python", "API"],
    image: "/src/assets/images/project_ai_analytics_1792248020171.jpg",
    shortDescription: "A developer playground and sentiment analysis assistant for text and code evaluation.",
    fullDescription: "An interactive AI developer studio that analyzes text sentiment, extracts key conceptual entities, and provides structured code explanations using modern machine learning APIs.",
    problem: "Developers and content creators need quick, reliable feedback on textual tone and code complexity without running heavy local inference pipelines.",
    solution: "Designed a clean browser interface connecting to cloud AI inference models, showing real-time token metrics, sentiment distribution charts, and syntax-highlighted summaries.",
    keyFeatures: [
      "Live sentiment classification with visual distribution graphs",
      "Code snippet explanation panel with markdown rendering",
      "Model prompt parameter tuning (temperature, response length)",
      "Exportable JSON evaluation reports"
    ],
    techStack: ["React", "TypeScript", "Python", "FastAPI / REST API", "Chart.js"],
    challenges: [
      "Streaming model tokens to the client smoothly without interface stutter",
      "Sanitizing dynamic markdown and syntax highlighting safely"
    ],
    lessonsLearned: [
      "Deepened skills in streaming HTTP connections and reactive state handling",
      "Understood prompt engineering and latency optimization strategies"
    ],
    liveDemoUrl: "https://example.com/ai-studio-demo",
    githubUrl: "https://github.com/example/ai-studio-app",
    featured: false,
    isSample: true,
    publishedDate: "2026"
  },
  {
    slug: "full-stack-web-application",
    title: "Full-Stack Web Application",
    category: "Full Stack",
    tags: ["React", "Node.js", "Express", "PostgreSQL"],
    image: "/src/assets/images/project_task_manager_1792248019827.jpg",
    shortDescription: "A collaborative workspace platform with secure authentication and database persistence.",
    fullDescription: "A full-stack collaborative notes and documentation application designed for developer teams to organize documentation, technical guides, and code snippets in real-time.",
    problem: "Scattered knowledge bases lead to silos and fragmented team onboarding.",
    solution: "Constructed an end-to-end full-stack app featuring relational schema modeling with PostgreSQL, Express REST endpoints, JWT authorization, and reactive React frontend.",
    keyFeatures: [
      "Role-based access control and secure JWT authentication",
      "Relational data model for workspaces, documents, and tags",
      "Full-text search across documentation pages",
      "Responsive markdown editor with live preview"
    ],
    techStack: ["Node.js", "Express", "PostgreSQL", "React", "TypeScript"],
    challenges: [
      "Designing an optimized relational schema with cascading deletions and foreign keys",
      "Securing API endpoints against common vulnerabilities (SQL injection, XSS, CSRF)"
    ],
    lessonsLearned: [
      "Gained comprehensive experience in database migrations and ORM query optimization",
      "Established standard practices for clean backend API layering (Controllers, Services, Repositories)"
    ],
    liveDemoUrl: "https://example.com/workspace-demo",
    githubUrl: "https://github.com/example/fullstack-workspace",
    featured: false,
    isSample: true,
    publishedDate: "2026"
  },
  {
    slug: "data-visualization-project",
    title: "Data Visualization Project",
    category: "Data Science",
    tags: ["Python", "JavaScript", "D3.js", "Data Viz"],
    image: "/src/assets/images/project_ai_analytics_1792248020171.jpg",
    shortDescription: "An interactive dashboard visualizing global environmental metrics and trends.",
    fullDescription: "A data visualization dashboard illustrating historical environmental and weather patterns across global regions, enabling users to explore correlation models interactively.",
    problem: "Large scientific datasets are often inaccessible to non-specialists due to raw tabular complexity.",
    solution: "Transformed multi-variable datasets into intuitive choropleth maps, scatter plots, and time-series line graphs using modern D3.js and responsive canvas charts.",
    keyFeatures: [
      "Interactive time-slider to view historical trend evolutions",
      "Dynamic filtering by geographic continent, metric type, and year range",
      "Tooltip inspection with statistical percentiles and averages",
      "Downloadable SVG and CSV dataset snapshots"
    ],
    techStack: ["D3.js", "React", "Python (Pandas)", "Tailwind CSS"],
    challenges: [
      "Rendering thousands of data points smoothly at 60 frames per second",
      "Ensuring color palettes are fully accessible to color-blind users"
    ],
    lessonsLearned: [
      "Gained mastery in SVG coordinate mapping and data-driven DOM transformations",
      "Appreciated the ethical responsibility of honest visual data representation"
    ],
    liveDemoUrl: "https://example.com/dataviz-demo",
    githubUrl: "https://github.com/example/data-visualization",
    featured: false,
    isSample: true,
    publishedDate: "2026"
  }
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Programming Languages",
    description: "Core languages used for problem solving, software logic, and application development.",
    skills: [
      { name: "C++", familiarity: "Proficient" },
      { name: "Python", familiarity: "Proficient" },
      { name: "JavaScript (ES6+)", familiarity: "Proficient" },
      { name: "TypeScript", familiarity: "Intermediate" },
      { name: "Java", familiarity: "Intermediate" },
      { name: "SQL", familiarity: "Proficient" },
    ]
  },
  {
    category: "Frontend Development",
    description: "Modern web tools and frameworks for creating responsive, accessible user interfaces.",
    skills: [
      { name: "React", familiarity: "Proficient" },
      { name: "HTML5", familiarity: "Proficient" },
      { name: "CSS3 / Sass", familiarity: "Proficient" },
      { name: "Tailwind CSS", familiarity: "Proficient" },
      { name: "Responsive Design", familiarity: "Proficient" },
      { name: "Web Accessibility (a11y)", familiarity: "Intermediate" },
    ]
  },
  {
    category: "Backend Development",
    description: "Server architectures, RESTful APIs, and business logic execution.",
    skills: [
      { name: "Node.js", familiarity: "Intermediate" },
      { name: "Express.js", familiarity: "Intermediate" },
      { name: "RESTful APIs", familiarity: "Proficient" },
      { name: "Authentication (JWT)", familiarity: "Intermediate" },
      { name: "API Integration", familiarity: "Proficient" },
    ]
  },
  {
    category: "Databases",
    description: "Data modeling, relational schemas, queries, and storage solutions.",
    skills: [
      { name: "MySQL", familiarity: "Proficient" },
      { name: "PostgreSQL", familiarity: "Intermediate" },
      { name: "MongoDB", familiarity: "Learning" },
      { name: "Database Design", familiarity: "Intermediate" },
    ]
  },
  {
    category: "Developer Tools",
    description: "Essential workflow instruments for version control, editing, and debugging.",
    skills: [
      { name: "Git", familiarity: "Proficient" },
      { name: "GitHub", familiarity: "Proficient" },
      { name: "VS Code", familiarity: "Proficient" },
      { name: "Postman", familiarity: "Proficient" },
      { name: "Vite", familiarity: "Proficient" },
      { name: "Chrome DevTools", familiarity: "Proficient" },
    ]
  },
  {
    category: "Testing & Quality",
    description: "Ensuring code correctness, preventing regressions, and linting standards.",
    skills: [
      { name: "Jest", familiarity: "Intermediate" },
      { name: "React Testing Library", familiarity: "Intermediate" },
      { name: "ESLint / Prettier", familiarity: "Proficient" },
      { name: "Manual QA & Test Cases", familiarity: "Proficient" },
    ]
  },
  {
    category: "Cloud & Deployment",
    description: "Hosting platforms, CI/CD pipelines, and cloud web infrastructure.",
    skills: [
      { name: "Vercel", familiarity: "Proficient" },
      { name: "Netlify", familiarity: "Proficient" },
      { name: "Render", familiarity: "Intermediate" },
      { name: "GitHub Actions", familiarity: "Learning" },
    ]
  },
  {
    category: "AI & Data Science",
    description: "Foundational data analysis, statistical modeling, and AI exploration.",
    skills: [
      { name: "Pandas & NumPy", familiarity: "Intermediate" },
      { name: "Data Cleaning & Viz", familiarity: "Intermediate" },
      { name: "LLM Prompt Engineering", familiarity: "Intermediate" },
      { name: "Jupyter Notebooks", familiarity: "Proficient" },
    ]
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: "exp-1",
    type: "work",
    roleOrDegree: "Software Developer Intern",
    organization: "Tech Solutions Studio (Sample Placeholder)",
    period: "2025 - 2026",
    location: "Remote / Hybrid",
    description: "Contributed to front-end feature implementations, responsive page builds, and bug fixes across web applications.",
    achievements: [
      "Refactored navigation components, improving accessibility compliance and mobile responsiveness",
      "Collaborated with senior developers on RESTful API consumption and state management workflows",
      "Participated in weekly code reviews and sprint planning sessions"
    ],
    skills: ["React", "JavaScript", "Tailwind CSS", "Git", "REST APIs"]
  },
  {
    id: "exp-2",
    type: "education",
    roleOrDegree: "Bachelor of Technology in Computer Science & Engineering",
    organization: "Engineering Institute / University (Sample Placeholder)",
    period: "2022 - 2026",
    location: "Coimbatore, India",
    description: "Graduating with strong academic standing in Data Structures, Object-Oriented Programming, Database Management Systems, and Software Engineering.",
    achievements: [
      "Completed core coursework in Algorithms, Web Technologies, and Operating Systems",
      "Active participant in technical symposiums and university coding clubs"
    ],
    skills: ["Data Structures", "Algorithms", "C++", "DBMS", "Operating Systems"]
  },
  {
    id: "exp-3",
    type: "certification",
    roleOrDegree: "Meta Front-End Developer Specialization",
    organization: "Coursera / Meta (Sample Placeholder)",
    period: "2025",
    description: "Comprehensive multi-course curriculum covering modern JavaScript, React component hierarchies, version control with Git, and UI/UX testing.",
    skills: ["React", "JavaScript ES6+", "Version Control", "UI/UX Principles"]
  },
  {
    id: "exp-4",
    type: "certification",
    roleOrDegree: "Python for Everybody & Algorithmic Problem Solving",
    organization: "University of Michigan / Online Platform",
    period: "2024",
    description: "Foundational programming certification exploring data structures, file processing, and API web scrapers using Python.",
    skills: ["Python", "Data Structures", "APIs"]
  },
  {
    id: "exp-5",
    type: "hackathon",
    roleOrDegree: "Hackathon Finalist · Campus CodeSprint",
    organization: "Annual Inter-College Hackathon",
    period: "2025",
    description: "Built a functional prototype for community resource sharing within 36 hours alongside a 3-member developer team.",
    achievements: [
      "Selected as top 10 finalist among 80+ competing teams",
      "Designed and presented interactive live application prototype to industry judges"
    ],
    skills: ["Rapid Prototyping", "Team Collaboration", "Pitching", "React"]
  }
];

export const blogPosts: BlogPost[] = [
  {
    slug: "building-thoughtful-interfaces",
    title: "Building Thoughtful Interfaces: Why Visual Craft Matters in Code",
    category: "Design & Frontend",
    summary: "Reflecting on how intentional typography, warm color palettes, and subtle interactions bridge the gap between software engineering and user delight.",
    readTime: "4 min read",
    date: "October 2026",
    content: [
      "When we talk about software engineering, the conversation frequently centers on algorithmic efficiency, state machines, and API latency. While those foundations are indispensable, what the user touches and feels is the interface.",
      "An interface isn't merely a visual skin stretched over database rows. It is the conversation between a person's intent and a computer's capability. In this article, I explore three principles I apply to every project:",
      "1. Quiet Typography: Using expressive serifs for character and neutral sans-serifs for effortless reading.",
      "2. Natural Feedback: Ensuring hover and active states respond within 150 milliseconds to give the user tactile confidence.",
      "3. Respecting Whitespace: Allowing elements to breathe instead of packing every square inch with unnecessary widgets."
    ]
  },
  {
    slug: "mastering-async-javascript",
    title: "Demystifying Asynchronous JavaScript & Modern Fetch Workflows",
    category: "JavaScript",
    summary: "A practical guide to handling API states, error boundaries, and race conditions without messy code.",
    readTime: "5 min read",
    date: "September 2026",
    content: [
      "Every developer remembers their first encounter with asynchronous operations in JavaScript. From callback hell to Promises, and now async/await, our tools have evolved dramatically.",
      "In this tutorial, we review resilient network fetching patterns: how to implement AbortController for cancelable requests, graceful retry strategies, and user-friendly error banners that turn network failures into clear feedback."
    ]
  },
  {
    slug: "organizing-reusable-components",
    title: "How I Structure Reusable React Components for Long-Term Maintainability",
    category: "React Architecture",
    summary: "Lessons learned from organizing component directories, prop interfaces, and headless UI patterns.",
    readTime: "6 min read",
    date: "August 2026",
    content: [
      "As a project grows from a single page into a full application, component organization becomes the difference between rapid feature delivery and painful debugging cycles.",
      "Here is how I structure folder hierarchies, split presentational vs stateful concerns, and create clean TypeScript contracts that make customization effortless."
    ]
  }
];
