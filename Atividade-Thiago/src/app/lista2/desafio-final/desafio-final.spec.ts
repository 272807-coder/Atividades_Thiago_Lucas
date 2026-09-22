import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesafioFinal } from './desafio-final';

describe('desafio-final', () => {
  let component: Ex15;
  let fixture: ComponentFixture<Ex15>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex15],
    }).compileComponents();

    fixture = TestBed.createComponent(Ex15);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});