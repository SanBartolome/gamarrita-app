import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CategoriesQuery } from 'src/app/stores/category.store';
import { ProductsQuery } from 'src/app/stores/product.store';
import { GamarraService } from 'src/app/services/gamarra.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserHomeComponent implements OnInit {
  constructor(
    public categoriesQuery: CategoriesQuery,
    public productsQuery: ProductsQuery,
    private gamarraService: GamarraService
  ) {
    this.gamarraService.loadCategories();
    this.gamarraService.loadProducts();
  }

  ngOnInit(): void {}
}
