import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Listmaker } from './listmaker';

describe('Listmaker', () => {
  let component: Listmaker;
  let fixture: ComponentFixture<Listmaker>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Listmaker]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Listmaker);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
