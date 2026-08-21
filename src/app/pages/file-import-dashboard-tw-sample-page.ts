import { Component } from '@angular/core';
import { CaseStudyHeroComponent } from '../components/case-study-hero-component';
import { CaseStudyNavComponent } from '../components/case-study-nav-component';
import { TW_SAMPLES, twTagsToSkills } from '../models/tw-sample-model';

@Component({
  selector: 'app-file-import-dashboard-tw-sample-page',
  imports: [CaseStudyHeroComponent, CaseStudyNavComponent],
  templateUrl: './file-import-dashboard-tw-sample-page.html',
  styleUrl: './file-import-dashboard-tw-sample-page.scss',
})
export class FileImportDashboardTwSamplePage {
  private sample = TW_SAMPLES.find(s => s.slug === 'file-import-dashboard')!;
  title = this.sample.title;
  subtitle = this.sample.subtitle;
  company = this.sample.company;
  role = this.sample.role;
  skills = twTagsToSkills(this.sample.tags);
}
