import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListarComentariosComponent } from './listar-datos-personales.component';



describe('ListarComentariosComponent', () => {
  let component: ListarComentariosComponent;
  let fixture: ComponentFixture<ListarComentariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarComentariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarComentariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
