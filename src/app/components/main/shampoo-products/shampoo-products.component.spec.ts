import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShampooProductsComponent } from './shampoo-products.component';

describe('ShampooProductsComponent', () => {
  let component: ShampooProductsComponent;
  let fixture: ComponentFixture<ShampooProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShampooProductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShampooProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
