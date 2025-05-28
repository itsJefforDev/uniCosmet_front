import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardCountComponent } from './product-card-count.component';

describe('ProductCardCountComponent', () => {
  let component: ProductCardCountComponent;
  let fixture: ComponentFixture<ProductCardCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductCardCountComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductCardCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
