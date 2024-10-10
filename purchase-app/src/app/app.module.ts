import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import {FormsModule} from "@angular/forms";
import { ShoppingFormComponent } from './shopping-form/shopping-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    ShoppingFormComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
