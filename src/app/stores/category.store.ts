import { Injectable } from '@angular/core';
import {
  EntityState,
  EntityStore,
  QueryEntity,
  StoreConfig,
} from '@datorama/akita';
import { Category } from '../models/categories.model';

export interface CategoriesState extends EntityState<Category> {}

@StoreConfig({
  name: 'categories',
})
@Injectable({
  providedIn: 'root',
})
export class CategoriesStore extends EntityStore<CategoriesState> {
  constructor() {
    super();
  }
}

@Injectable({
  providedIn: 'root',
})
export class CategoriesQuery extends QueryEntity<CategoriesState> {
  categories$ = this.selectAll();

  loading$ = this.selectLoading();

  constructor(store: CategoriesStore) {
    super(store);
  }
}
