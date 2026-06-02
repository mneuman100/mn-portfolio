import { Component, Input } from '@angular/core';
import { ItemModel } from '../models/item-model';

@Component({
  selector: 'app-metrics-row-component',
  imports: [],
  templateUrl: './metrics-row-component.html',
  styleUrl: './metrics-row-component.scss',
})
export class MetricsRowComponent {
  @Input() metrics: ItemModel[] = [];
}
