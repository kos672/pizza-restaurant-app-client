import {Ingredient} from "../ingredients/ingredient.model";

export interface Dish {
  id: number;
  name: string;
  price: number;
  imagePath: string;
  description: string;
  purchases;
  ingredients: Ingredient[];
  categoryId: number;
}
