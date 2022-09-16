import { Component, OnInit } from '@angular/core';
import { Comentario } from 'src/app/interfaces/Comentarios';

@Component({
  selector: 'app-listar-comentarios',
  templateUrl: './listar-comentarios.component.html',
  styleUrls: ['./listar-comentarios.component.css']
})
export class ListarComentariosComponent implements OnInit {

  listComentarios: Comentario[] = [
    {
      titulo: 'CyberSecurity',
      autor: 'Jorge Collazos',
      fechaCreacion: new Date(),
      texto: 'Este es un comentario'
    },
    {
      titulo: 'Angular developer',
      autor: 'Jenifer',
      fechaCreacion: new Date(),
      texto: 'Este es un comentario'
    },
    {
      titulo: 'Base de datos',
      autor: 'Juan perdomo',
      fechaCreacion: new Date(),
      texto: 'Este es un comentario'
    },
    {
      titulo: 'Programación avanzada',
      autor: 'Estiven Gonzales',
      fechaCreacion: new Date(),
      texto: 'Este es un comentario'
    },
    {
      titulo: 'Desarrollo web',
      autor: 'Christian Moreno',
      fechaCreacion: new Date(),
      texto: 'Este es un comentario'
    }

  ]


  constructor() { }

  ngOnInit(): void {
  }

}
