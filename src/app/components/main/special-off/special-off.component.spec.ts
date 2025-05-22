import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialOffComponent } from './special-off.component';

describe('SpecialOffComponent', () => {
  let component: SpecialOffComponent;
  let fixture: ComponentFixture<SpecialOffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpecialOffComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialOffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
