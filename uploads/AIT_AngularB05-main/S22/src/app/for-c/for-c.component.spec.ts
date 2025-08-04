import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForCComponent } from './for-c.component';

describe('ForCComponent', () => {
  let component: ForCComponent;
  let fixture: ComponentFixture<ForCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForCComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
