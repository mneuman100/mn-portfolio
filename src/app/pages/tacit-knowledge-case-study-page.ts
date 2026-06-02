import { Component } from '@angular/core';
import { CaseStudyHeroComponent } from "../components/case-study-hero-component";
import { ContextStripComponent } from "../components/context-strip-component";
import { ProcessStepsComponent } from "../components/process-steps-component";
import { MetricsRowComponent } from "../components/metrics-row-component";
import { ItemModel } from '../models/item-model';

@Component({
  selector: 'app-tacit-knowledge-case-study-page',
  imports: [CaseStudyHeroComponent, ContextStripComponent, ProcessStepsComponent],
  templateUrl: './tacit-knowledge-case-study-page.html',
  styleUrl: './tacit-knowledge-case-study-page.scss',
})
export class TacitKnowledgeCaseStudyPage {
  contextItems: ItemModel[] = [
    { label: 'Company', description: 'ProviDyn' },
    { label: 'Systems Spanned', description: '11' },
    { label: 'Method', description: 'Contextual Inquiry & Shadowing' },
    { label: 'Deliverable', description: 'Workflow Map & Onboarding Reference' },
  ];

  processSteps: ItemModel[] = [
    {
      label: 'Shadowing',
      description:
        'Observed the monthly workflow live using contextual inquiry, asking follow-up questions in the moment as decisions were made',
    },
    {
      label: 'Documentation',
      description:
        'Captured not just official steps but the workarounds, exceptions, and judgment calls that only surface through direct observation',
    },
    {
      label: 'Workflow Map',
      description:
        'Synthesized observations into a structured map covering the complete process across all 11 systems',
    },
    {
      label: 'Onboarding Reference',
      description:
        'Delivered a self-sufficient reference the next person could use to learn the process independently',
    },
  ];
}
