import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ProductsQuery } from 'src/app/stores/product.store';
import { CategoriesQuery } from 'src/app/stores/category.store';
import { GamarraService } from 'src/app/services/gamarra.service';

@Component({
  selector: 'app-provider-my-products',
  templateUrl: './provider-my-products.component.html',
  styleUrls: ['./provider-my-products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProviderMyProductsComponent implements OnInit {
  constructor(
    public productsQuery: ProductsQuery,
    public categoriesQuery: CategoriesQuery,
    private gamarraService: GamarraService
  ) {
    this.gamarraService.loadProducts();
    this.gamarraService.loadCategories();
  }

  ngOnInit(): void {}
}
