import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateB2bComponent } from './create-b2b.component';

describe('CreateB2bComponent', () => {
  let component: CreateB2bComponent;
  let fixture: ComponentFixture<CreateB2bComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateB2bComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateB2bComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
