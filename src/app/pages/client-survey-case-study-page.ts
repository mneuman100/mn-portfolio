import { Component } from '@angular/core';
import { QuoteBlockComponent } from "../components/quote-block-component";
import { CaseStudyHeroComponent } from "../components/case-study-hero-component";

@Component({
  selector: 'app-client-survey-case-study-page',
  imports: [QuoteBlockComponent, CaseStudyHeroComponent],
  templateUrl: './client-survey-case-study-page.html',
  styleUrl: './client-survey-case-study-page.scss',
})
export class ClientSurveyCaseStudyPage {

}
