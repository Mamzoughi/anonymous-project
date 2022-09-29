import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportApiComponent } from './sport-api.component';

describe('SportApiComponent', () => {
  let component: SportApiComponent;
  let fixture: ComponentFixture<SportApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
