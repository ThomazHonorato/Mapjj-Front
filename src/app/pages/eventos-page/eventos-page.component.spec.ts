import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosPageComponent } from './eventos-page.component';

describe('EventosPageComponent', () => {
  let component: EventosPageComponent;
  let fixture: ComponentFixture<EventosPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventosPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
