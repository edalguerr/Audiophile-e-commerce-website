import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainProductsGridComponent } from './main-products-grid.component';

describe('MainProductsGridComponent', () => {
  let component: MainProductsGridComponent;
  let fixture: ComponentFixture<MainProductsGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainProductsGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainProductsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
