import { Component } from '@angular/core';
import { CaseStudyHeroComponent } from '../components/case-study-hero-component';
import { CaseStudyNavComponent } from '../components/case-study-nav-component';
import { CalloutComponent } from '../components/callout-component';
import { TW_SAMPLES, twTagsToSkills } from '../models/tw-sample-model';

@Component({
  selector: 'app-release-note-sample-tw-sample-page',
  imports: [CaseStudyHeroComponent, CaseStudyNavComponent, CalloutComponent],
  templateUrl: './release-note-sample-tw-sample-page.html',
  styleUrl: './release-note-sample-tw-sample-page.scss',
})
export class ReleaseNoteSampleTwSamplePage {
  private sample = TW_SAMPLES.find(s => s.slug === 'release-note-sample')!;
  title = this.sample.title;
  subtitle = this.sample.subtitle;
  company = this.sample.company;
  role = this.sample.role;
  skills = twTagsToSkills(this.sample.tags);
}
