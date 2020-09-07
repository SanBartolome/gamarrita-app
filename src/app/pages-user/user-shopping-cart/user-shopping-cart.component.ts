import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-user-shopping-cart',
  templateUrl: './user-shopping-cart.component.html',
  styleUrls: ['./user-shopping-cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserShoppingCartComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
