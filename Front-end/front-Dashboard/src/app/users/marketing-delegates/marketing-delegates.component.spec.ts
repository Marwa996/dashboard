import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingDelegatesComponent } from './marketing-delegates.component';

describe('MarketingDelegatesComponent', () => {
  let component: MarketingDelegatesComponent;
  let fixture: ComponentFixture<MarketingDelegatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketingDelegatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarketingDelegatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
