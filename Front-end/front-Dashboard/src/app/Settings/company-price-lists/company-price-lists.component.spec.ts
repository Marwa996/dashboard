import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyPriceListsComponent } from './company-price-lists.component';

describe('CompanyPriceListsComponent', () => {
  let component: CompanyPriceListsComponent;
  let fixture: ComponentFixture<CompanyPriceListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyPriceListsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyPriceListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
