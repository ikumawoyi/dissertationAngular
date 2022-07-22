import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OccasioneditComponent } from './occasionedit.component';

describe('OccasioneditComponent', () => {
  let component: OccasioneditComponent;
  let fixture: ComponentFixture<OccasioneditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OccasioneditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OccasioneditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
