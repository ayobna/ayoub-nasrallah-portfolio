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
    github: "https://github.com/ayobna?tab=repositories",
  },
  summary:
    "Full-Stack Developer with 3.5+ years of experience building and maintaining large-scale securities and capital-markets management systems using Angular, .NET Core, SQL Server, and Azure DevOps. Experienced in delivering end-to-end solutions across database, backend, and frontend layers, implementing complex business workflows, and supporting enterprise applications used by institutional financial organizations.",
  passion:
    "Passionate about modern software development, cloud technologies, and AI-powered development tools.",
};

export const stats = [
  { value: "3.5+", label: "Years Experience" },
  { value: "400+", label: "Screens Built" },
  { value: "250K+", label: "Records Exported" },
  { value: "100", label: "Final Project Grade" },
];

export const experience = {
  role: "Full-Stack Developer",
  company: "ZioNet",
  companyUrl: "https://www.zion-net.co.il/",
  client: "Poalim-Sahar",
  period: "Nov 2022 – Present",
  location: "Tel Aviv",
  description:
    "Enterprise financial & securities-management platform serving institutional investors and large financial organizations, including insurance companies and enterprise clients.",
  stack: ["Angular", "DevExtreme", "ASP.NET Core", "SQL Server", "SignalR"],
  highlights: [
    "Delivered end-to-end features across SQL Server, ASP.NET Core, and Angular based on business requirements and functional specifications",
    "Designed and implemented database changes, backend services, REST APIs, and frontend screens for a platform containing over 400 screens",
    "Took ownership of complete feature delivery, from requirements analysis through implementation, testing, and release preparation",
    "Participated in requirements and business-process discussions, identifying calculation and workflow inconsistencies before implementation",
    "Implemented complex business logic and financial workflows for securities-management operations",
    "Built and maintained Angular applications using TypeScript and DevExtreme components",
    "Worked extensively with SQL Server, Entity Framework, Stored Procedures, and data-management processes",
    "Developed real-time functionality using SignalR",
    "Built high-performance Excel export solutions handling 250K+ records with RTL Hebrew support",
    "Served as a key knowledge resource for multiple application modules, supporting production issue investigations and troubleshooting",
    "Worked closely with QA engineers to validate requirements, investigate issues, and improve release quality",
  ],
};

export const skillCategories = [
  {
    title: "Frontend",
    icon: "Layout",
    skills: [
      "Angular",
      "TypeScript",
      "RxJS",
      "DevExtreme",
      "Bootstrap",
      "React",
      "React Native",
      "JavaScript",
      "HTML5",
    ],
  },
  {
    title: "Backend",
    icon: "Server",
    skills: [
      "C#",
      ".NET Core",
      "ASP.NET MVC",
      "SignalR",
      "Entity Framework Core",
      "Java",
      "Spring Framework",
    ],
  },
  {
    title: "Databases",
    icon: "Database",
    skills: [
      "SQL Server",
      "Stored Procedures",
      "MongoDB",
      "Firebase",
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: "Cloud",
    skills: [
      "Azure",
      "Azure DevOps",
      "Docker",
      "Kubernetes",
      "Microservices",
      "Git",
      "GitHub Actions",
      "CI/CD",
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
      "Playwright",
      "RAG",
      "AI Agents",
      "MCP",
      "Azure OpenAI",
    ],
  },
  {
    title: "Architecture",
    icon: "GitBranch",
    skills: [
      "REST API",
      "OpenAPI/Swagger",
      "Repository Pattern",
      "MVC Architecture",
      "OOP",
      "Python",
    ],
  },
];

export const education = [
  {
    program: "Microservices & Cloud Development",
    institution: "Tsofen-Tashbik",
    institutionUrl:
      "https://www.linkedin.com/company/tsofen-tashbik/posts/?feedView=all",
    period: "2024",
    description:
      "Professional program covering Microservices architecture, Docker, Kubernetes, Spring Framework, SQL/NoSQL, Git, and DevOps fundamentals.",
    project: "DisplayingSocialMediaData",
    projectUrl: "https://github.com/ayobna/DisplayingSocialMediaData",
  },
  {
    program: "Practical High-Tech Engineering",
    institution: "ZioNet & Heznek",
    institutionUrl: "https://www.zion-net.co.il/",
    period: "2021 – 2022",
    description:
      "Built three React Native apps; final app ran in real-time with Azure SignalR, an ASP.NET Core backend, Azure App Service, and Azure SQL.",
    project: "ShoppingList",
    projectUrl: "https://github.com/ayobna/ShoppingList",
    stack: ["React Native", "Azure SignalR", "ASP.NET Core", "Azure SQL"],
  },
  {
    program: "Practical Software Engineer",
    institution: "Ruppin Academic Center",
    period: "2019 – 2021",
    description: "Comprehensive software engineering program with hands-on project development.",
    project: "Take Me To Work",
    projectUrl:
      "https://firebasestorage.googleapis.com/v0/b/takemetowork-e2388.appspot.com/o/TakeMeToWork.pdf?alt=media&token=88ff23bb-47fa-4775-a3d9-a92669d9a1cb",
    grade: "100",
  },
];

export const languages = [
  { name: "Arabic", level: "Native", percent: 100 },
  { name: "Hebrew", level: "Native", percent: 100 },
  { name: "English", level: "Professional", percent: 85 },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];
