import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsListItemComponent } from './ms-list-item.component';

describe('MsListItemComponent', () => {
  let component: MsListItemComponent;
  let fixture: ComponentFixture<MsListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MsListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
