import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OccasionlistComponent } from './occasionlist.component';

describe('OccasionlistComponent', () => {
  let component: OccasionlistComponent;
  let fixture: ComponentFixture<OccasionlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OccasionlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OccasionlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
