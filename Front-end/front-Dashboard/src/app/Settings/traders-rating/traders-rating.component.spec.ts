import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradersRatingComponent } from './traders-rating.component';

describe('TradersRatingComponent', () => {
  let component: TradersRatingComponent;
  let fixture: ComponentFixture<TradersRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradersRatingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TradersRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
