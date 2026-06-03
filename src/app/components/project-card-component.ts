import { Component, inject, Input } from '@angular/core';
import { Project, TagColor } from '../models/project-model';
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
  @Input() index: number = 0;

  private router = inject(Router);

  getTagClass(color: TagColor): string {
    return `card__tag card__tag--${color}`;
  }

  onNavButtonClick(page: string) {
    this.router.navigate([page]);
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
}