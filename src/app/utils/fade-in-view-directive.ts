import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appFadeInView]',
  standalone: true,
})
export class FadeInViewDirective implements OnInit {
  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.el.nativeElement.classList.add('is-visible');
          observer.unobserve(this.el.nativeElement);
        }
      },
      { rootMargin: '-50px' }
    );
    observer.observe(this.el.nativeElement);
  }
}