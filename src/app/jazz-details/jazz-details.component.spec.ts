import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JazzDetailsComponent } from './jazz-details.component';

describe('JazzDetailsComponent', () => {
  let component: JazzDetailsComponent;
  let fixture: ComponentFixture<JazzDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JazzDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JazzDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
