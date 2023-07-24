import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionuserComponent } from './seccionuser.component';

describe('SeccionuserComponent', () => {
  let component: SeccionuserComponent;
  let fixture: ComponentFixture<SeccionuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccionuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
