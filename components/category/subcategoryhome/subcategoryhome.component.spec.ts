import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcategoryhomeComponent } from './subcategoryhome.component';

describe('SubcategoryhomeComponent', () => {
  let component: SubcategoryhomeComponent;
  let fixture: ComponentFixture<SubcategoryhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubcategoryhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcategoryhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
