import { Component } from '@angular/core';

@Component({
  selector: 'app-face-products',
  standalone: false,
  templateUrl: './face-products.component.html',
  styleUrl: './face-products.component.css'
})
export class FaceProductsComponent {
    products = [
    { name: 'Labial colors', description: 'rosado', price: 25.00, rating: '⭐⭐⭐⭐☆', image: './assets/img/makeup/lipstick1.jpg' },
    { name: 'Labial premiun', description: 'Rojo', price: 30.00, rating: '⭐⭐⭐⭐⭐', image: './assets/img/makeup/lipstick2.jpg' },
    { name: 'Pinta labios', description: 'labial mate', price: 19.99, rating: '⭐⭐⭐⭐☆', image: './assets/img/makeup/lipstick3.jpg' },
    { name: 'Paquete labiales', description: '4 labiales', price: 19.99, rating: '⭐⭐⭐⭐☆', image: './assets/img/makeup/packlipstick.jpg' },
    // más productos
  ];

  scrollProducts(direction: number) {
    const carousel = document.getElementById('productCarouselFace');
    const scrollAmount = 320;
    if (carousel) {
      carousel.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
    }
  }
}
