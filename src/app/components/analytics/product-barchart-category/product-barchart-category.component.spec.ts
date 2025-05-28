import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductBarchartCategoryComponent } from './product-barchart-category.component';

describe('ProductBarchartCategoryComponent', () => {
  let component: ProductBarchartCategoryComponent;
  let fixture: ComponentFixture<ProductBarchartCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductBarchartCategoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductBarchartCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
