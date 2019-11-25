import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseMastersComponent } from './course-masters.component';

describe('CourseMastersComponent', () => {
  let component: CourseMastersComponent;
  let fixture: ComponentFixture<CourseMastersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseMastersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseMastersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
