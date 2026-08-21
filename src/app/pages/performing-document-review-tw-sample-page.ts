import { Component } from '@angular/core';
import { CaseStudyHeroComponent } from '../components/case-study-hero-component';
import { CaseStudyNavComponent } from '../components/case-study-nav-component';
import { CalloutComponent } from '../components/callout-component';
import { TW_SAMPLES, twTagsToSkills } from '../models/tw-sample-model';

@Component({
  selector: 'app-performing-document-review-tw-sample-page',
  imports: [CaseStudyHeroComponent, CaseStudyNavComponent, CalloutComponent],
  templateUrl: './performing-document-review-tw-sample-page.html',
  styleUrl: './performing-document-review-tw-sample-page.scss',
})
export class PerformingDocumentReviewTwSamplePage {
  private sample = TW_SAMPLES.find(s => s.slug === 'performing-document-review')!;
  title = this.sample.title;
  subtitle = this.sample.subtitle;
  company = this.sample.company;
  role = this.sample.role;
  skills = twTagsToSkills(this.sample.tags);
}
