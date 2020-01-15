import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateWxComponent } from './create-wx.component';

describe('CreateWxComponent', () => {
  let component: CreateWxComponent;
  let fixture: ComponentFixture<CreateWxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateWxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateWxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
