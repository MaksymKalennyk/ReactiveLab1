import {Component, Input} from '@angular/core';
import {Item} from "../models/Item";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  @Input() items: Item[] = [];
}
