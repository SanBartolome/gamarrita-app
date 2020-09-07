import { Injectable } from '@angular/core';
import {
  EntityState,
  EntityStore,
  QueryEntity,
  StoreConfig,
} from '@datorama/akita';
import { Order } from '../models/order.model';
import { map } from 'rxjs/operators';

export interface OrdersState extends EntityState<Order> {}

@StoreConfig({
  name: 'orders',
})
@Injectable({
  providedIn: 'root',
})
export class OrdersStore extends EntityStore<OrdersState> {
  constructor() {
    super();
  }
}

@Injectable({
  providedIn: 'root',
})
export class OrdersQuery extends QueryEntity<OrdersState> {
  pendingStates = [
    'PENDIENTE',
    'ACEPTADO',
    'PENDIENTE_DE_PAGO',
    'PAGADO',
    'EN_ENVIO',
    'POR_RECOJER',
  ];
  historicStates = ['CANCELADO', 'RECHAZADO', 'FINALIZADO'];

  orders$ = this.selectAll();
  pendings$ = this.orders$.pipe(
    map((orders) => orders.filter((o) => this.pendingStates.includes(o.state)))
  );
  historic$ = this.orders$.pipe(
    map((orders) => orders.filter((o) => this.historicStates.includes(o.state)))
  );

  loading$ = this.selectLoading();

  constructor(store: OrdersStore) {
    super(store);
  }
}
