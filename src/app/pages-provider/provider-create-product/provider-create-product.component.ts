import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-provider-create-product',
  templateUrl: './provider-create-product.component.html',
  styleUrls: ['./provider-create-product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProviderCreateProductComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
