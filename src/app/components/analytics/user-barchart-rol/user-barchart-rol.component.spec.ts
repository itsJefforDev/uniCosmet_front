import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBarchartRolComponent } from './user-barchart-rol.component';

describe('UserBarchartRolComponent', () => {
  let component: UserBarchartRolComponent;
  let fixture: ComponentFixture<UserBarchartRolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserBarchartRolComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserBarchartRolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
