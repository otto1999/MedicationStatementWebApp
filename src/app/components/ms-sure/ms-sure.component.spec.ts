import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsSureComponent } from './ms-sure.component';

describe('MsSureComponent', () => {
  let component: MsSureComponent;
  let fixture: ComponentFixture<MsSureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsSureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MsSureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
