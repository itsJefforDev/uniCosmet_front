import { Component } from '@angular/core';

@Component({
  selector: 'app-featured-products',
  standalone: false,
  templateUrl: './featured-products.component.html',
  styleUrl: './featured-products.component.css'
})
export class FeaturedProductsComponent {
  products = [
    { name: 'Agua rosas', description: 'Para tu piel', price: 25.00, rating: '⭐⭐⭐⭐☆', image: './agua_rosas.jpg' },
    { name: 'Crema para peinar', description: 'Crema para peinar', price: 30.00, rating: '⭐⭐⭐⭐⭐', image: './crema_peinar.jpg' },
    { name: 'keratina', description: 'keratina para que el pelo', price: 19.99, rating: '⭐⭐⭐⭐☆', image: './keratina.jpg' },
    { name: 'shampoo', description: 'Shampoo para el pelo anticapa', price: 19.99, rating: '⭐⭐⭐⭐☆', image: './shampoo.jpg' },
    { name: 'shampoo 3 en 1', description: 'shampoo 3 en 1', price: 19.99, rating: '⭐⭐⭐⭐☆', image: './shampoo3n1.jpg' },
    { name: 'Tinte para pelo', description: 'tinte color rojo para el pelo', price: 15.000, rating: '⭐⭐⭐⭐☆', image: './tinte_rojo.jpg' },
    { name: 'Delineador', description: 'Excelente para tus ojos', price: 19.99, rating: '⭐⭐⭐⭐☆', image: './assets/img/delinealier.jpg' },
    // más productos
  ];

  scrollProducts(direction: number) {
    const carousel = document.getElementById('productCarousel');
    const scrollAmount = 320;
    if (carousel) {
      carousel.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
    }
  }
}
