import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsForCategoryComponent } from './products-for-category.component';

describe('ProductsForCategoryComponent', () => {
  let component: ProductsForCategoryComponent;
  let fixture: ComponentFixture<ProductsForCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsForCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsForCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
