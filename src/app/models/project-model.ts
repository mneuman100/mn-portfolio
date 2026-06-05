
export interface Tag {
  label: string;
  color: string;
}

export interface Project {
  title: string;
  description: string;
  imageUrl: string;
  tags: Tag[];
  routerLink: string;
}

export const PROJECTS: Project[] = [
  {
    title: 'Capturing Tacit Knowledge',
    description: 'Contextual inquiry across eleven systems to preserve critical process knowledge before a role transition',
    imageUrl: 'agreement-invoicing-workflow-map-card.jpg',
    tags: [
      { label: 'Contextual Inquiry', color: 'green' },
      { label: 'Workflow Analysis', color: 'green' },
      { label: 'Qualitative Research', color: 'green' },
    ],
    routerLink: 'case-study/tacit-knowledge'
  },
  {
    title: 'Client Survey and Discovery Research',
    description: 'Mixed-methods research that established a baseline and informed the July 2022 Release Notes redesign',
    imageUrl: 'gold-dust.jpg',
    tags: [
      { label: 'Survey Design', color: 'green' },
      { label: 'Discovery Interviews', color: 'gold' },
      { label: 'Mixed-Methods Research', color: 'green' },
    ],
    routerLink: 'case-study/client-survey'
  },
  {
    title: 'Release Notes Workflow Redesign',
    description: 'Workflow analysis and retrospective facilitation that reduced missed deadlines from 29.3% to 21.6%',
    imageUrl: 'retrospective-board.png',
    tags: [
      { label: 'Workflow Analysis', color: 'green' },
      { label: 'Stakeholder Facilitation', color: 'gold' },
      { label: 'Problem Framing', color: 'blue' },
    ],
    routerLink: 'case-study/release-notes-process'
  },
  {
    title: 'Evaluating AI Before Committing to It',
    description: 'Structured usability evaluation of two AI tools that prevented premature adoption',
    imageUrl: 'command-ai.jpg',
    tags: [
      { label: 'Usability Evaluation', color: 'blue' },
      { label: 'Structured Testing', color: 'green' },
      { label: 'Risk Assessment', color: 'blue' },
    ],
    routerLink: 'case-study/ai-tools'
  },
  {
    title: 'Help Center Content Audit and IA Redesign',
    description: 'Content audit and IA redesign across RMIS and Billing that surfaced client needs ahead of formal feedback',
    imageUrl: 'billing-chart-after.jpg',
    tags: [
      { label: 'Content Audit', color: 'purple' },
      { label: 'Information Architecture', color: 'purple' },
      { label: 'Gap Analysis', color: 'blue' },
    ],
    routerLink: 'case-study/help-center'
  },
];