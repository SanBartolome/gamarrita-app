import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderTabMyAccountComponent } from './provider-tab-my-account.component';

describe('ProviderTabMyAccountComponent', () => {
  let component: ProviderTabMyAccountComponent;
  let fixture: ComponentFixture<ProviderTabMyAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProviderTabMyAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderTabMyAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
