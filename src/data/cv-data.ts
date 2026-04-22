import { CVData } from "@/types/cv";

const calculateYearsOfExperience = (): number => {
  const startDate = new Date(2014, 0); // January 2014
  const currentDate = new Date();
  let years = currentDate.getFullYear() - startDate.getFullYear();
  if (
    currentDate.getMonth() < startDate.getMonth() ||
    (currentDate.getMonth() === startDate.getMonth() && currentDate.getDate() < startDate.getDate())
  ) {
    years--;
  }
  return years;
};

const baseData: CVData = {
  name: "Carlos Javier Gonzalez Vasquez",
  title: "Senior Software Engineer",
  yearsOfExperience: calculateYearsOfExperience(),
  contactInfo: {
    email: "justdevelopitmx@proton.me",
    phone: "",
    location: "",
    github: "https://github.com/karurosux",
    linkedin: "https://www.linkedin.com/in/karurosux",
  },
  primarySkills: [
    "TypeScript",
    "Node.js",
    "Go",
    "Java",
    "React",
    "Angular",
    "PostgreSQL",
    "Docker",
    "REST APIs",
    "CI/CD",
    "System Architecture",
    "JavaScript",
    "Agile/Scrum",
  ],
  allSkills: ["Docker", "PostgreSQL", "Oracle Database", "Microsoft SQL Server", "REST API", "Git", "CI/CD", "Microservices", "Responsive Design", "Web Development"],
  programmingLanguages: [
    "JavaScript",
    "TypeScript",
    "Go",
    "C#",
    "Java",
    "SQL",
  ],
  frameworks: [
    "Angular",
    "React",
    "Next.js",
    "SvelteKit",
    "Echo",
    "LAMP Stack",
    "ExtJS",
    "Express.js",
    "NestJS",
    "PocketBase",
  ],
  languages: [
    { name: "Spanish", proficiency: "Native" },
    { name: "English", proficiency: "Fluent" },
  ],
  certifications: [
    {
      name: "Microsoft Certified: HTML5, CSS3 and JavaScript Developer",
      issuer: "Microsoft",
    },
  ],
  professionalSummary: {
    intro:
      "I am a Senior Software Engineer with over a decade of experience architecting and delivering high-performance, scalable applications. I specialize in designing robust end-to-end solutions that bridge complex backend architectures with seamless user experiences. Throughout my career, I have consistently driven technical innovation, from optimizing database operations and deploying containerized services to leading cross-functional teams in delivering enterprise-grade platforms.",
    careerProgression:
      "My technical foundation was built on engineering comprehensive, data-driven systems, including property registry platforms utilizing C#/.NET and Oracle/MSSQL. I advanced my expertise by architecting clinical trial applications that demanded strict data integrity, real-time RESTful API integrations, and secure data collection workflows. Driven by a passion for scalable architectures, I have continuously expanded my technical repertoire across modern distributed systems, API design, and containerized deployments.",
    currentRole:
      "At Semantic AI, I lead the technical direction for critical enterprise platforms, architecting modular plugin frameworks and delivering comprehensive features across the entire technology stack. My contributions span engineering robust Java Spring services and optimizing PostgreSQL data flows to developing custom CLI tools and managing Docker-based environments. By prioritizing system reliability and performance—such as reducing application load times by orders of magnitude—I have directly enabled customer retention and the successful delivery of high-stakes contracts. Recognition of my contributions culminated in receiving the Employee of the Year award.",
  },
  workExperience: [
    {
      title: "Sr. Software Engineer",
      company: "Semantic AI",
      location: "San Diego, CA",
      startDate: "Jan 2019",
      endDate: "May 2025",
      description:
        "Led cross-functional team of 5 engineers and mentored 3 engineers on modern web development practices, design patterns, and Agile/Scrum methodologies. Architected and developed 3 enterprise-grade plugins utilizing a robust component-based architecture and integrated RESTful APIs, adopted by 4 internal teams, significantly expanding platform capabilities. Optimized application performance by implementing service worker caching strategies, reducing application reload time from seconds to milliseconds. Spearheaded Stability team for 1 year, resolving 5-10 critical war room incidents annually and maintaining system reliability. Delivered 4 proof-of-concept projects, directly supporting customer retention and new feature validation. Developed comprehensive enterprise applications utilizing Java Spring for robust backend services, integrated with PostgreSQL databases, and managed Docker containerization for development and deployment environments. Also developed scalable frontend interfaces using Angular 2+ and React with TypeScript, implementing complex state management with NgRx and Redux. Received Employee of the Year award for exceptional technical contributions and leadership impact.",
      skills: [
        "Angular",
        "React",
        "TypeScript",
        "Java Spring",
        "Docker",
        "NgRx",
        "PostgreSQL",
        "OpenLayers",
        "Leaflet",
        "Tailwind",
        "Bootstrap",
        "Scrum",
        "Git",
        "Gitflow",
      ],
    },
    {
      title: "Software Engineer",
      company: "PRA Health Sciences",
      location: "San Diego, CA",
      startDate: "Jul 2017",
      endDate: "Jan 2019",
      description:
        "Developed and maintained 3 clinical trial web applications using Angular 2+ framework with TypeScript, implementing responsive user interfaces with Angular Material and delivering scalable frontend solutions following component-based architecture. Collaborated with 3-person team (2 frontend, 1 backend) to deliver high-quality healthcare software for medical research. Engineered custom CLI tool using Yeoman and Node.js to automate project scaffolding, improving development workflow efficiency and ensuring code consistency across teams. Implemented RESTful API integrations for real-time data collection and ensured cross-browser compatibility for clinical trial participants.",
      skills: [
        "Angular",
        "TypeScript",
        "Node.js",
        "Yeoman",
        "Angular Material",
        "Git",
        "Gitflow",
      ],
    },
    {
      title: "Team Lead",
      company: "Bufete de Tecnologia y Soluciones Avanzadas",
      location: "Mexicali, BC, Mexico",
      startDate: "Jan 2014",
      endDate: "Jul 2017",
      description:
        "Promoted to Team Lead within 6 months of hire, managing cross-functional team of 5 members (3 full-stack developers, 2 QA engineers) delivering enterprise web applications for Mexico's public property registry system. Led full-stack development using ExtJS framework for frontend, C#/.NET for backend services, and Oracle Database/Microsoft SQL Server for data persistence. Successfully delivered 2 major projects including quoter module for property registry system, serving government operations. Architected and implemented Entity Framework ORM for database operations and designed RESTful APIs for client-server communication. Coordinated Agile/Scrum sprint execution, including sprint planning, daily standups, and retrospectives to consistently meet project goals and deadlines. Conducted technical research and developed proof-of-concepts for architectural solutions, evaluating new technologies and frameworks to improve development efficiency. Managed version control with Git using Gitflow branching strategy, ensuring code quality and team collaboration.",
      skills: [
        "ExtJS",
        "C#",
        ".NET",
        "Oracle Database",
        "Microsoft SQL Server",
        "Entity Framework",
        "JavaScript",
        "Node.js",
        "Agile/Scrum",
        "Git",
        "Gitflow",
      ],
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
        "Focused on software engineering, Networks, and Business Intelligence.",
      achievements: [
        "3rd Place in 5th Scientific and Technological Creativity Contest",
        "1st Place in 6th Scientific and Technological Creativity Contest",
        'Demo Developer(Developed a demo game for the Expo) in UPBC University Expo 2012 "Innovation Meeting with Engineering, Science and Technology"',
        "Demo Developer(Developed a demo game in Unity Engine with movement sensors as game input for the Expo) in Vocational Guidance UPBC 2013",
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
