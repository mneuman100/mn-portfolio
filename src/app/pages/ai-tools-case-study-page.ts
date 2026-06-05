import { Component } from '@angular/core';
import { SkillColor, SkillModel } from '../models/skill-model';
import { CaseStudyHeroComponent } from '../components/case-study-hero-component';
import { CaseStudyNavComponent } from '../components/case-study-nav-component';

@Component({
  selector: 'app-ai-tools-case-study-page',
  imports: [CaseStudyHeroComponent, CaseStudyNavComponent],
  templateUrl: './ai-tools-case-study-page.html',
  styleUrl: './ai-tools-case-study-page.scss',
})
export class AiToolsCaseStudyPage {
  skills: SkillModel[] = [
    { skill: 'Usability Evaluation',           color: SkillColor.Green   },
    { skill: 'Qualitative Research',           color: SkillColor.Primary   },
    { skill: 'Structured Testing',             color: SkillColor.Green   },
    { skill: 'Stakeholder Interviews',         color: SkillColor.Secondary  },
    { skill: 'Risk Assessment',                color: SkillColor.Secondary },
    { skill: 'Data Analysis',                  color: SkillColor.Primary   },
    { skill: 'Insight Synthesis',              color: SkillColor.Primary  },
    { skill: 'Research Reporting',             color: SkillColor.Gold },
    { skill: 'Cross-functional Collaboration', color: SkillColor.Gold  },
  ];
}
