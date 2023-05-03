import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcoursierComponent } from './newcoursier.component';

describe('NewcoursierComponent', () => {
  let component: NewcoursierComponent;
  let fixture: ComponentFixture<NewcoursierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewcoursierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewcoursierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
