import { Component } from '@angular/core';
import {Item} from "./models/Item";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: Item[] = [
    { purchase: 'Item1', done: false, price: 15.9 },
    { purchase: 'Item2', done: false, price: 60 },
    { purchase: 'Item3', done: true, price: 22.6 },
    { purchase: 'Item4', done: false, price: 310 },
  ];

  onItemAdded(item: Item) {
    this.items.push(item);
  }

  title = 'purchase-app';
}
