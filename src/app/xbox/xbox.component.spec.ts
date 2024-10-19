import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XboxComponent } from './xbox.component';

describe('XboxComponent', () => {
  let component: XboxComponent;
  let fixture: ComponentFixture<XboxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [XboxComponent]
    });
    fixture = TestBed.createComponent(XboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
