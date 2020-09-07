import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { OrdersQuery } from 'src/app/stores/order.store';
import { GamarraService } from 'src/app/services/gamarra.service';

@Component({
  selector: 'app-provider-orders',
  templateUrl: './provider-orders.component.html',
  styleUrls: ['./provider-orders.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProviderOrdersComponent implements OnInit {
  isHistoric = false;

  constructor(
    public ordersQuery: OrdersQuery,
    private gamarraService: GamarraService
  ) {
    this.gamarraService.loadOrders();
  }

  ngOnInit(): void {}

  changeToHistoric(value: boolean) {
    console.log('cambio');
    if (this.isHistoric === value) {
      return;
    }
    this.isHistoric = value;
  }
}
