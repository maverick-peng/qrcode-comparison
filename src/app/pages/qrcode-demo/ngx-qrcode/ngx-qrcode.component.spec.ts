import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxQrcodeComponent } from './ngx-qrcode.component';

describe('NgxQrcodeComponent', () => {
  let component: NgxQrcodeComponent;
  let fixture: ComponentFixture<NgxQrcodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxQrcodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxQrcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
