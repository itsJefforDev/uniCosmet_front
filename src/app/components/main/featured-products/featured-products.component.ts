import { Component } from '@angular/core';

@Component({
  selector: 'app-featured-products',
  standalone: false,
  templateUrl: './featured-products.component.html',
  styleUrl: './featured-products.component.css'
})
export class FeaturedProductsComponent {
  products = [
    { name: 'Producto 1', description: 'Descripción breve del producto.', price: 25.00, rating: '⭐⭐⭐⭐☆', image: 'https://via.placeholder.com/300x200' },
    { name: 'Producto 2', description: 'Descripción breve del producto.', price: 30.00, rating: '⭐⭐⭐⭐⭐', image: 'https://via.placeholder.com/300x200' },
    { name: 'Producto 3', description: 'Descripción breve del producto.', price: 19.99, rating: '⭐⭐⭐⭐☆', image: 'https://via.placeholder.com/300x200' },
    { name: 'Producto 4', description: 'Descripción breve del producto.', price: 19.99, rating: '⭐⭐⭐⭐☆', image: 'https://via.placeholder.com/300x200' },
    { name: 'Producto 5', description: 'Descripción breve del producto.', price: 19.99, rating: '⭐⭐⭐⭐☆', image: 'https://via.placeholder.com/300x200' },
    { name: 'Producto 6', description: 'Descripción breve del producto.', price: 19.99, rating: '⭐⭐⭐⭐☆', image: 'https://via.placeholder.com/300x200' },
    { name: 'Producto 7', description: 'Descripción breve del producto.', price: 19.99, rating: '⭐⭐⭐⭐☆', image: 'https://via.placeholder.com/300x200' },
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
