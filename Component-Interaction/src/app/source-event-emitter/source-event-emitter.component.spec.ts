import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceEventEmitterComponent } from './source-event-emitter.component';

describe('SourceEventEmitterComponent', () => {
  let component: SourceEventEmitterComponent;
  let fixture: ComponentFixture<SourceEventEmitterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourceEventEmitterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourceEventEmitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
