import { CVData } from "@/types/cv";

const startYear = 2014;
const currentYear = new Date().getFullYear();
const yearsOfExperience = currentYear - startYear;

const baseData: CVData = {
  name: "Carlos Javier Gonzalez Vasquez",
  title: "Senior Software Engineer",
  yearsOfExperience: yearsOfExperience,
  contactInfo: {
    email: "justdevelopitmx@proton.me",
    phone: "",
    location: "",
    github: "https://github.com/karurosux",
    linkedin: "https://www.linkedin.com/in/karurosux",
  },
  primarySkills: [
    "TypeScript",
    "JavaScript",
    "Go",
    "Java",
    "Dart",
    "C#",
    "Next.js",
    "React",
    "Angular",
    "Node.js",
    "Flutter",
    "PostgreSQL",
    "Docker",
    "Dokploy",
  ],
  allSkills: [
    "TypeScript",
    "JavaScript",
    "Go",
    "Java",
    "Dart",
    "C#",
    "Bash",
    "Next.js",
    "React",
    "Angular",
    "Node.js",
    "Flutter",
    "Echo",
    "Spring",
    ".NET",
    "ExtJS",
    "PostgreSQL",
    "PostGIS",
    "SQLite",
    "Redis",
    "Oracle SQL",
    "MS SQL",
    "MySQL",
    "Docker",
    "Dokploy",
    "NGINX",
    "Git",
    "Stripe",
    "RevenueCat",
    "Groq API",
    "Google ML Kit",
    "OpenCV",
    "Sentry",
    "Firebase",
    "Distributed Systems",
    "Microservices",
    "Domain-Driven Design (DDD)",
    "RESTful APIs",
    "CI/CD",
    "Machine Learning",
  ],
  programmingLanguages: [
    "TypeScript",
    "JavaScript",
    "Go",
    "Java",
    "Dart",
    "C#",
    "Bash",
  ],
  frameworks: [
    "Next.js",
    "React",
    "Angular",
    "Node.js",
    "Flutter",
    "Echo",
    "Spring",
    ".NET",
    "ExtJS",
  ],
  databases: [
    "PostgreSQL",
    "PostGIS",
    "SQLite",
    "Redis",
    "Oracle SQL",
    "MS SQL",
    "MySQL",
  ],
  infrastructure: [
    "Docker",
    "Dokploy",
    "NGINX",
    "Git",
    "Stripe",
    "RevenueCat",
    "Groq API",
    "Google ML Kit",
    "OpenCV",
    "Sentry",
    "Firebase",
  ],
  concepts: [
    "Distributed Systems",
    "Microservices",
    "Domain-Driven Design (DDD)",
    "RESTful APIs",
    "CI/CD",
    "Machine Learning",
  ],
  languages: [
    { name: "Spanish", proficiency: "Native" },
    { name: "English", proficiency: "Fluent" },
  ],
  certifications: [],
  professionalSummary: {
    intro: `Senior Full Stack Engineer with ${yearsOfExperience}+ years of experience architecting and delivering high-performance, scalable applications across multiple platforms and technologies.`,
    careerProgression:
      "Throughout my career, I've led technical teams, architected enterprise solutions, and built products from the ground up. I've worked extensively with Angular, React, Flutter, Node.js, Go, and Java, deploying containerized solutions using Docker and Dokploy.",
  },
  workExperience: [
    {
      company: "Semantic AI/Research",
      location: "San Diego, CA",
      positions: [
        {
          title: "Team Lead",
          startDate: "Jan 2022",
          endDate: "May 2025",
          description: [
            "Architected and led the development of a mission-critical statistics and frequency plugin following product specifications, securing a key enterprise contract through advanced data visualization capabilities.",
            "Directed the Stability Team as technical lead, achieving a 90% resolution rate for critical full-stack issues across Angular, Java, and PostgreSQL.",
            "Provided continuous technical mentorship to junior and senior software engineers, fostering professional growth and elevating team performance.",
            "Acted as a primary advisor for the engineering team, defining robust technical architectures for complex product challenges.",
            "Architected and spearheaded the development of a cross-organizational plugin framework utilizing Angular, TypeScript, Java, and PostgreSQL.",
            "Led a Proof of Concept (POC) for the seamless integration of low-code/no-code platforms like AppSmith into the proprietary plugin ecosystem.",
            "Designed and deployed a Node.js-based CLI tool to automate plugin generation, standardizing development workflows across teams.",
            "Optimized engineering efficiency by Dockerizing core development dependencies, reducing environment setup friction for the entire team.",
          ],
          skills: [
            "Angular",
            "React",
            "TypeScript",
            "Java Spring",
            "PostgreSQL",
            "Docker",
            "Node.js",
            "NgRx",
            "OpenLayers",
          ],
        },
        {
          title: "Senior Software Engineer",
          startDate: "Jan 2019",
          endDate: "Dec 2021",
          description: [
            "Engineered a visual Data Import Mapping Manager using TypeScript and Angular, replacing manual JSON configuration and accelerating the import setup process for users.",
            "Developed and deployed the initial end-to-end (E2E) automated testing suite using Angular's native tooling, significantly enhancing regression coverage.",
            "Spearheaded code reviews, establishing best practices that consistently elevated code maintainability and quality across the engineering team.",
            "Optimized technical recruitment by evaluating engineering candidates, directly contributing to high-tier hiring standards and earning 'Employee of the Quarter' honors.",
          ],
          skills: [
            "Angular",
            "TypeScript",
            "Node.js",
            "REST APIs",
            "E2E Testing",
          ],
        },
      ],
    },
    {
      company: "PRA Health Sciences",
      location: "San Diego, CA",
      positions: [
        {
          title: "Software Engineer",
          startDate: "Jul 2017",
          endDate: "Jan 2019",
          description: [
            "Developed 4+ clinical trial web applications using Angular and TypeScript, integrating frontend with Web APIs.",
            "Engineered a custom Node.js CLI tool to scaffold Angular applications, accelerating development speed by 70% and standardizing project structures across teams.",
          ],
          skills: ["Angular", "TypeScript", "Node.js", "REST APIs"],
        },
      ],
    },
    {
      company: "BTS (Bufete de Tecnologia y Soluciones Avanzadas)",
      location: "Mexicali, BC, Mexico",
      positions: [
        {
          title: "Team Lead",
          startDate: "Jan 2015",
          endDate: "Jul 2017",
          description: [
            "Architected and launched a low-code/no-code legal application builder from the ground up.",
            "Engineered a dynamic form builder module driven by configuration defined by users, utilizing a C# API and ExtJS.",
            "Built an automated logging system using Oracle and MS SQL stored procedures to dynamically generate record logs.",
            "Acted as the primary technical escalation point for complex engineering blockers and critical system issues.",
            "Led comprehensive ExtJS training workshops for cross-functional teams, accelerating framework adoption across the organization.",
          ],
          skills: ["ExtJS", "C#", ".NET", "Oracle SQL", "MS SQL"],
        },
        {
          title: "FullStack Developer",
          startDate: "Jul 2014",
          endDate: "Jan 2015",
          description: [
            "Resolved 50+ critical application issues across the full stack (C#, ExtJS, Oracle SQL).",
            "Delivered core application features and developed proof-of-concepts (POCs) for new product initiatives.",
            "Provided continuous peer mentorship, successfully unblocking teammates on over 30 technical challenges.",
          ],
          skills: ["ExtJS", "C#", ".NET", "Oracle SQL"],
        },
        {
          title: "Jr. FullStack Developer",
          startDate: "Jan 2014",
          endDate: "Jul 2014",
          description: [
            "Resolved complex, legacy system defects that had previously stalled other engineering teams using C#, ORACLE SQL and ExtJs.",
            "Developed and integrated custom backend RDLC reports for enterprise clients.",
            "Authored a reusable RDLC text justification library that achieved widespread adoption across multiple engineering teams.",
          ],
          skills: ["ExtJS", "C#", ".NET", "Oracle SQL", "PL/SQL", "Angular"],
        },
      ],
    },
  ],
  projects: [
    {
      name: "TallyDeck – Remote Widgets Platform",
      url: "tallydeck.com",
      description: [
        "Architected and deployed a SaaS-based remote widgets platform, enabling real-time control for dynamic components including timers, prompters, and task lists.",
        "Integrated Stripe API for seamless subscription lifecycle management and automated billing workflows.",
        "Optimized deployment infrastructure by Dockerizing application components and orchestrating them via Dokploy on a private VPS.",
        "Established a robust CI/CD pipeline through Git-provider integration with Dokploy, enabling automated production deployments upon code changes.",
      ],
      technologies: [
        "Next.js",
        "Supabase",
        "Stripe",
        "PostgreSQL",
        "Dokploy",
        "Docker",
      ],
    },
    {
      name: "Dedishcious – Dish Discovery Application",
      url: "dedishcious.com/en",
      description: [
        "Utilized Next.js to architect the public-facing landing page and administrative staff portal.",
        "Engineered a robust backend monolith using Go, following Domain-Driven Design (DDD) principles to ensure future scalability into microservices.",
        "Deployed a Python-based Machine Learning layer to automate image moderation, utilizing Docker networking for secure cross-service communication.",
        "Optimized system performance by implementing Redis for distributed caching, significantly reducing backend computational load.",
        "Configured NGINX for advanced request proxying and rate limiting to enhance application security and reliability.",
        "Managed application state with PostgreSQL, leveraging the PostGIS extension for complex geospatial queries on dish locations.",
        "Developed a cross-platform mobile application using Flutter and Dart, featuring interactive maps and advanced discovery filters using BLOC pattern.",
        "Integrated RevenueCat to manage mobile subscription lifecycles and dynamic paywall deployment.",
        "Containerized the entire architectural stack with Docker to streamline deployment via Dokploy on private infrastructure.",
        "Established a seamless CI/CD pipeline by integrating Git providers with Dokploy for automated production updates.",
        "Integrated Sentry to facilitate real-time issue reporting and error tracking across the application stack.",
        "Leveraged Firebase for the implementation of advanced user analytics and a robust push notification infrastructure.",
      ],
      technologies: [
        "Next.js",
        "Go",
        "Flutter",
        "Dart",
        "RevenueCat",
        "Redis",
        "Python",
        "ML",
        "NGINX",
        "Sentry",
        "Firebase",
        "PostgreSQL",
        "PostGIS",
        "Docker",
        "Dokploy",
      ],
    },
    {
      name: "Glancy – Membership Management Mobile App",
      url: "iOS App Store",
      description: [
        "Designed and deployed a cross-platform membership management solution utilizing Flutter and Dart, enabling real-time validation via the device camera.",
        "Integrated RevenueCat to manage mobile subscription lifecycles and dynamic paywall deployment.",
        "Leveraged Google Face Detection ML Kit to enable real-time membership validation by simply pointing the device camera at members.",
        "Integrated Sentry to facilitate real-time issue reporting and error tracking across the application stack.",
        "Leveraged Firebase for the implementation of advanced user analytics.",
      ],
      technologies: [
        "Dart",
        "Flutter",
        "Revenue Cat",
        "SQLite",
        "Google Face Detection ML Kit",
        "Sentry",
        "Firebase",
      ],
    },
    {
      name: "ThumbMark – Fingerprint Analysis Application",
      url: "iOS App Store",
      description: [
        "Designed and deployed a cross-platform fingerprint analysis solution utilizing Flutter and Dart, enabling multi-subject capture via the device camera.",
        "Integrated RevenueCat to manage mobile subscription lifecycles and dynamic paywall deployment.",
        "Leveraged OpenCV to implement binary and high-contrast image processing filters, optimizing fingerprint data for advanced analytical review.",
        "Integrated Sentry to facilitate real-time issue reporting and error tracking across the application stack.",
      ],
      technologies: [
        "Dart",
        "Flutter",
        "Revenue Cat",
        "SQLite",
        "OpenCV",
        "Sentry",
      ],
    },
    {
      name: "Numeri – Numerology Report with AI Integration",
      url: "Not Published",
      description: [
        "Architected and developed an AI-driven numerology platform designed to serve as a universal guide, generating comprehensive, personalized reports based on advanced numeric heuristics.",
        "Integrated RevenueCat to manage mobile subscription lifecycles and dynamic paywall deployment.",
        "Integrated Groq API to architect an AI-driven engine for generating personalized reports based on advanced numerology heuristics.",
      ],
      technologies: ["Dart", "Flutter", "Revenue Cat", "SQLite", "Groq"],
    },
  ],
  education: [
    {
      degree: "Engineering in Information Technologies",
      institution: "Universidad Politécnica de Baja California",
      location: "Mexicali, Baja California, Mexico",
      startDate: "Sep 2011",
      endDate: "Dec 2014",
      description:
        "Relevant Coursework: Database Management, Computer Networks, Data Structures and Algorithms (C), Web Development (JavaScript), Object Oriented Programming (C#).",
      achievements: [
        "Awards: 1st Place in 6th Scientific and Technological Creativity Contest (3rd Semester)",
        "Awards: 3rd Place in 5th Scientific and Technological Creativity Contest (1st Semester)",
        "Recognition: Recognized during UPBC University Expo 2012 and Expo 2013 'Innovation Meeting with Engineering, Science and Technology' for collaborating on the Expo Demo Project",
      ],
    },
  ],
};

export const getCVData = (): CVData => {
  if (typeof window === "undefined") {
    return baseData;
  }

  const params = new URLSearchParams(window.location.search);
  const phoneParam = params.get("cvp");
  const locationParam = params.get("cvl");
  const jobTitleParam = params.get("cvjt");

  return {
    ...baseData,
    title: jobTitleParam || baseData.title,
    contactInfo: {
      ...baseData.contactInfo,
      phone: phoneParam || baseData.contactInfo.phone,
      location: locationParam || baseData.contactInfo.location,
    },
  };
};

export const cvData = baseData;

