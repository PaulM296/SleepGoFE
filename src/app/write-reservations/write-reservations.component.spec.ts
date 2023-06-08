import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteReservationsComponent } from './write-reservations.component';

describe('WriteReservationsComponent', () => {
  let component: WriteReservationsComponent;
  let fixture: ComponentFixture<WriteReservationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WriteReservationsComponent]
    });
    fixture = TestBed.createComponent(WriteReservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
