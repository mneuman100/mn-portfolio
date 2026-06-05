import { Component } from '@angular/core';
import { CaseStudyHeroComponent } from "../components/case-study-hero-component";
import { SkillColor, SkillModel } from '../models/skill-model';
import { CaseStudyNavComponent } from "../components/case-study-nav-component";

@Component({
  selector: 'app-release-notes-process-case-study-page',
  imports: [CaseStudyHeroComponent, CaseStudyNavComponent],
  templateUrl: './release-notes-process-case-study-page.html',
  styleUrl: './release-notes-process-case-study-page.scss',
})
export class ReleaseNotesProcessCaseStudyPage {
  skills: SkillModel[] = [
    { skill: 'Workflow Analysis',              color: SkillColor.Green   },
    { skill: 'Stakeholder Interviews',         color: SkillColor.Gold  },
    { skill: 'Qualitative Research',           color: SkillColor.Primary   },
    { skill: 'Problem Framing',                color: SkillColor.Primary },
    { skill: 'How Might We Facilitation',      color: SkillColor.Green  },
    { skill: 'Retrospective Facilitation',     color: SkillColor.Green  },
    { skill: 'Data Analysis',                  color: SkillColor.Primary   },
    { skill: 'Insight Synthesis',              color: SkillColor.Primary  },
    { skill: 'Cross-functional Collaboration', color: SkillColor.Gold  },
  ];
}
