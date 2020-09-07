import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTabMyAccountComponent } from './user-tab-my-account.component';

describe('UserTabMyAccountComponent', () => {
  let component: UserTabMyAccountComponent;
  let fixture: ComponentFixture<UserTabMyAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTabMyAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTabMyAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
