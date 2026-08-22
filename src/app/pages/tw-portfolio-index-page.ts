import { Component } from '@angular/core';
import { ProjectCardComponent } from '../components/project-card-component';
import { TestimonialsComponent } from '../components/testimonials-component';
import { FadeInViewDirective } from '../utils/fade-in-view-directive';
import { Project } from '../models/project-model';
import { TW_SAMPLES, twSampleDocumentType, twSampleToProject } from '../models/tw-sample-model';
import { TW_TESTIMONIALS } from '../models/testimonial-model';

interface TwPortfolioCard {
  project: Project;
  documentType: string;
}

const DOCUMENT_TYPE_FILTERS = ['Online Help Center', 'Release Notes', 'Internal Process', 'GRC Client Deliverable'];

@Component({
  selector: 'app-tw-portfolio-index-page',
  imports: [ProjectCardComponent, TestimonialsComponent, FadeInViewDirective],
  templateUrl: './tw-portfolio-index-page.html',
  styleUrl: './tw-portfolio-index-page.scss',
})
export class TwPortfolioIndexPage {
  readonly documentTypeFilters = DOCUMENT_TYPE_FILTERS;
  readonly cards: TwPortfolioCard[] = TW_SAMPLES.map(sample => ({
    project: twSampleToProject(sample),
    documentType: twSampleDocumentType(sample),
  }));

  readonly testimonials = TW_TESTIMONIALS;

  activeFilter: string | null = null;

  get visibleCards(): TwPortfolioCard[] {
    return this.activeFilter
      ? this.cards.filter(card => card.documentType === this.activeFilter)
      : this.cards;
  }

  setFilter(filter: string | null): void {
    this.activeFilter = filter;
  }
}
