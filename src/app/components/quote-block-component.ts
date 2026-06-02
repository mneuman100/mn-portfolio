import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-quote-block-component',
  imports: [],
  templateUrl: './quote-block-component.html',
  styleUrl: './quote-block-component.scss',
})
export class QuoteBlockComponent {
  @Input() quote: string = '';
  @Input() attribution: string = '';
}
