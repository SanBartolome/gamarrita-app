import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTabShoppingComponent } from './user-tab-shopping.component';

describe('UserTabShoppingComponent', () => {
  let component: UserTabShoppingComponent;
  let fixture: ComponentFixture<UserTabShoppingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTabShoppingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTabShoppingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
