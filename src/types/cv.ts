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

export interface CVData {
  name: string;
  title: string;
  yearsOfExperience: number;
  contactInfo: ContactInfo;
  primarySkills: string[];
  allSkills: string[];
  programmingLanguages: string[];
  frameworks: string[];
  professionalSummary: {
    intro: string;
    careerProgression: string;
    currentRole: string;
  };
  workExperience: WorkExperience[];
}
