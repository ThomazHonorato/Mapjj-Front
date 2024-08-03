import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleriaPageComponent } from './galeria-page.component';

describe('GaleriaPageComponent', () => {
  let component: GaleriaPageComponent;
  let fixture: ComponentFixture<GaleriaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GaleriaPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GaleriaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
