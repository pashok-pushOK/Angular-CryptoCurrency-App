import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoItemPageComponent } from './crypto-item-page.component';

describe('CryptoItemPageComponent', () => {
  let component: CryptoItemPageComponent;
  let fixture: ComponentFixture<CryptoItemPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CryptoItemPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptoItemPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
