import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftReportsComponent } from './gift-reports.component';

describe('GiftReportsComponent', () => {
  let component: GiftReportsComponent;
  let fixture: ComponentFixture<GiftReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiftReportsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GiftReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
