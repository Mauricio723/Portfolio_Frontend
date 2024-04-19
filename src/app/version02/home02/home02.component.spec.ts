import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home02Component } from './home02.component';

describe('Home02Component', () => {
  let component: Home02Component;
  let fixture: ComponentFixture<Home02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Home02Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Home02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
