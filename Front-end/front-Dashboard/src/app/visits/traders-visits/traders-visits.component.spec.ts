import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradersVisitsComponent } from './traders-visits.component';

describe('TradersVisitsComponent', () => {
  let component: TradersVisitsComponent;
  let fixture: ComponentFixture<TradersVisitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradersVisitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TradersVisitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
