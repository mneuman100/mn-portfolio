import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header-component.html',
  styleUrl: './header-component.scss',
})
export class HeaderComponent {
  private router = inject(Router);

  get aboutPath(): string {
    return this.router.url.startsWith('/TW_portfolio') ? 'TW_portfolio/about' : 'about';
  }

  onWorkClick(): void {
    if (this.router.url === '/') {
      document.getElementById('work')!.scrollIntoView({ behavior: 'smooth' });
    } else {
      this.router.navigate([''], { queryParams: { work: 'true' } });
    }
  }

  onAboutClick(): void {
    this.onNavButtonClick(this.aboutPath);
  }

  onTestimonialsClick(): void {
    const path = this.aboutPath;
    if (this.router.url === '/' + path) {
      document.getElementById('testimonials')!.scrollIntoView({ behavior: 'smooth' });
    } else {
      this.router.navigate([path], { queryParams: { testimonials: 'true' } });
    }
  }

   onNavButtonClick(page: string, queryParams?: Record<string, string>) {
    this.router.navigate([page], queryParams ? { queryParams } : {});

    if (!queryParams) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}