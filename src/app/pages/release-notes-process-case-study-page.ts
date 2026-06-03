import { Component } from '@angular/core';
import { CaseStudyHeroComponent } from "../components/case-study-hero-component";
import { SkillColor, SkillModel } from '../models/skill-model';

@Component({
  selector: 'app-release-notes-process-case-study-page',
  imports: [CaseStudyHeroComponent],
  templateUrl: './release-notes-process-case-study-page.html',
  styleUrl: './release-notes-process-case-study-page.scss',
})
export class ReleaseNotesProcessCaseStudyPage {
  skills: SkillModel[] = [
    { skill: 'Workflow Analysis',              color: SkillColor.Blue   },
    { skill: 'Stakeholder Interviews',         color: SkillColor.Green  },
    { skill: 'Qualitative Research',           color: SkillColor.Blue   },
    { skill: 'Problem Framing',                color: SkillColor.Purple },
    { skill: 'How Might We Facilitation',      color: SkillColor.Green  },
    { skill: 'Retrospective Facilitation',     color: SkillColor.Green  },
    { skill: 'Data Analysis',                  color: SkillColor.Blue   },
    { skill: 'Insight Synthesis',              color: SkillColor.Green  },
    { skill: 'Dashboard and Artifact Creation',color: SkillColor.Purple },
    { skill: 'Cross-functional Collaboration', color: SkillColor.Green  },
  ];
}
