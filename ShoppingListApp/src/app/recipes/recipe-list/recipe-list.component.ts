import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Recipe1', 'vaat mach and dal', 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2Fimage%2F2016%2F09%2Fmain%2F1610p34-white-bean-vegetable-bowls-frizzled-eggs-1.jpg%3Fitok%3Dp_bNHGNB&q=85'),
    new Recipe('Recipe2', 'Polao', 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2Fimage%2F2016%2F09%2Fmain%2F1610p34-white-bean-vegetable-bowls-frizzled-eggs-1.jpg%3Fitok%3Dp_bNHGNB&q=85')
  ];

  constructor() {

  }

  ngOnInit() {
  }

}
