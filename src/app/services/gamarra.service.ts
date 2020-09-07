import { Injectable } from '@angular/core';
import { GamarraApi } from '../api/gamarra.api';
import { CategoriesStore } from '../stores/category.store';
import { ProductsStore } from '../stores/product.store';
import { OrdersStore } from '../stores/order.store';
import { withTransaction } from '@datorama/akita';

@Injectable({
  providedIn: 'root',
})
export class GamarraService {
  constructor(
    private gamarraApi: GamarraApi,
    private categoriesStore: CategoriesStore,
    private productsStore: ProductsStore,
    private ordersStore: OrdersStore
  ) {}

  loadCategories() {
    this.categoriesStore.setLoading(true);
    this.gamarraApi
      .getCategories()
      .pipe(
        withTransaction((results) => {
          this.categoriesStore.upsertMany(results);
          this.categoriesStore.setLoading(false);
        })
      )
      .subscribe();
  }

  loadProducts() {
    this.productsStore.setLoading(true);
    this.gamarraApi
      .getProducts()
      .pipe(
        withTransaction((results) => {
          this.productsStore.upsertMany(results);
          this.productsStore.setLoading(false);
        })
      )
      .subscribe();
  }

  loadOrders() {
    this.ordersStore.setLoading(true);
    this.gamarraApi
      .getOrders()
      .pipe(
        withTransaction((results) => {
          this.ordersStore.upsertMany(results);
          this.ordersStore.setLoading(false);
        })
      )
      .subscribe();
  }
}
