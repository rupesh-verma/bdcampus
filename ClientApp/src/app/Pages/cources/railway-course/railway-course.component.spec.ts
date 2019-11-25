import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RailwayCourseComponent } from './railway-course.component';

describe('RailwayCourseComponent', () => {
  let component: RailwayCourseComponent;
  let fixture: ComponentFixture<RailwayCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RailwayCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RailwayCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
