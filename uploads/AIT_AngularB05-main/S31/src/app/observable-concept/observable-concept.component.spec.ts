import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableConceptComponent } from './observable-concept.component';

describe('ObservableConceptComponent', () => {
  let component: ObservableConceptComponent;
  let fixture: ComponentFixture<ObservableConceptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObservableConceptComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObservableConceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
