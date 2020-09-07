import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderManageShopComponent } from './provider-manage-shop.component';

describe('ProviderManageShopComponent', () => {
  let component: ProviderManageShopComponent;
  let fixture: ComponentFixture<ProviderManageShopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProviderManageShopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderManageShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
