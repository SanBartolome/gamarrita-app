import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderAccountMenuComponent } from './provider-account-menu.component';

describe('ProviderAccountMenuComponent', () => {
  let component: ProviderAccountMenuComponent;
  let fixture: ComponentFixture<ProviderAccountMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProviderAccountMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderAccountMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
