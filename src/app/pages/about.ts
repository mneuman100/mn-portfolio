import { Component, OnInit, OnDestroy, inject, ViewChild, ElementRef } from '@angular/core';
import { FadeInViewDirective } from '../utils/fade-in-view-directive';
import { Router } from '@angular/router';

interface Recommendation {
  id: number;
  quote: string;
  name: string;
  role: string;
  avatar: string;
  tags: string[];
}

interface SkillGroup {
  title: string;
  skills: string[];
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [FadeInViewDirective],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class AboutPage implements OnInit, OnDestroy {
  private autoPlayInterval?: ReturnType<typeof setInterval>;
  private router = inject(Router);

  @ViewChild('recs') recs!: ElementRef<HTMLElement>;

  currentIndex = 0;
  isAnimating = false;

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

  readonly recommendations: Recommendation[] = [
    {
      id: 1,
      quote: 'I’ve worked with a lot of people who can identify a problem. Fewer can take it from observation to data to stakeholder alignment to something that actually gets built and used. Meghan did all of that without formal authority over any of the people involved. If you’re looking for a UX researcher who can find the real problem under the surface problem and see it through; Meghan is the real deal.',
      name: 'John Schulz',
      role: 'Senior Market Strategy Lead at Origami Risk',
      avatar: 'JonShulz.jpg',
      tags: [],
    },
    {
      id: 2,
      quote: 'She is exceptionally detail-oriented. Beyond her core responsibilities, she is highly collaborative and always brings thoughtful suggestions that improve both the product and our processes. Any team would greatly benefit from her expertise, initiative, and commitment to excellence!',
      name: 'Lexi Wagner',
      role: 'Senior Product Manager at Origami Risk',
      avatar: 'LexiWagner.jpg',
      tags: [],
    },
    {
      id: 3,
      quote: 'Meghan has a sharp eye for detail, deeply considers the customer experience, and actively advocates for what users need.  She is also an exceptional collaborator, partnering seamlessly with product managers and engineers to ensure alignment and quality across the board. Meghan is a valued team member and someone I highly recommend.',
      name: 'Jamie Roddy',
      role: 'Product Documentation Manager at Origami Risk',
      avatar: 'JamieRoddy.png',
      tags: [],
    },
  ];

  ngOnInit(): void {
    this.autoPlayInterval = setInterval(() => this.next(), 5000);
    const urlTree = this.router.parseUrl(this.router.url);
    if (urlTree.queryParams['testimonials'] === 'true') {
      setTimeout(() => {
        this.recs.nativeElement.scrollIntoView({ behavior: 'smooth' });
      }, 0);
    }
  }

  ngOnDestroy(): void {
    if (this.autoPlayInterval) clearInterval(this.autoPlayInterval);
  }

  next(): void {
    this.currentIndex = (this.currentIndex + 1) % this.recommendations.length;
    this.resetAutoPlay();
  }

  prev(): void {
    this.currentIndex = (this.currentIndex - 1 + this.recommendations.length) % this.recommendations.length;
    this.resetAutoPlay();
  }

  goTo(index: number): void {
    this.currentIndex = index;
    this.resetAutoPlay();
  }

  private resetAutoPlay(): void {
    if (this.autoPlayInterval) clearInterval(this.autoPlayInterval);
    this.autoPlayInterval = setInterval(() => this.next(), 5000);
  }

  getTagClass(tag: string): string {
    const hash = tag.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const variants = ['yellow', 'red', 'blue', 'green', 'indigo', 'purple', 'pink', 'gray'];
    return `tag tag--${variants[hash % variants.length]}`;
  }
}