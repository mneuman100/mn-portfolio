import { Component } from '@angular/core';
import { CaseStudyHeroComponent } from "../components/case-study-hero-component";
import { SkillColor, SkillModel } from '../models/skill-model';
import { CaseStudyNavComponent } from "../components/case-study-nav-component";
import { ProcessStepsComponent } from "../components/process-steps-component";
import { ItemModel } from '../models/item-model';

@Component({
  selector: 'app-help-center-case-study-page',
  imports: [CaseStudyHeroComponent, CaseStudyNavComponent, ProcessStepsComponent],
  templateUrl: './help-center-case-study-page.html',
  styleUrl: './help-center-case-study-page.scss',
})
export class HelpCenterCaseStudyPage {
  skills: SkillModel[] = [
    { skill: 'Content Audit',                   color: SkillColor.Blue   },
    { skill: 'Information Architecture',        color: SkillColor.Purple },
    { skill: 'Gap Analysis',                    color: SkillColor.Blue   },
    { skill: 'Stakeholder Interviews',          color: SkillColor.Green  },
    { skill: 'Qualitative Research',            color: SkillColor.Blue   },
    { skill: 'Discovery Research',              color: SkillColor.Blue   },
    { skill: 'Prioritization Frameworks',       color: SkillColor.Purple },
    { skill: 'Insight Synthesis',               color: SkillColor.Green  },
    { skill: 'Cross-functional Collaboration',  color: SkillColor.Green  },
  ];

  steps: ItemModel[] = [
    { label: 'Content Audit', description: '' },
    { label: 'Stakeholder Interviews', description: '' },
    { label: 'IA Redesign', description: '' },
    { label: 'Execution', description: '' }
  ];
}