import { Component } from '@angular/core';
import { CaseStudyHeroComponent } from "../components/case-study-hero-component";
import { SkillColor, SkillModel } from '../models/skill-model';
import { CaseStudyNavComponent } from "../components/case-study-nav-component";
import { ItemModel } from '../models/item-model';

@Component({
  selector: 'app-help-center-case-study-page',
  imports: [CaseStudyHeroComponent, CaseStudyNavComponent],
  templateUrl: './help-center-case-study-page.html',
  styleUrl: './help-center-case-study-page.scss',
})
export class HelpCenterCaseStudyPage {
  skills: SkillModel[] = [
    { skill: 'Content Audit',                   color: SkillColor.Secondary   },
    { skill: 'Information Architecture',        color: SkillColor.Secondary },
    { skill: 'Gap Analysis',                    color: SkillColor.Primary   },
    { skill: 'Stakeholder Interviews',          color: SkillColor.Gold  },
    { skill: 'Qualitative Research',            color: SkillColor.Primary   },
    { skill: 'Discovery Research',              color: SkillColor.Green   },
    { skill: 'Prioritization Frameworks',       color: SkillColor.Secondary },
    { skill: 'Insight Synthesis',               color: SkillColor.Primary  },
    { skill: 'Cross-functional Collaboration',  color: SkillColor.Gold  },
  ];

  steps: ItemModel[] = [
    { label: 'Content Audit', description: '' },
    { label: 'Stakeholder Interviews', description: '' },
    { label: 'IA Redesign', description: '' },
    { label: 'Execution', description: '' }
  ];
}