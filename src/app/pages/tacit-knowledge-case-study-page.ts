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
    { skill: 'Contextual Inquiry',          color: SkillColor.Blue   },
    { skill: 'User Shadowing',              color: SkillColor.Blue   },
    { skill: 'Workflow Analysis',           color: SkillColor.Blue   },
    { skill: 'Qualitative Research',        color: SkillColor.Blue   },
    { skill: 'Observation and Note-taking', color: SkillColor.Blue   },
    { skill: 'Knowledge Elicitation',       color: SkillColor.Green  },
    { skill: 'Artifact Creation',           color: SkillColor.Purple },
    { skill: 'Insight Synthesis',           color: SkillColor.Green  },
  ];
}
