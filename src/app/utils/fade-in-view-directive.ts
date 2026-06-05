import { isPlatformBrowser } from '@angular/common';
import { Directive, ElementRef, inject, OnInit, PLATFORM_ID } from '@angular/core';

@Directive({
  selector: '[appFadeInView]',
  standalone: true,
})
export class FadeInViewDirective implements OnInit {
  private el = inject(ElementRef);
  private platformId = inject(PLATFORM_ID);

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    
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