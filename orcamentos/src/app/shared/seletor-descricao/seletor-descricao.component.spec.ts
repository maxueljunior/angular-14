import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeletorDescricaoComponent } from './seletor-descricao.component';

describe('SeletorDescricaoComponent', () => {
  let component: SeletorDescricaoComponent;
  let fixture: ComponentFixture<SeletorDescricaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeletorDescricaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeletorDescricaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
