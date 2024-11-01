import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SouNovoComponent } from './sou-novo.component';

describe('SouNovoComponent', () => {
  let component: SouNovoComponent;
  let fixture: ComponentFixture<SouNovoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SouNovoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SouNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
