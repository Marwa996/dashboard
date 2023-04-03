import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTradersComponent } from './new-traders.component';

describe('NewTradersComponent', () => {
  let component: NewTradersComponent;
  let fixture: ComponentFixture<NewTradersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewTradersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewTradersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
