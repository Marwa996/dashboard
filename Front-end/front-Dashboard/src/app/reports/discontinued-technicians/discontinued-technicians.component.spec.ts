import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscontinuedTechniciansComponent } from './discontinued-technicians.component';

describe('DiscontinuedTechniciansComponent', () => {
  let component: DiscontinuedTechniciansComponent;
  let fixture: ComponentFixture<DiscontinuedTechniciansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscontinuedTechniciansComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscontinuedTechniciansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
