import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeixintuisongPage } from './weixintuisong.page';

describe('WeixintuisongPage', () => {
  let component: WeixintuisongPage;
  let fixture: ComponentFixture<WeixintuisongPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeixintuisongPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeixintuisongPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
