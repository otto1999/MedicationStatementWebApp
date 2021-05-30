import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsChoiceComponent } from './ms-choice.component';

describe('MsChoiceComponent', () => {
  let component: MsChoiceComponent;
  let fixture: ComponentFixture<MsChoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsChoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MsChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
