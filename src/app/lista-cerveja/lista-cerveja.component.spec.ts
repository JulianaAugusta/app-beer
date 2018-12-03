import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCervejaComponent } from './lista-cerveja.component';

describe('ListaCervejaComponent', () => {
  let component: ListaCervejaComponent;
  let fixture: ComponentFixture<ListaCervejaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaCervejaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCervejaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
