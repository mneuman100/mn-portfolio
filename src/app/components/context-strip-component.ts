import { Component, Input } from '@angular/core';
import { ItemModel } from '../models/item-model';

@Component({
  selector: 'app-context-strip-component',
  imports: [],
  templateUrl: './context-strip-component.html',
  styleUrl: './context-strip-component.scss',
})
export class ContextStripComponent {
  @Input() items: ItemModel[] = [];
}
