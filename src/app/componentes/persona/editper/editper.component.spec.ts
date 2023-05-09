import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditperComponent } from './editper.component';

describe('EditperComponent', () => {
  let component: EditperComponent;
  let fixture: ComponentFixture<EditperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
