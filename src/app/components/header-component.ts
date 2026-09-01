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

  private get isTwPortfolio(): boolean {
    return this.router.url.startsWith('/TW_portfolio');
  }

  get homePath(): string {
    return this.isTwPortfolio ? 'TW_portfolio' : '';
  }

  get aboutPath(): string {
    return this.isTwPortfolio ? 'TW_portfolio/about' : 'about';
  }

  onWorkClick(): void {
    const path = this.homePath;
    const workSectionId = this.isTwPortfolio ? 'writing-samples' : 'work';

    if (this.router.url === '/' + path) {
      document.getElementById(workSectionId)!.scrollIntoView({ behavior: 'smooth' });
    } else {
      this.router.navigate([path], { queryParams: { work: 'true' } });
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