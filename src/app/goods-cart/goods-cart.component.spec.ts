import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodsCartComponent } from './goods-cart.component';

describe('GoodsCartComponent', () => {
  let component: GoodsCartComponent;
  let fixture: ComponentFixture<GoodsCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodsCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodsCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
