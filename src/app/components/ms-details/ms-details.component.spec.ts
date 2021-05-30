import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsDetailsComponent } from './ms-details.component';

describe('MsDetailsComponent', () => {
  let component: MsDetailsComponent;
  let fixture: ComponentFixture<MsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
