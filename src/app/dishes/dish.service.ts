import {Dish} from './dish.model';

export class DishService {

  dishes: Dish[] = [
    new Dish(1, 'Pizza supreme', 10.99, 'https://www.maxpixel.net/static/photo/1x/Daisy-Pizza-Newyork-Style-2530174.jpg', 'Smakowita pizza Supreme', 2),
    new Dish(2, 'Risotto', 12.99, 'https://upload.wikimedia.org/wikipedia/commons/0/01/Risotto-dish.jpg', 'Niesamowite risotto', 1),
    new Dish(3, 'Spaghetti', 6.99, 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Lutong_Bahay_-_Bolognese_Spaghetti.jpg', 'Najlepsze spaghetti', 5),
    new Dish(4, 'Lasagne', 11.99, 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Lasagna_%281%29.jpg', 'Przepyszna lasagne', 3)
  ]

  constructor() {
  }

  getDishes() {
    return this.dishes;
  }

  getDish(id: number) {
    return this.dishes[id];
  }

}
