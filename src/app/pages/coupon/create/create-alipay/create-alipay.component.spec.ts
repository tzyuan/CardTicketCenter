import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAlipayComponent } from './create-alipay.component';

describe('CreateAlipayComponent', () => {
  let component: CreateAlipayComponent;
  let fixture: ComponentFixture<CreateAlipayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAlipayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAlipayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
