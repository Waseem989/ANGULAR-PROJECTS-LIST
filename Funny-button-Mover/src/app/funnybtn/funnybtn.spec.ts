import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Funnybtn } from './funnybtn';

describe('Funnybtn', () => {
  let component: Funnybtn;
  let fixture: ComponentFixture<Funnybtn>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Funnybtn]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Funnybtn);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
