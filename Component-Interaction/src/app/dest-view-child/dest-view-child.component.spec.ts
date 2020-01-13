import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DestViewChildComponent } from './dest-view-child.component';

describe('DestViewChildComponent', () => {
  let component: DestViewChildComponent;
  let fixture: ComponentFixture<DestViewChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestViewChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestViewChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
