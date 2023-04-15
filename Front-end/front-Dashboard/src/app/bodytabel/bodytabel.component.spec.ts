import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodytabelComponent } from './bodytabel.component';

describe('BodytabelComponent', () => {
  let component: BodytabelComponent;
  let fixture: ComponentFixture<BodytabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodytabelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodytabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
