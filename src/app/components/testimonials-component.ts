import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Testimonial } from '../models/testimonial-model';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [],
  templateUrl: './testimonials-component.html',
  styleUrl: './testimonials-component.scss',
})
export class TestimonialsComponent implements OnInit, OnDestroy {
  @Input() testimonials: Testimonial[] = [];

  currentIndex = 0;

  private autoPlayInterval?: ReturnType<typeof setInterval>;

  ngOnInit(): void {
    this.autoPlayInterval = setInterval(() => this.next(), 5000);
  }

  ngOnDestroy(): void {
    if (this.autoPlayInterval) clearInterval(this.autoPlayInterval);
  }

  next(): void {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
    this.resetAutoPlay();
  }

  prev(): void {
    this.currentIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
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
