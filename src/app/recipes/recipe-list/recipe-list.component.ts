import { Component } from "@angular/core";
import { RecipeItemComponent } from "../recipe-item/recipe-item.component";
import { Recipe } from "../model/recipe.model";
import { MatButtonModule } from "@angular/material/button";
@Component({
  selector: "app-recipe-list",
  standalone: true,
  imports: [RecipeItemComponent, MatButtonModule],
  templateUrl: "./recipe-list.component.html",
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    {
      name: "A Test Recipe",
      description: "This is a simply test",
      imagePath:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4iRgpUe5m7xPQpU_VDsrlYzDrg6b8R0JUfTcAL3OQaw&s",
    },
  ];
}
