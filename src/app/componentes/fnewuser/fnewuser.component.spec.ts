import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FnewuserComponent } from './fnewuser.component';

describe('FnewuserComponent', () => {
  let component: FnewuserComponent;
  let fixture: ComponentFixture<FnewuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FnewuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FnewuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
