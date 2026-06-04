import { Component } from '@angular/core';
import { Project, PROJECTS } from '../models/project-model';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [],
  templateUrl: './resume.html',
  styleUrl: './resume.scss',
})
export class ResumePage {
  readonly projects: Project[] = PROJECTS;
}