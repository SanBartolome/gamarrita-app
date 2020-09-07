import { Injectable } from '@angular/core';
import {
  EntityState,
  EntityStore,
  QueryEntity,
  StoreConfig,
  filterNil,
} from '@datorama/akita';
import { Product } from '../models/product.model';
import { map } from 'rxjs/operators';

export interface ProductsState extends EntityState<Product> {}

@StoreConfig({
  name: 'products',
})
@Injectable({
  providedIn: 'root',
})
export class ProductsStore extends EntityStore<ProductsState> {
  constructor() {
    super();
  }
}

@Injectable({
  providedIn: 'root',
})
export class ProductsQuery extends QueryEntity<ProductsState> {
  products$ = this.selectAll();

  productsMaleKids$ = this.products$.pipe(
    filterNil,
    map((products) =>
      products.filter((product) =>
        product.categories.find(
          (category) => category.id === '5f453d6203f92527c889dc69'
        )
      )
    )
  );
  productsFemaleKids$ = this.products$.pipe(
    filterNil,
    map((products) =>
      products.filter((product) =>
        product.categories.find(
          (category) => category.id === '5f453d6803f92527c889dc6a'
        )
      )
    )
  );
  productsBabies$ = this.products$.pipe(
    filterNil,
    map((products) =>
      products.filter((product) =>
        product.categories.find(
          (category) => category.id === '5f453d8303f92527c889dc6b'
        )
      )
    )
  );
  productsMale$ = this.products$.pipe(
    filterNil,
    map((products) =>
      products.filter((product) =>
        product.categories.find(
          (category) => category.id === '5f453d8703f92527c889dc6c'
        )
      )
    )
  );
  productsFemale$ = this.products$.pipe(
    filterNil,
    map((products) =>
      products.filter((product) =>
        product.categories.find(
          (category) => category.id === '5f453d8a03f92527c889dc6d'
        )
      )
    )
  );

  loading$ = this.selectLoading();

  constructor(store: ProductsStore) {
    super(store);
  }
}
