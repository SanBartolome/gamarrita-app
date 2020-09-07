import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSearchProductsComponent } from './user-search-products.component';

describe('UserSearchProductsComponent', () => {
  let component: UserSearchProductsComponent;
  let fixture: ComponentFixture<UserSearchProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSearchProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSearchProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
