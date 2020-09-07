import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { OrdersQuery } from 'src/app/stores/order.store';
import { GamarraService } from 'src/app/services/gamarra.service';

@Component({
  selector: 'app-user-orders',
  templateUrl: './user-orders.component.html',
  styleUrls: ['./user-orders.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserOrdersComponent implements OnInit {
  isHistoric = false;

  constructor(
    public ordersQuery: OrdersQuery,
    private gamarraService: GamarraService
  ) {
    this.gamarraService.loadOrders();
  }

  ngOnInit(): void {}

  changeToHistoric(value: boolean) {
    if (this.isHistoric === value) {
      return;
    }
    this.isHistoric = value;
  }
}
