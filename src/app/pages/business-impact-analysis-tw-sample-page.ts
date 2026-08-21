import { Component } from '@angular/core';
import { CaseStudyHeroComponent } from '../components/case-study-hero-component';
import { CaseStudyNavComponent } from '../components/case-study-nav-component';
import { TW_SAMPLES, twTagsToSkills } from '../models/tw-sample-model';

@Component({
  selector: 'app-business-impact-analysis-tw-sample-page',
  imports: [CaseStudyHeroComponent, CaseStudyNavComponent],
  templateUrl: './business-impact-analysis-tw-sample-page.html',
  styleUrl: './business-impact-analysis-tw-sample-page.scss',
})
export class BusinessImpactAnalysisTwSamplePage {
  private sample = TW_SAMPLES.find(s => s.slug === 'business-impact-analysis')!;
  title = this.sample.title;
  subtitle = this.sample.subtitle;
  company = this.sample.company;
  role = this.sample.role;
  skills = twTagsToSkills(this.sample.tags);
}
