import { Component } from '@angular/core';
import { CaseStudyHeroComponent } from "../components/case-study-hero-component";
import { ItemModel } from '../models/item-model';
import { SkillColor, SkillModel } from '../models/skill-model';
import { CaseStudyNavComponent } from "../components/case-study-nav-component";

@Component({
  selector: 'app-tacit-knowledge-case-study-page',
  imports: [CaseStudyHeroComponent, CaseStudyNavComponent],
  templateUrl: './tacit-knowledge-case-study-page.html',
  styleUrl: './tacit-knowledge-case-study-page.scss',
})
export class TacitKnowledgeCaseStudyPage {
  skills: SkillModel[] = [
    { skill: 'Contextual Inquiry',          color: SkillColor.Green   },
    { skill: 'User Shadowing',              color: SkillColor.Green   },
    { skill: 'Workflow Analysis',           color: SkillColor.Green   },
    { skill: 'Qualitative Research',        color: SkillColor.Primary   },
    { skill: 'Observation and Note-taking', color: SkillColor.Green   },
    { skill: 'Knowledge Elicitation',       color: SkillColor.Green  },
    { skill: 'Insight Synthesis',           color: SkillColor.Primary  },
  ];
}
