import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullProductCardComponent } from './full-product-card.component';

describe('FullProductCardComponent', () => {
  let component: FullProductCardComponent;
  let fixture: ComponentFixture<FullProductCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullProductCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
