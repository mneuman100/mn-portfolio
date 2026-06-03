import { Component } from '@angular/core';
import { QuoteBlockComponent } from "../components/quote-block-component";
import { CaseStudyHeroComponent } from "../components/case-study-hero-component";
import { SkillColor, SkillModel } from '../models/skill-model';

@Component({
  selector: 'app-client-survey-case-study-page',
  imports: [QuoteBlockComponent, CaseStudyHeroComponent],
  templateUrl: './client-survey-case-study-page.html',
  styleUrl: './client-survey-case-study-page.scss',
})
export class ClientSurveyCaseStudyPage {
  skills: SkillModel[] = [
    { skill: 'Survey Design',                  color: SkillColor.Blue   },
    { skill: 'Qualitative Research',           color: SkillColor.Blue   },
    { skill: 'Stakeholder Interviews',         color: SkillColor.Green  },
    { skill: 'Discovery Research',             color: SkillColor.Blue   },
    { skill: 'Mixed-Methods Research',         color: SkillColor.Blue   },
    { skill: 'Insight Synthesis',              color: SkillColor.Green  },
    { skill: 'Participant Recruitment',        color: SkillColor.Green  },
    { skill: 'Research Reporting',             color: SkillColor.Purple },
    { skill: 'Cross-functional Collaboration', color: SkillColor.Green  },
  ];
}
