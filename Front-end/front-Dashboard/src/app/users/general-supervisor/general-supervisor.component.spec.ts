import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralSupervisorComponent } from './general-supervisor.component';

describe('GeneralSupervisorComponent', () => {
  let component: GeneralSupervisorComponent;
  let fixture: ComponentFixture<GeneralSupervisorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralSupervisorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralSupervisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
