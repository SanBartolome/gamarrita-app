import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTabSearchComponent } from './user-tab-search.component';

describe('UserTabSearchComponent', () => {
  let component: UserTabSearchComponent;
  let fixture: ComponentFixture<UserTabSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTabSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTabSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
