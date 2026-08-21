import { Component, inject, Input } from '@angular/core';
import { Project } from '../models/project-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [],
  templateUrl: './project-card-component.html',
  styleUrl: './project-card-component.scss',
})
export class ProjectCardComponent {
  @Input() project!: Project;
  @Input() index = 0;

  private router = inject(Router);

  get visibleTags() {
    return this.project.tags.slice(0, 3);
  }

  getTagClass(color: string): string {
    return `card__tag card__tag--${color}`;
  }

  onNavButtonClick(page: string) {
    this.router.navigate([page]);
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
}