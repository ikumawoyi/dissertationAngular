import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OccasiondeleteComponent } from './occasiondelete.component';

describe('OccasiondeleteComponent', () => {
  let component: OccasiondeleteComponent;
  let fixture: ComponentFixture<OccasiondeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OccasiondeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OccasiondeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
