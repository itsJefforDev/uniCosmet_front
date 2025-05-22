import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceProductsComponent } from './face-products.component';

describe('FaceProductsComponent', () => {
  let component: FaceProductsComponent;
  let fixture: ComponentFixture<FaceProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FaceProductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaceProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
