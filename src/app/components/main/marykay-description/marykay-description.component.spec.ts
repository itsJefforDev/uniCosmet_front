import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarykayDescriptionComponent } from './marykay-description.component';

describe('MarykayDescriptionComponent', () => {
  let component: MarykayDescriptionComponent;
  let fixture: ComponentFixture<MarykayDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MarykayDescriptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarykayDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
