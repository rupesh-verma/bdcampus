import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherCourseComponent } from './other-course.component';

describe('OtherCourseComponent', () => {
  let component: OtherCourseComponent;
  let fixture: ComponentFixture<OtherCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
