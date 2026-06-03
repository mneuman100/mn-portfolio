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
  readonly navItems = ['Work', 'Resume', 'About', 'Contact'];

  private router = inject(Router);

  onNavButtonClick(page: string) {
    this.router.navigate([page]);
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
}