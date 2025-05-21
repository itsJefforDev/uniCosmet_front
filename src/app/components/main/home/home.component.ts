import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  productos = [
    {
      nombre: 'Esmalte de uñas',
      precio: 24000 ,
      imagen: 'esmalte_rosa.jpg',
      descripcion: "Esmalte para uñas color rosa"
    },
    {
      nombre: 'Tinte para pelo',
      precio: 15000 ,
      imagen: 'tinte_rojo.jpg',
      descripcion: "tinte color rojo para el pelo"
    },
    {
      nombre: 'crema para peinar',
      precio: 36000 ,
      imagen: 'crema_peinar.jpg',
      descripcion: "Crema para peinar"
    },
    {
      nombre: 'shampoo',
      precio: 3000 ,
      imagen: 'shampoo.jpg',
      descripcion: "Shampoo para el pelo anticapa"
    },
    {
      nombre: 'keratina',
      precio: 700 ,
      imagen: 'keratina.jpg',
      descripcion: "keratina para que el pelo"
    },
    {
      nombre: 'Agua de rosas',
      precio: 3500 ,
      imagen: 'agua_rosas.jpg',
      descripcion: "Atomizador de agua con rosas"
    },
    {
      nombre: 'shampoo 3 en 1',
      precio: 17000 ,
      imagen: 'shampoo3n1.jpg',
      descripcion: "Shampoo 3 en 1"
    }
    ]
}
