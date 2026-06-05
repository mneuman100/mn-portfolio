import { Component } from '@angular/core';
import { CaseStudyHeroComponent } from "../components/case-study-hero-component";
import { SkillColor, SkillModel } from '../models/skill-model';
import { CaseStudyNavComponent } from "../components/case-study-nav-component";

@Component({
  selector: 'app-client-survey-case-study-page',
  imports: [CaseStudyHeroComponent, CaseStudyNavComponent],
  templateUrl: './client-survey-case-study-page.html',
  styleUrl: './client-survey-case-study-page.scss',
})
export class ClientSurveyCaseStudyPage {
  skills: SkillModel[] = [
    { skill: 'Survey Design',                  color: SkillColor.Green   },
    { skill: 'Qualitative Research',           color: SkillColor.Primary   },
    { skill: 'Stakeholder Interviews',         color: SkillColor.Gold  },
    { skill: 'Discovery Research',             color: SkillColor.Green   },
    { skill: 'Mixed-Methods Research',         color: SkillColor.Green   },
    { skill: 'Insight Synthesis',              color: SkillColor.Primary  },
    { skill: 'Research Reporting',             color: SkillColor.Gold },
    { skill: 'Cross-functional Collaboration', color: SkillColor.Gold  },
  ];
}
