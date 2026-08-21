import { Component } from '@angular/core';
import { CaseStudyHeroComponent } from '../components/case-study-hero-component';
import { CaseStudyNavComponent } from '../components/case-study-nav-component';
import { TW_SAMPLES, twTagsToSkills } from '../models/tw-sample-model';

@Component({
  selector: 'app-timesheet-approval-process-tw-sample-page',
  imports: [CaseStudyHeroComponent, CaseStudyNavComponent],
  templateUrl: './timesheet-approval-process-tw-sample-page.html',
  styleUrl: './timesheet-approval-process-tw-sample-page.scss',
})
export class TimesheetApprovalProcessTwSamplePage {
  private sample = TW_SAMPLES.find(s => s.slug === 'timesheet-approval-process')!;
  title = this.sample.title;
  subtitle = this.sample.subtitle;
  company = this.sample.company;
  role = this.sample.role;
  skills = twTagsToSkills(this.sample.tags);
}
