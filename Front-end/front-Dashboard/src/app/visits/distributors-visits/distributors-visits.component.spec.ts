import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributorsVisitsComponent } from './distributors-visits.component';

describe('DistributorsVisitsComponent', () => {
  let component: DistributorsVisitsComponent;
  let fixture: ComponentFixture<DistributorsVisitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistributorsVisitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistributorsVisitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
