import { SkillColor, SkillModel } from './skill-model';

export enum TwTagCategory {
  Tool = 'Tool',
  DocumentType = 'Document Type',
  Audience = 'Audience',
  Skill = 'Skill',
}

const CATEGORY_COLOR: Record<TwTagCategory, SkillColor> = {
  [TwTagCategory.Tool]: SkillColor.Green,
  [TwTagCategory.DocumentType]: SkillColor.Secondary,
  [TwTagCategory.Audience]: SkillColor.Gold,
  [TwTagCategory.Skill]: SkillColor.Primary,
};

export interface TwSampleTag {
  label: string;
  category: TwTagCategory;
}

export interface TwSample {
  slug: string;
  title: string;
  subtitle: string;
  company: string;
  role: string;
  tags: TwSampleTag[];
  cardBlurb: string;
  cardChipLabels: string[];
  routerLink: string;
}

export function twTagsToSkills(tags: TwSampleTag[]): SkillModel[] {
  return tags.map(tag => ({ skill: tag.label, color: CATEGORY_COLOR[tag.category] }));
}

export const TW_SAMPLES: TwSample[] = [
  {
    slug: 'importing-migration-files',
    title: 'Importing Migration Files',
    subtitle: 'This single-sourced mixed audience topic uses conditional text to hide internal facing procedures and notes (in orange) from external users. These processes also contain pre-requisites and error handling.',
    company: 'Origami Risk',
    role: 'Senior Technical Writer',
    tags: [
      { label: 'MadCap Flare', category: TwTagCategory.Tool },
      { label: 'Online Help Center', category: TwTagCategory.DocumentType },
      { label: 'Mixed audience', category: TwTagCategory.Audience },
      { label: 'Conditional Content', category: TwTagCategory.Skill },
      { label: 'Branching Workflows', category: TwTagCategory.Skill },
      { label: 'Error Handling', category: TwTagCategory.Skill },
    ],
    cardBlurb: 'A topic that uses conditional content to hide internal-only steps, with prerequisites and error handling built in.',
    cardChipLabels: ['Conditional Content', 'Online Help Center', 'Mixed audience'],
    routerLink: 'TW_portfolio/importing-migration-files',
  },
  {
    slug: 'managing-billing-dates',
    title: 'Managing Billing Dates',
    subtitle: 'This external-facing topic helps users find the specific configurations for a feature whose options live in two different places in the system. And depending on how the system is configured, a third location applies instead.',
    company: 'Origami Risk',
    role: 'Senior Technical Writer',
    tags: [
      { label: 'MadCap Flare', category: TwTagCategory.Tool },
      { label: 'Online Help Center', category: TwTagCategory.DocumentType },
      { label: 'External-facing', category: TwTagCategory.Audience },
      { label: 'System Navigation', category: TwTagCategory.Skill },
      { label: 'Field Reference', category: TwTagCategory.Skill },
      { label: 'Override Logic', category: TwTagCategory.Skill },
    ],
    cardBlurb: 'A topic that helps users find where to configure a billing date setting, since the right location depends on how the system is set up.',
    cardChipLabels: ['Override Logic', 'Online Help Center', 'System Navigation'],
    routerLink: 'TW_portfolio/managing-billing-dates',
  },
  {
    slug: 'performing-document-review',
    title: 'Performing a Document Review',
    subtitle: "An external users' guide to completing a task inside the system using secure access. Includes one internal-facing note.",
    company: 'Origami Risk',
    role: 'Senior Technical Writer',
    tags: [
      { label: 'MadCap Flare', category: TwTagCategory.Tool },
      { label: 'Online Help Center', category: TwTagCategory.DocumentType },
      { label: 'Mixed audience', category: TwTagCategory.Audience },
      { label: 'First-Time User Guide', category: TwTagCategory.Skill },
      { label: 'Secure Access Workflow', category: TwTagCategory.Skill },
    ],
    cardBlurb: 'A guide for one-time external users using secure access.',
    cardChipLabels: ['First-Time User Guide', 'Online Help Center', 'Mixed audience'],
    routerLink: 'TW_portfolio/performing-document-review',
  },
  {
    slug: 'release-note-sample',
    title: 'Release Notes',
    subtitle: 'A set of eight release notes across two modules that include: a field change, a bug fix, a new capability, a beta graduation, a feature deprecation, conditional UI, and a field reference.',
    company: 'Origami Risk',
    role: 'Senior Technical Writer',
    tags: [
      { label: 'MadCap Flare', category: TwTagCategory.Tool },
      { label: 'Techsmith Snagit', category: TwTagCategory.Tool },
      { label: 'Release Notes', category: TwTagCategory.DocumentType },
      { label: 'External-facing', category: TwTagCategory.Audience },
      { label: 'Format Versatility', category: TwTagCategory.Skill },
      { label: 'Deprecation Notice', category: TwTagCategory.Skill },
      { label: 'Conditional UI Doc', category: TwTagCategory.Skill },
      { label: 'Beta to GA', category: TwTagCategory.Skill },
    ],
    cardBlurb: 'Eight release notes showing seven different formats, from a bug fix to deprecation.',
    cardChipLabels: ['Deprecation Notice', 'Release Notes', 'Conditional UI Doc'],
    routerLink: 'TW_portfolio/release-note-sample',
  },
  {
    slug: 'timesheet-approval-process',
    title: 'Timesheet Approval Process',
    subtitle: 'A multi-system workflow for timesheet approval, with built-in verification.',
    company: 'ProviDyn',
    role: 'Senior Technical Writer',
    tags: [
      { label: 'Microsoft Word', category: TwTagCategory.Tool },
      { label: 'Internal Process', category: TwTagCategory.DocumentType },
      { label: 'Internal-facing', category: TwTagCategory.Audience },
      { label: 'Multi-System Workflow', category: TwTagCategory.Skill },
      { label: 'Embedded Verification', category: TwTagCategory.Skill },
    ],
    cardBlurb: 'A multi-system workflow for timesheet approval, with built-in verification.',
    cardChipLabels: ['Embedded Verification', 'Internal Process', 'Multi-System Workflow'],
    routerLink: 'TW_portfolio/timesheet-approval-process',
  },
  {
    slug: 'file-import-dashboard',
    title: 'File Import Dashboard',
    subtitle: "An internal user's guide to a dashboard and four-stage data import process.",
    company: 'ProviDyn',
    role: 'Senior Technical Writer',
    tags: [
      { label: 'Microsoft Word', category: TwTagCategory.Tool },
      { label: 'Internal Process', category: TwTagCategory.DocumentType },
      { label: 'Internal-facing', category: TwTagCategory.Audience },
      { label: 'Process State Tracking', category: TwTagCategory.Skill },
      { label: 'UI Element Reference', category: TwTagCategory.Skill },
    ],
    cardBlurb: 'A topic that describes a four-stage data import process and the dashboard that tracks it.',
    cardChipLabels: ['Process State Tracking', 'Internal Process', 'UI Element Reference'],
    routerLink: 'TW_portfolio/file-import-dashboard',
  },
  {
    slug: 'acceptable-use-policy',
    title: 'Acceptable Use Policy',
    subtitle: 'Excerpt from a policy document that clients could adopt at their own company with minimal updates. Fields were used in the document (shown in grey) for clients to easily update variables like company name and address.',
    company: 'ProviDyn',
    role: 'Senior Technical Writer',
    tags: [
      { label: 'Microsoft Word', category: TwTagCategory.Tool },
      { label: 'GRC Client Deliverable', category: TwTagCategory.DocumentType },
      { label: 'External-facing', category: TwTagCategory.Audience },
      { label: 'Policy Writing', category: TwTagCategory.Skill },
      { label: 'Compliance Writing', category: TwTagCategory.Skill },
    ],
    cardBlurb: 'A policy document that clients adopt directly, with variable fields for easy customization.',
    cardChipLabels: ['Policy Writing', 'GRC Client Deliverable', 'Compliance Writing'],
    routerLink: 'TW_portfolio/acceptable-use-policy',
  },
  {
    slug: 'business-impact-analysis',
    title: 'Creating a Business Impact Analysis',
    subtitle: 'Excerpt from a step-by-step guide clients could adopt at their own company, explaining a complicated GRC process to assess their risk from a disruption to core services.',
    company: 'ProviDyn',
    role: 'Senior Technical Writer',
    tags: [
      { label: 'Microsoft Word', category: TwTagCategory.Tool },
      { label: 'GRC Client Deliverable', category: TwTagCategory.DocumentType },
      { label: 'External-facing', category: TwTagCategory.Audience },
      { label: 'Stakeholder Coordination', category: TwTagCategory.Skill },
      { label: 'Role-Based Guidance', category: TwTagCategory.Skill },
    ],
    cardBlurb: 'A GRC step-by-step guide for assessing risk from a disruption.',
    cardChipLabels: ['Stakeholder Coordination', 'GRC Client Deliverable', 'Role-Based Guidance'],
    routerLink: 'TW_portfolio/business-impact-analysis',
  },
  {
    slug: 'risk-assessment',
    title: 'Creating a Risk Assessment',
    subtitle: 'Excerpt from a step-by-step guide clients could adopt at their own company, explaining a complicated GRC process to protect their company against potential harm.',
    company: 'ProviDyn',
    role: 'Senior Technical Writer',
    tags: [
      { label: 'Microsoft Word', category: TwTagCategory.Tool },
      { label: 'GRC Client Deliverable', category: TwTagCategory.DocumentType },
      { label: 'External-facing', category: TwTagCategory.Audience },
      { label: 'Decision Framework', category: TwTagCategory.Skill },
      { label: 'Structured Reference Table', category: TwTagCategory.Skill },
    ],
    cardBlurb: 'A GRC step-by-step guide on protecting their company against potential harm.',
    cardChipLabels: ['Decision Framework', 'GRC Client Deliverable', 'Structured Reference Table'],
    routerLink: 'TW_portfolio/risk-assessment',
  },
];
