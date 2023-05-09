import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaperComponent } from './nuevaper.component';

describe('NuevaperComponent', () => {
  let component: NuevaperComponent;
  let fixture: ComponentFixture<NuevaperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevaperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
