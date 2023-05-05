import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciopfComponent } from './iniciopf.component';

describe('IniciopfComponent', () => {
  let component: IniciopfComponent;
  let fixture: ComponentFixture<IniciopfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IniciopfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IniciopfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
