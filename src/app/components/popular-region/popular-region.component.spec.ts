import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularRegionComponent } from './popular-region.component';

describe('PopularRegionComponent', () => {
  let component: PopularRegionComponent;
  let fixture: ComponentFixture<PopularRegionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopularRegionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
