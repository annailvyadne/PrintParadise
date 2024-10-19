import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyHomeComponent } from './company-home.component';

describe('CompanyHomeComponent', () => {
  let component: CompanyHomeComponent;
  let fixture: ComponentFixture<CompanyHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompanyHomeComponent]
    });
    fixture = TestBed.createComponent(CompanyHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
