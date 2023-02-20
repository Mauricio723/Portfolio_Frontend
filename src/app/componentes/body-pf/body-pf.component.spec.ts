import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyPfComponent } from './body-pf.component';

describe('BodyPfComponent', () => {
  let component: BodyPfComponent;
  let fixture: ComponentFixture<BodyPfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyPfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyPfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
