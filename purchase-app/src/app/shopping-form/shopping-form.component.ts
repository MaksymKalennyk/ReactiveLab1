import {Component, EventEmitter, Output} from '@angular/core';
import {Item} from "../models/Item";

@Component({
  selector: 'app-shopping-form',
  templateUrl: './shopping-form.component.html',
  styleUrls: ['./shopping-form.component.css']
})
export class ShoppingFormComponent {
  text: string = '';
  price: number = 0;
  @Output() addItem = new EventEmitter<Item>();

  addNewItem() {
    if (this.text.trim() === '' || this.price <= 0) {
      return;
    }

    this.addItem.emit(new Item(this.text, this.price));
    this.text = '';
    this.price = 0;
  }
}
