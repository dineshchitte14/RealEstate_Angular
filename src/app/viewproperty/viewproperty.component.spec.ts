import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpropertyComponent } from './viewproperty.component';

describe('ViewpropertyComponent', () => {
  let component: ViewpropertyComponent;
  let fixture: ComponentFixture<ViewpropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewpropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewpropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
