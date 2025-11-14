export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
}

export interface Skill {
  name: string;
  category: 'primary' | 'secondary';
}

export interface ProgrammingLanguage {
  name: string;
}

export interface Framework {
  name: string;
}

export interface WorkExperience {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  skills: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  description?: string;
  achievements?: string[];
}

export interface Language {
  name: string;
  proficiency: string;
}

export interface CVData {
  name: string;
  title: string;
  yearsOfExperience: number;
  contactInfo: ContactInfo;
  primarySkills: string[];
  allSkills: string[];
  programmingLanguages: string[];
  frameworks: string[];
  languages: Language[];
  professionalSummary: {
    intro: string;
    careerProgression: string;
    currentRole: string;
  };
  workExperience: WorkExperience[];
  education: Education[];
}

export interface CoverLetterData {
  recipientName?: string;
  recipientTitle?: string;
  companyName: string;
  companyAddress?: string;
  position: string;
  openingParagraph: string;
  bodyParagraphs: string[];
  closingParagraph: string;
  salutation: string;
}
