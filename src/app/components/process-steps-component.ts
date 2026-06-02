import { Component, Input } from '@angular/core';
import { ItemModel } from '../models/item-model';

@Component({
  selector: 'app-process-steps-component',
  imports: [],
  templateUrl: './process-steps-component.html',
  styleUrl: './process-steps-component.scss',
})
export class ProcessStepsComponent {
  @Input() steps: ItemModel[] = [];
}
