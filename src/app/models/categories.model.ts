import { PartialModel } from './base/partial.model';

export class Category extends PartialModel<Category> {
  id?: string;
  name?: string;
  iconUrl?: string;
}
