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
    { skill: 'Usability Evaluation',           color: SkillColor.Blue   },
    { skill: 'Qualitative Research',           color: SkillColor.Blue   },
    { skill: 'Structured Testing',             color: SkillColor.Blue   },
    { skill: 'Stakeholder Interviews',         color: SkillColor.Green  },
    { skill: 'Risk Assessment',                color: SkillColor.Purple },
    { skill: 'Data Analysis',                  color: SkillColor.Blue   },
    { skill: 'Insight Synthesis',              color: SkillColor.Green  },
    { skill: 'Research Reporting',             color: SkillColor.Purple },
    { skill: 'Cross-functional Collaboration', color: SkillColor.Green  },
  ];
}
