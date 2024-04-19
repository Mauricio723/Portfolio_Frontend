import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocbaseComponent } from './docbase.component';

describe('DocbaseComponent', () => {
  let component: DocbaseComponent;
  let fixture: ComponentFixture<DocbaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocbaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocbaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
