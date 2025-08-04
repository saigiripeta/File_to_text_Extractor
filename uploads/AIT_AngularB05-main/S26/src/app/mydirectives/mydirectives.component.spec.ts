import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MydirectivesComponent } from './mydirectives.component';

describe('MydirectivesComponent', () => {
  let component: MydirectivesComponent;
  let fixture: ComponentFixture<MydirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MydirectivesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MydirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
