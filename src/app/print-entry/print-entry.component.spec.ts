import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintEntryComponent } from './print-entry.component';

describe('PrintEntryComponent', () => {
  let component: PrintEntryComponent;
  let fixture: ComponentFixture<PrintEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
