import { PartialModel } from './base/partial.model';
import { Product } from './product.model';

export class SubOrder extends PartialModel<SubOrder> {
  id?: string;
  quantity?: number;
  product?: Product;
  accepted?: boolean;
}
