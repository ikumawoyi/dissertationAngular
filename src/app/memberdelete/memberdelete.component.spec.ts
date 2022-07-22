import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberdeleteComponent } from './memberdelete.component';

describe('MemberdeleteComponent', () => {
  let component: MemberdeleteComponent;
  let fixture: ComponentFixture<MemberdeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberdeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberdeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
