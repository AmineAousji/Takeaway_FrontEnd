import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliverymenComponent } from './deliverymen.component';

describe('DeliverymenComponent', () => {
  let component: DeliverymenComponent;
  let fixture: ComponentFixture<DeliverymenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliverymenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliverymenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
