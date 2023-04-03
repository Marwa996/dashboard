import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypesVisitsComponent } from './types-visits.component';

describe('TypesVisitsComponent', () => {
  let component: TypesVisitsComponent;
  let fixture: ComponentFixture<TypesVisitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypesVisitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypesVisitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
