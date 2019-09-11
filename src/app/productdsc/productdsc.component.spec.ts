import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductdscComponent } from './productdsc.component';

describe('ProductdscComponent', () => {
  let component: ProductdscComponent;
  let fixture: ComponentFixture<ProductdscComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductdscComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductdscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
