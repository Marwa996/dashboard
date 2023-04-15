import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadertabelComponent } from './headertabel.component';

describe('HeadertabelComponent', () => {
  let component: HeadertabelComponent;
  let fixture: ComponentFixture<HeadertabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadertabelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadertabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
