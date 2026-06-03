export type TagColor = 'lavender' | 'mint' | 'peach' | 'yellow' | 'blue' | 'pink';

export interface Tag {
  label: string;
  color: TagColor;
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
    title: 'Onboarding Research',
    description: 'Identifying friction points in the first 7 days of user activation.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=600',
    tags: [
      { label: 'Qualitative', color: 'lavender' },
      { label: 'Interviews', color: 'blue' },
      { label: 'Synthesis', color: 'mint' },
    ],
    routerLink: 'case-study/tacit-knowledge'
  },
  {
    title: 'Mobile Banking Study',
    description: 'Understanding trust and security perceptions in Gen Z banking apps.',
    imageUrl: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80&w=800&h=600',
    tags: [
      { label: 'Usability', color: 'peach' },
      { label: 'Surveys', color: 'yellow' },
      { label: 'Workshops', color: 'pink' },
    ],
    routerLink: 'case-study/client-survey'
  },
  {
    title: 'Accessibility Audit',
    description: 'Comprehensive WCAG 2.1 evaluation for a major e-commerce platform.',
    imageUrl: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800&h=600',
    tags: [
      { label: 'Audit', color: 'mint' },
      { label: 'Inclusive Design', color: 'lavender' },
      { label: 'Reporting', color: 'blue' },
    ],
    routerLink: 'case-study/release-notes-process'
  },
  {
    title: 'Design System Adoption',
    description: 'Internal research on how developers and designers use our component library.',
    imageUrl: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=800&h=600',
    tags: [
      { label: 'Interviews', color: 'yellow' },
      { label: 'Surveys', color: 'peach' },
      { label: 'Synthesis', color: 'pink' },
    ],
    routerLink: 'case-study/ai-tools'
  },
  {
    title: 'Voice UI Discovery',
    description: 'Generative research for a new smart home assistant interface.',
    imageUrl: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&q=80&w=800&h=600',
    tags: [
      { label: 'Generative', color: 'blue' },
      { label: 'Workshops', color: 'lavender' },
      { label: 'Prototyping', color: 'mint' },
    ],
    routerLink: 'case-study/help-center'
  },
];