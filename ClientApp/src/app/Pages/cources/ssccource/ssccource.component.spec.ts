import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SSCCourceComponent } from './ssccource.component';

describe('SSCCourceComponent', () => {
  let component: SSCCourceComponent;
  let fixture: ComponentFixture<SSCCourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SSCCourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SSCCourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
