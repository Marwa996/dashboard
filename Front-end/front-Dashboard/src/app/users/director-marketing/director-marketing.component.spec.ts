import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorMarketingComponent } from './director-marketing.component';

describe('DirectorMarketingComponent', () => {
  let component: DirectorMarketingComponent;
  let fixture: ComponentFixture<DirectorMarketingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectorMarketingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectorMarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
