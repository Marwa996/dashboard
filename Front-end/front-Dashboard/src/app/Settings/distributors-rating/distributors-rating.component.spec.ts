import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributorsRatingComponent } from './distributors-rating.component';

describe('DistributorsRatingComponent', () => {
  let component: DistributorsRatingComponent;
  let fixture: ComponentFixture<DistributorsRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistributorsRatingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistributorsRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
