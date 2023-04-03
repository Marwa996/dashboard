import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersContestsComponent } from './offers-contests.component';

describe('OffersContestsComponent', () => {
  let component: OffersContestsComponent;
  let fixture: ComponentFixture<OffersContestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffersContestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffersContestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
