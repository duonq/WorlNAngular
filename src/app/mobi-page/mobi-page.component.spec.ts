import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobiPageComponent } from './mobi-page.component';

describe('MobiPageComponent', () => {
  let component: MobiPageComponent;
  let fixture: ComponentFixture<MobiPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobiPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobiPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
