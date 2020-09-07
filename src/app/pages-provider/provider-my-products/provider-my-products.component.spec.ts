import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderMyProductsComponent } from './provider-my-products.component';

describe('ProviderMyProductsComponent', () => {
  let component: ProviderMyProductsComponent;
  let fixture: ComponentFixture<ProviderMyProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProviderMyProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderMyProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
