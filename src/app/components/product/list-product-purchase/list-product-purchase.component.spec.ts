import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProductPurchaseComponent } from './list-product-purchase.component';

describe('ListProductPurchaseComponent', () => {
  let component: ListProductPurchaseComponent;
  let fixture: ComponentFixture<ListProductPurchaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListProductPurchaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListProductPurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
