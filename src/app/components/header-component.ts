import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header-component.html',
  styleUrl: './header-component.scss',
})
export class HeaderComponent {
  private router = inject(Router);

  onWorkClick(): void {
    if (this.router.url === '/') {
      document.getElementById('work')!.scrollIntoView({ behavior: 'smooth' });
    } else {
      this.router.navigate([''], { queryParams: { work: 'true' } });
    }
  }

  onTestimonialsClick(): void {
    if (this.router.url === '/about') {
      document.getElementById('testimonials')!.scrollIntoView({ behavior: 'smooth' });
    } else {
      this.router.navigate(['/about'], { queryParams: { work: 'true' } });
    }
  }

   onNavButtonClick(page: string, queryParams?: Record<string, string>) {
    this.router.navigate([page], queryParams ? { queryParams } : {});

    if (!queryParams) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}