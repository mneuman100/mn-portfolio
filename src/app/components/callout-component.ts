import { Component, Input } from '@angular/core';

export type CalloutType = 'tip' | 'internal';

@Component({
  selector: 'app-callout-component',
  imports: [],
  templateUrl: './callout-component.html',
  styleUrl: './callout-component.scss',
})
export class CalloutComponent {
  @Input() type: CalloutType = 'tip';
}
