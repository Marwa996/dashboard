import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTechniciansComponent } from './new-technicians.component';

describe('NewTechniciansComponent', () => {
  let component: NewTechniciansComponent;
  let fixture: ComponentFixture<NewTechniciansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewTechniciansComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewTechniciansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
