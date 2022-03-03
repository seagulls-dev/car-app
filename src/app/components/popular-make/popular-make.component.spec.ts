import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularMakeComponent } from './popular-make.component';

describe('PopularMakeComponent', () => {
  let component: PopularMakeComponent;
  let fixture: ComponentFixture<PopularMakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopularMakeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularMakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
