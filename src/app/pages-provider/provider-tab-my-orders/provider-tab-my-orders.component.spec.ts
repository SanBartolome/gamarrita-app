import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderTabMyOrdersComponent } from './provider-tab-my-orders.component';

describe('ProviderTabMyOrdersComponent', () => {
  let component: ProviderTabMyOrdersComponent;
  let fixture: ComponentFixture<ProviderTabMyOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProviderTabMyOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderTabMyOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
