import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsToolbarComponent } from './ms-toolbar.component';

describe('MsToolbarComponent', () => {
  let component: MsToolbarComponent;
  let fixture: ComponentFixture<MsToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MsToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
