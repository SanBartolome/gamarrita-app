import { PartialModel } from './base/partial.model';
import { Category } from './categories.model';

export class Product extends PartialModel<Product> {
  id?: string;
  name?: string;
  imagesUrl?: string[];
  stock?: number;
  price?: number;
  categories?: Category[];
}
