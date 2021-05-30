import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsAddComponent } from './ms-add.component';

describe('MsAddComponent', () => {
  let component: MsAddComponent;
  let fixture: ComponentFixture<MsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
