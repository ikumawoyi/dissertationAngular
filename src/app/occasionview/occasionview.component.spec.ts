import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OccasionviewComponent } from './occasionview.component';

describe('OccasionviewComponent', () => {
  let component: OccasionviewComponent;
  let fixture: ComponentFixture<OccasionviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OccasionviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OccasionviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
