import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChamatkarComponent } from './chamatkar.component';

describe('ChamatkarComponent', () => {
  let component: ChamatkarComponent;
  let fixture: ComponentFixture<ChamatkarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChamatkarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChamatkarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
