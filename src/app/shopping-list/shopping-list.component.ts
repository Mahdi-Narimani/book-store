import { Component } from "@angular/core";
import { ShoppingListEditComponent } from "./shopping-list-edit/shopping-list-edit.component";

@Component({
  selector: "app-shopping-list",
  standalone: true,
  imports: [ShoppingListEditComponent],
  templateUrl: "./shopping-list.component.html",
})
export class ShoppingListComponent {}
