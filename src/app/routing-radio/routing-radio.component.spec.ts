import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingRadioComponent } from './routing-radio.component';

describe('RoutingRadioComponent', () => {
  let component: RoutingRadioComponent;
  let fixture: ComponentFixture<RoutingRadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutingRadioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
