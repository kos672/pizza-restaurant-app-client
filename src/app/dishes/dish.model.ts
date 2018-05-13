export class Dish {
  id: number;
  name: string;
  price: number;
  imagePath: string;
  categoryId: number;

  constructor(id: number, name: string, price: number, imagePath: string, categoryId: number) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.imagePath = imagePath;
    this.categoryId = categoryId;
  }
}
