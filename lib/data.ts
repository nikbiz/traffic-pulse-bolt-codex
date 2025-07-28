import { Service, CaseStudy, TeamMember, ProcessStep } from './types';

export const services: Service[] = [
  {
    id: 'paid-traffic',
    title: 'Paid Traffic Suite',
    description: 'Comprehensive paid advertising management across all major platforms',
    icon: 'target',
    features: ['Google Ads Management', 'Facebook & Instagram Ads', 'TikTok Advertising', 'LinkedIn Campaigns'],
    href: '/services/paid-traffic'
  },
  {
    id: 'automation-cro',
    title: 'Automation & CRO',
    description: 'Streamline operations and optimize conversions with advanced automation',
    icon: 'zap',
    features: ['Make.com Integration', 'n8n Workflows', 'Server-side Tracking', 'A/B Testing'],
    href: '/services/automation-cro'
  },
  {
    id: 'data-dashboards',
    title: 'Data & Dashboards',
    description: 'Transform your data into actionable insights with custom dashboards',
    icon: 'bar-chart-3',
    features: ['Looker Studio Reports', 'GA4 Implementation', 'Custom Dashboards', 'Performance Tracking'],
    href: '/services/data-dashboards'
  },
  {
    id: 'consulting',
    title: 'Consulting',
    description: 'Expert guidance and strategic support for your marketing initiatives',
    icon: 'users',
    features: ['Marketing Audits', 'Strategy Development', 'Monthly Support', 'Training Sessions'],
    href: '/services/consulting'
  }
];

export const caseStudies: CaseStudy[] = [
  {
    id: 'ecommerce-growth',
    title: 'E-commerce Revenue Growth',
    client: 'Fashion Forward',
    industry: 'E-commerce',
    channel: 'Google Ads',
    problem: 'Low ROAS and high customer acquisition costs across Google Ads campaigns',
    solution: 'Implemented advanced audience segmentation, shopping campaigns optimization, and automated bidding strategies',
    results: [
      { metric: 'ROAS', value: '4.2x', improvement: '+165%' },
      { metric: 'Revenue', value: '$2.1M', improvement: '+240%' },
      { metric: 'CPA', value: '$45', improvement: '-52%' }
    ],
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg'
  },
  {
    id: 'saas-leads',
    title: 'SaaS Lead Generation',
    client: 'TechFlow Solutions',
    industry: 'SaaS',
    channel: 'LinkedIn Ads',
    problem: 'Difficulty reaching qualified B2B prospects and generating high-quality leads',
    solution: 'Developed targeted LinkedIn campaigns with custom audiences and lead magnets',
    results: [
      { metric: 'Qualified Leads', value: '320', improvement: '+180%' },
      { metric: 'Cost per Lead', value: '$85', improvement: '-35%' },
      { metric: 'Conversion Rate', value: '12%', improvement: '+90%' }
    ],
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg'
  },
  {
    id: 'local-service',
    title: 'Local Service Business',
    client: 'Elite Home Services',
    industry: 'Home Services',
    channel: 'Facebook Ads',
    problem: 'Seasonal revenue fluctuations and limited local market penetration',
    solution: 'Created geo-targeted campaigns with seasonal messaging and local community engagement',
    results: [
      { metric: 'Local Reach', value: '85K', improvement: '+300%' },
      { metric: 'Bookings', value: '450', improvement: '+125%' },
      { metric: 'Revenue', value: '$680K', improvement: '+185%' }
    ],
    image: 'https://images.pexels.com/photos/416322/pexels-photo-416322.jpeg'
  }
];

export const teamMembers: TeamMember[] = [
  {
    id: 'sarah-chen',
    name: 'Sarah Chen',
    role: 'Founder & CEO',
    bio: 'Former Google Ads specialist with 8+ years of experience scaling digital marketing campaigns. Expert in paid traffic and conversion optimization.',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
    linkedin: 'https://linkedin.com/in/sarah-chen'
  },
  {
    id: 'marcus-rodriguez',
    name: 'Marcus Rodriguez',
    role: 'Head of Data & Analytics',
    bio: 'Data scientist turned marketing analyst. Specializes in advanced tracking, attribution modeling, and dashboard creation.',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
    linkedin: 'https://linkedin.com/in/marcus-rodriguez'
  },
  {
    id: 'emily-watson',
    name: 'Emily Watson',
    role: 'Senior Campaign Manager',
    bio: 'Creative strategist with expertise in social media advertising and audience development across Meta and TikTok platforms.',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
    linkedin: 'https://linkedin.com/in/emily-watson'
  }
];

export const processSteps: ProcessStep[] = [
  {
    id: 'audit',
    step: 1,
    title: 'Comprehensive Audit',
    description: 'We analyze your current marketing setup, identify gaps, and uncover growth opportunities.',
    icon: 'search'
  },
  {
    id: 'strategy',
    step: 2,
    title: 'Strategic Planning',
    description: 'Based on audit findings, we develop a customized growth strategy aligned with your business goals.',
    icon: 'target'
  },
  {
    id: 'implementation',
    step: 3,
    title: 'Expert Implementation',
    description: 'Our team executes campaigns, sets up tracking, and implements optimization systems.',
    icon: 'settings'
  },
  {
    id: 'optimization',
    step: 4,
    title: 'Continuous Optimization',
    description: 'We monitor performance, test improvements, and scale successful campaigns for maximum ROI.',
    icon: 'trending-up'
  }
];

export const clientLogos = [
  { name: 'TechCorp', logo: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg' },
  { name: 'GrowthCo', logo: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg' },
  { name: 'ScaleUp', logo: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg' },
  { name: 'InnovateLab', logo: 'https://images.pexels.com/photos/218863/pexels-photo-218863.jpeg' },
  { name: 'FastTrack', logo: 'https://images.pexels.com/photos/209137/pexels-photo-209137.jpeg' },
  { name: 'NextGen', logo: 'https://images.pexels.com/photos/301926/pexels-photo-301926.jpeg' }
];