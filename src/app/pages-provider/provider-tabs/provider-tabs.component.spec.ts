import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderTabsComponent } from './provider-tabs.component';

describe('ProviderTabsComponent', () => {
  let component: ProviderTabsComponent;
  let fixture: ComponentFixture<ProviderTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProviderTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
