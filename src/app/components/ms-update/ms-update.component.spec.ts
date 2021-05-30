import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsUpdateComponent } from './ms-update.component';

describe('MsUpdateComponent', () => {
  let component: MsUpdateComponent;
  let fixture: ComponentFixture<MsUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
