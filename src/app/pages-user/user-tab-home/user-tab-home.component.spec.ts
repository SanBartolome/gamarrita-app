import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTabHomeComponent } from './user-tab-home.component';

describe('UserTabHomeComponent', () => {
  let component: UserTabHomeComponent;
  let fixture: ComponentFixture<UserTabHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTabHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTabHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
