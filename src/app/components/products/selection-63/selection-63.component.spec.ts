import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Selection63Component } from './selection-63.component';

describe('Selection63Component', () => {
  let component: Selection63Component;
  let fixture: ComponentFixture<Selection63Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Selection63Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Selection63Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
