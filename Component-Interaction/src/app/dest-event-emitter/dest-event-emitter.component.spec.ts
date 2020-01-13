import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DestEventEmitterComponent } from './dest-event-emitter.component';

describe('DestEventEmitterComponent', () => {
  let component: DestEventEmitterComponent;
  let fixture: ComponentFixture<DestEventEmitterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestEventEmitterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestEventEmitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
