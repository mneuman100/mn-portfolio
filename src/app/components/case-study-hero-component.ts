import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-case-study-hero-component',
  imports: [],
  templateUrl: './case-study-hero-component.html',
  styleUrl: './case-study-hero-component.scss',
})
export class CaseStudyHeroComponent {
  @Input() title: string = '';
  @Input() subtitle: string | null = null;
  @Input() company: string = '';
  @Input() year: string = '';
  @Input() role: string = '';
  @Input() tags: string[] = [];
  @Input() summary: string = '';
}
