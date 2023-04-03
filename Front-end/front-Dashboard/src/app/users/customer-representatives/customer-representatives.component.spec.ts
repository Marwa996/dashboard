import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerRepresentativesComponent } from './customer-representatives.component';

describe('CustomerRepresentativesComponent', () => {
  let component: CustomerRepresentativesComponent;
  let fixture: ComponentFixture<CustomerRepresentativesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerRepresentativesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerRepresentativesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
