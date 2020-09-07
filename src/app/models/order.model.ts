import { PartialModel } from './base/partial.model';
import { SubOrder } from './suborder.model';

export class Order extends PartialModel<Order> {
  id?: string;
  date?: Date;
  sendingMethod?: string;
  deliveryCost?: number;
  totalCost?: number;
  billingType?: string;
  state?: string;
  subOrders?: SubOrder[];
}
