import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceViewChildComponent } from './source-view-child.component';

describe('SourceViewChildComponent', () => {
  let component: SourceViewChildComponent;
  let fixture: ComponentFixture<SourceViewChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourceViewChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourceViewChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
