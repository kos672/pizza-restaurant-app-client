import {Component, Input, OnInit} from '@angular/core';
import {Ingredient} from "./ingredient.model";

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {

  @Input() ingredient: Ingredient;

  constructor() {
  }

  ngOnInit() {
  }

}
