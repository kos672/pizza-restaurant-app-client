import {Dish} from './dish.model';

export class DishService {

  dishes: Dish[] = [
    {id: 1, name: 'Pizza supreme', price: 10.99, imagePath: 'https://www.maxpixel.net/static/photo/1x/Daisy-Pizza-Newyork-Style-2530174.jpg', description: 'Smakowita pizza Supreme', categoryId: 2},
    {id: 2, name: 'Risotto', price: 12.99, imagePath: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Crab_risotto_%2812877137694%29.jpg', description: 'Niesamowite risotto', categoryId: 1},
    {id: 3, name: 'Risotto grzybowe', price: 13.99, imagePath: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Risotto-dish.jpg', description: 'Niesamowite risotto tylko z grzybami', categoryId: 1},
    {id: 4, name: 'Pizza Margherita', price: 8.99, imagePath: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Pizza_Margherita%2C_at_Restaurant_Gusto_%282013.07.13%29_2.jpg', description: 'Klasyczna pizza', categoryId: 2},
    {id: 5, name: 'Spaghetti', price: 6.99, imagePath: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Spaghetti_al_Pomodoro.JPG', description: 'Klasyczne spaghetti', categoryId: 5},
    {id: 6, name: 'Spaghetti bolognese', price: 6.99, imagePath: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Lutong_Bahay_-_Bolognese_Spaghetti.jpg', description: 'Najlepsze spaghetti', categoryId: 5},
    {id: 7, name: 'Lasagne', price: 11.99, imagePath: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Lasagna_%281%29.jpg', description: 'Przepyszna lasagne', categoryId: 3}
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
