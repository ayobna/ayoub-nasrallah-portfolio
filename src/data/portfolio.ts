export const personalInfo = {
  name: "Ayoub Nasrallah",
  title: "Full-Stack Developer",
  tagline: "Angular & .NET Core",
  email: "ayobnas@gmail.com",
  phone: "+972-50-212-7125",
  whatsapp: "972502127125",
  whatsappMessage:
    "Hello Ayoub, I came across your portfolio and I'd like to connect with you regarding an opportunity. Looking forward to hearing from you!",
  location: "Tel Aviv, Israel",
  social: {
    linkedin: "https://www.linkedin.com/in/ayoub-nasrallah-091808200/",
    github: "https://github.com/ayobna",
  },
  summary:
    "Full-Stack Developer with 3.5+ years of experience developing and supporting enterprise financial applications using Angular, .NET Core, SQL Server, and Azure. Experienced in delivering end-to-end features across frontend, backend, REST APIs, and databases, translating business requirements into production solutions, investigating defects, and supporting releases.",
  passion:
    "Hands-on experience with AI-assisted development tools and modern engineering POCs. Currently preparing for an AI Engineering program starting July 2026.",
  heroIntro:
    "Full-Stack Developer with enterprise experience building and supporting financial applications — currently expanding into AI Engineering.",
};

export const stats = [
  { value: "3.5+", label: "Years Experience" },
  { value: "400+", label: "Screen Enterprise Platform" },
  { value: "3", label: "Featured Projects" },
  { value: "100", label: "Final Project Grade" },
];

export const experience = {
  role: "Full-Stack Developer",
  company: "ZioNet",
  companyUrl: "https://www.zion-net.co.il/",
  client: "Poalim-Sahar",
  clientDetail: "a subsidiary of Bank Hapoalim",
  period: "Nov 2022 – Jul 2026",
  location: "Tel Aviv",
  description:
    "Contributed as part of the development team to an internal enterprise financial platform used by Bank Hapoalim clients for securities and investment-management operations.",
  stack: [
    "Angular",
    "TypeScript",
    "DevExtreme",
    ".NET Core",
    "C#",
    "Entity Framework Core",
    "SQL Server",
    "REST APIs",
  ],
  highlights: [
    "Delivered end-to-end features across Angular, .NET Core, and SQL Server based on business requirements and functional specifications",
    "Developed and maintained Angular screens using TypeScript, RxJS, and DevExtreme, integrating them with REST APIs",
    "Built and maintained backend services, REST APIs, Entity Framework Core data access, database tables, T-SQL queries, and Stored Procedures",
    "Implemented and maintained business rules and financial workflows for securities and investment-management processes",
    "Investigated bugs and production issues and collaborated with developers, QA, and business teams throughout testing and release preparation",
  ],
};

export const skillCategories = [
  {
    title: "Backend",
    icon: "Server",
    skills: [
      "C#",
      ".NET Core",
      "Entity Framework Core",
      "SignalR",
      "Java",
      "Spring Boot",
    ],
  },
  {
    title: "Frontend",
    icon: "Layout",
    skills: [
      "Angular",
      "TypeScript",
      "RxJS",
      "DevExtreme",
      "React",
      "React Native",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Bootstrap",
    ],
  },
  {
    title: "Databases",
    icon: "Database",
    skills: [
      "SQL Server",
      "T-SQL",
      "Stored Procedures",
      "Azure SQL",
      "MongoDB",
      "Firebase",
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: "Cloud",
    skills: [
      "Azure",
      "Azure App Service",
      "Azure DevOps",
      "Git",
      "GitHub Actions",
      "CI/CD",
    ],
  },
  {
    title: "Training & Project Experience",
    icon: "Boxes",
    skills: [
      "Docker",
      "Kubernetes",
      "Microservices",
      "ASP.NET MVC (academic)",
    ],
  },
  {
    title: "AI & Modern Tools",
    icon: "Sparkles",
    skills: [
      "ChatGPT",
      "Claude",
      "Cursor",
      "GitHub Copilot",
      "RAG",
      "AI Agents",
      "MCP",
      "Azure OpenAI",
      "Python",
      "Playwright",
    ],
  },
  {
    title: "Architecture & APIs",
    icon: "GitBranch",
    skills: [
      "REST APIs",
      "OpenAPI / Swagger",
      "Repository Pattern",
      "MVC Architecture",
      "OOP",
    ],
  },
];

export const education = [
  {
    program: "AI Engineering",
    institution: "DevOps Experts",
    institutionUrl: "https://devopsexperts.co.il/",
    period: "Starting Jul 2026",
    status: "upcoming" as const,
    description:
      "Upcoming hands-on program covering Python, RAG, LLM integration, MCP, AI Agents, Docker, observability, and production deployment.",
  },
  {
    program: "Java Backend & Microservices Engineering",
    institution: "Tsofen-Tashbik",
    institutionUrl:
      "https://www.linkedin.com/company/tsofen-tashbik/posts/?feedView=all",
    period: "Feb 2024 – May 2024",
    description:
      "250-hour professional program covering Spring Boot, Microservices, Docker, Kubernetes, SQL/NoSQL, Git, and DevOps.",
    project: "DisplayingSocialMediaData",
    projectUrl: "https://github.com/ayobna/DisplayingSocialMediaData",
  },
  {
    program: "Full-Stack Software Engineering Bootcamp",
    institution: "ZioNet",
    institutionUrl: "https://www.zion-net.co.il/",
    period: "Nov 2021 – Mar 2022",
    description:
      "85-hour program. Built three React Native applications; final project: real-time collaborative shopping list using Azure SignalR, .NET Core, Azure App Service, and Azure SQL.",
    project: "ShoppingList",
    projectUrl: "https://github.com/ayobna/ShoppingList",
    stack: ["React Native", "Azure SignalR", ".NET Core", "Azure SQL"],
  },
  {
    program: "Practical Software Engineer",
    institution: "Ruppin Technological College",
    institutionUrl: "https://www.ruppin-tech.co.il/",
    period: "Oct 2019 – Jul 2021",
    description:
      "Final project grade: 100. TakeMeToWork — shared-ride scheduling application for shift workers with multi-stop route planning, real-time driver tracking, and barcode boarding confirmation.",
    project: "TakeMeToWork",
    projectUrl: "https://github.com/ayobna/TakeMeToWork_22",
    grade: "100",
    stack: ["React Native", "C#", "SQL Server", "Google Maps API"],
  },
];

export const projects = [
  {
    name: "TakeMeToWork",
    description:
      "Shared-ride scheduling application for shift workers with multi-stop route planning, real-time driver tracking, and barcode boarding confirmation. Final project grade: 100.",
    stack: ["React Native", "C#", "SQL Server", "Google Maps API"],
    link: {
      label: "GitHub",
      url: "https://github.com/ayobna/TakeMeToWork_22",
    },
    context: "Ruppin Technological College",
  },
  {
    name: "ShoppingList",
    description:
      "Real-time collaborative shopping list built as the final project of a full-stack bootcamp, using Azure SignalR, .NET Core, Azure App Service, and Azure SQL.",
    stack: ["React Native", "Azure SignalR", ".NET Core", "Azure App Service", "Azure SQL"],
    link: {
      label: "GitHub",
      url: "https://github.com/ayobna/ShoppingList",
    },
    context: "ZioNet Bootcamp",
  },
  {
    name: "DisplayingSocialMediaData",
    description:
      "Spring Boot microservices project from a Java backend and microservices engineering program, deployed with Docker.",
    stack: ["Spring Boot", "Microservices", "Docker"],
    link: {
      label: "GitHub",
      url: "https://github.com/ayobna/DisplayingSocialMediaData",
    },
    context: "Tsofen-Tashbik",
  },
];

export const languages = [
  { name: "Arabic", level: "Native", percent: 100 },
  { name: "Hebrew", level: "Native", percent: 100 },
  { name: "English", level: "Professional Working Proficiency", percent: 85 },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];
