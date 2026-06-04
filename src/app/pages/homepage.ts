import { Component, OnInit, ViewChild, ElementRef, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
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
export class Homepage implements OnInit {
  readonly projects: Project[] = PROJECTS;

  @ViewChild('workSection') workSection!: ElementRef<HTMLElement>;

  private router = inject(Router);
  private location = inject(Location);

  ngOnInit(): void {
    const urlTree = this.router.parseUrl(this.router.url);
    if (urlTree.queryParams['work'] === 'true') {
      setTimeout(() => {
        this.workSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
      }, 0);
      this.location.replaceState('/');
    }
  }
}