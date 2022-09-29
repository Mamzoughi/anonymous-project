import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PalyersTableComponent } from './palyers-table.component';

describe('PalyersTableComponent', () => {
  let component: PalyersTableComponent;
  let fixture: ComponentFixture<PalyersTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PalyersTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PalyersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
