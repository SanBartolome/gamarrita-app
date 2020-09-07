import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderTabHomeComponent } from './provider-tab-home.component';

describe('ProviderTabHomeComponent', () => {
  let component: ProviderTabHomeComponent;
  let fixture: ComponentFixture<ProviderTabHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProviderTabHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderTabHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
