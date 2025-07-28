export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  href: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  channel: string;
  problem: string;
  solution: string;
  results: {
    metric: string;
    value: string;
    improvement: string;
  }[];
  image: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
}

export interface ProcessStep {
  id: string;
  step: number;
  title: string;
  description: string;
  icon: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  message: string;
}