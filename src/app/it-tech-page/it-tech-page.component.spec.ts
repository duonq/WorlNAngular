import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItTechPageComponent } from './it-tech-page.component';

describe('ItTechPageComponent', () => {
  let component: ItTechPageComponent;
  let fixture: ComponentFixture<ItTechPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItTechPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItTechPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
