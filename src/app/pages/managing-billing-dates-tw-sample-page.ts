import { Component } from '@angular/core';
import { CaseStudyHeroComponent } from '../components/case-study-hero-component';
import { CaseStudyNavComponent } from '../components/case-study-nav-component';
import { CalloutComponent } from '../components/callout-component';
import { TW_SAMPLES, twTagsToSkills } from '../models/tw-sample-model';

@Component({
  selector: 'app-managing-billing-dates-tw-sample-page',
  imports: [CaseStudyHeroComponent, CaseStudyNavComponent, CalloutComponent],
  templateUrl: './managing-billing-dates-tw-sample-page.html',
  styleUrl: './managing-billing-dates-tw-sample-page.scss',
})
export class ManagingBillingDatesTwSamplePage {
  private sample = TW_SAMPLES.find(s => s.slug === 'managing-billing-dates')!;
  title = this.sample.title;
  subtitle = this.sample.subtitle;
  company = this.sample.company;
  role = this.sample.role;
  skills = twTagsToSkills(this.sample.tags);
}
