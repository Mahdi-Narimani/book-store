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
export class RecipeListComponent
{
  recipes: Recipe[] = [
    {
      name: "A Test Recipe1",
      description: "This is a simply test",
      imagePath:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ8ps0E5UMDoHTUTcEk4D_jTUPvt2Wa3igLO9DycUSRw&s",
    },
    {
      name: "A Test Recipe2",
      description: "This is a simply test",
      imagePath:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ8ps0E5UMDoHTUTcEk4D_jTUPvt2Wa3igLO9DycUSRw&s",
    },
    {
      name: "A Test Recipe3",
      description: "This is a simply test",
      imagePath:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ8ps0E5UMDoHTUTcEk4D_jTUPvt2Wa3igLO9DycUSRw&s",
    },
  ];
}
