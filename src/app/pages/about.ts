import { Component, OnInit, inject, ViewChild, ElementRef, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FadeInViewDirective } from '../utils/fade-in-view-directive';
import { TestimonialsComponent } from '../components/testimonials-component';
import { TESTIMONIALS, TW_TESTIMONIALS } from '../models/testimonial-model';
import { ActivatedRoute, Router } from '@angular/router';

interface SkillGroup {
  title: string;
  skills: string[];
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [FadeInViewDirective, TestimonialsComponent],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class AboutPage implements OnInit {
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private platformId = inject(PLATFORM_ID);

  @ViewChild('recs') recs!: ElementRef<HTMLElement>;

  readonly testimonials = this.route.snapshot.data['testimonialVariant'] === 'tw' ? TW_TESTIMONIALS : TESTIMONIALS;

  readonly skillGroups: SkillGroup[] = [
    {
      title: 'Methods',
      skills: ['User Research', 'Prototyping', 'Usability Testing', 'Wireframing', 'Design Systems'],
    },
    {
      title: 'Synthesis & Storytelling',
      skills: ['Contextual Inquiry', 'Journey Mapping', 'Personas', 'Data Visualization'],
    },
    {
      title: 'Collaboration',
      skills: ['Cross-functional', 'Agile', 'Leadership', 'Mentorship', 'Workshops'],
    },
  ];

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const urlTree = this.router.parseUrl(this.router.url);
    if (urlTree.queryParams['testimonials'] === 'true') {
      setTimeout(() => {
        this.recs.nativeElement.scrollIntoView({ behavior: 'smooth' });
      }, 0);
    }
  }
}