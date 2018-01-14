import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestcallComponent } from './restcall.component';

describe('RestcallComponent', () => {
  let component: RestcallComponent;
  let fixture: ComponentFixture<RestcallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestcallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestcallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
