import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecLogoComponent } from './sec-logo.component';

describe('SecLogoComponent', () => {
  let component: SecLogoComponent;
  let fixture: ComponentFixture<SecLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecLogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
