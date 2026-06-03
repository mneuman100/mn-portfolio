import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-case-study-nav-component',
  imports: [],
  templateUrl: './case-study-nav-component.html',
  styleUrl: './case-study-nav-component.scss',
})
export class CaseStudyNavComponent {
  @Input() next: string = '';
  @Input() prev: string = '';

  private router = inject(Router);

  onNavButtonClick(page: string) {
    this.router.navigate([page]);
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
}
