import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrouselAdsComponent } from './corrousel-ads.component';

describe('CorrouselAdsComponent', () => {
  let component: CorrouselAdsComponent;
  let fixture: ComponentFixture<CorrouselAdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CorrouselAdsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorrouselAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
