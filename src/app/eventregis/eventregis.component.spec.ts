import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventregisComponent } from './eventregis.component';

describe('EventregisComponent', () => {
  let component: EventregisComponent;
  let fixture: ComponentFixture<EventregisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventregisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventregisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
