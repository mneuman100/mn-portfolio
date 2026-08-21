import { Component } from '@angular/core';
import { CaseStudyHeroComponent } from '../components/case-study-hero-component';
import { CaseStudyNavComponent } from '../components/case-study-nav-component';
import { TW_SAMPLES, twTagsToSkills } from '../models/tw-sample-model';

@Component({
  selector: 'app-acceptable-use-policy-tw-sample-page',
  imports: [CaseStudyHeroComponent, CaseStudyNavComponent],
  templateUrl: './acceptable-use-policy-tw-sample-page.html',
  styleUrl: './acceptable-use-policy-tw-sample-page.scss',
})
export class AcceptableUsePolicyTwSamplePage {
  private sample = TW_SAMPLES.find(s => s.slug === 'acceptable-use-policy')!;
  title = this.sample.title;
  subtitle = this.sample.subtitle;
  company = this.sample.company;
  role = this.sample.role;
  skills = twTagsToSkills(this.sample.tags);
}
