import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryElementsComponent } from './category-elements.component';

describe('CategoryElementsComponent', () => {
  let component: CategoryElementsComponent;
  let fixture: ComponentFixture<CategoryElementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryElementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
