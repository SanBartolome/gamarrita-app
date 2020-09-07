import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderCreateProductComponent } from './provider-create-product.component';

describe('ProviderCreateProductComponent', () => {
  let component: ProviderCreateProductComponent;
  let fixture: ComponentFixture<ProviderCreateProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProviderCreateProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderCreateProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
