import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-provider-tab-my-orders',
  templateUrl: './provider-tab-my-orders.component.html',
  styleUrls: ['./provider-tab-my-orders.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProviderTabMyOrdersComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
