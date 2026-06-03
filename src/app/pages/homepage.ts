import { Component } from '@angular/core';
import { ProjectCardComponent } from '../components/project-card-component';
import { FadeInViewDirective } from '../utils/fade-in-view-directive';
import { Project, PROJECTS } from '../models/project-model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProjectCardComponent, FadeInViewDirective],
  templateUrl: './homepage.html',
  styleUrl: './homepage.scss',
})
export class Homepage {
  readonly projects: Project[] = PROJECTS;
}