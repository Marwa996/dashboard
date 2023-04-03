import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscontinuedMerchantsComponent } from './discontinued-merchants.component';

describe('DiscontinuedMerchantsComponent', () => {
  let component: DiscontinuedMerchantsComponent;
  let fixture: ComponentFixture<DiscontinuedMerchantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscontinuedMerchantsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscontinuedMerchantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
