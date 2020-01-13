import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DestInputComponent } from './dest-input.component';

describe('DestInputComponent', () => {
  let component: DestInputComponent;
  let fixture: ComponentFixture<DestInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
