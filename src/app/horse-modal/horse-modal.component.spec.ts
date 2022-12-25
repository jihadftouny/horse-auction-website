import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorseModalComponent } from './horse-modal.component';

describe('HorseModalComponent', () => {
  let component: HorseModalComponent;
  let fixture: ComponentFixture<HorseModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorseModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HorseModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
