import { Component } from '@angular/core';


interface Product {
  id: number;
  name: string;
  sku: string;
  price: number;
  stock: number;
  image?: string;
}

interface StatCard {
  title: string;
  value: string | number;
  icon: string;
  color: string;
}

@Component({
  selector: 'app-user-board',
  standalone: false,
  templateUrl: './user-board.component.html',
  styleUrl: './user-board.component.css'
})
export class UserBoardComponent {
username: string = 'Usuario';
  searchTerm: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 5;



  stats: StatCard[] = [
    { title: 'Productos', value: 24, icon: 'bi-box-seam', color: 'primary' },
    { title: 'Ventas', value: '$1,240', icon: 'bi-currency-dollar', color: 'success' },
    { title: 'Clientes', value: 56, icon: 'bi-people', color: 'warning' }
  ];

  products: Product[] = [
    { id: 1, name: 'Zapatos deportivos', sku: 'SKU-001', price: 59.99, stock: 45, image: 'https://via.placeholder.com/40' },
    { id: 2, name: 'Camiseta básica', sku: 'SKU-002', price: 19.99, stock: 120, image: 'https://via.placeholder.com/40' },
    { id: 3, name: 'Reloj inteligente', sku: 'SKU-003', price: 129.99, stock: 0, image: 'https://via.placeholder.com/40' },
    { id: 4, name: 'Audífonos inalámbricos', sku: 'SKU-004', price: 89.99, stock: 32, image: 'https://via.placeholder.com/40' },
    { id: 5, name: 'Mochila para laptop', sku: 'SKU-005', price: 49.99, stock: 18, image: 'https://via.placeholder.com/40' }
  ];

  filteredProducts: Product[] = [];

  ngOnInit(): void {


    // Obtener el nombre de usuario del servicio de autenticación o localStorage
    const storedName = localStorage.getItem('userName');
    if (storedName) {
      this.username = storedName;
    }

    this.filterProducts();

  }

  filterProducts(): void {
    this.filteredProducts = this.products.filter(product =>
      product.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      product.sku.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    this.currentPage = 1;
  }

  get totalPages(): number {
    return Math.ceil(this.filteredProducts.length / this.itemsPerPage);
  }

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  get paginatedProducts(): Product[] {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredProducts.slice(start, start + this.itemsPerPage);
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  goToPage(page: number): void {
    this.currentPage = page;
  }

  openAddProduct(): void {
    // Lógica para abrir modal/formulario de nuevo producto
    console.log('Abrir formulario para nuevo producto');
  }

  openSettings(): void {
    // Lógica para abrir configuración
    console.log('Abrir configuración');
  }

  editProduct(product: Product): void {
    // Lógica para editar producto
    console.log('Editar producto:', product);
  }

  deleteProduct(productId: number): void {
    // Lógica para eliminar producto
    this.products = this.products.filter(p => p.id !== productId);
    this.filterProducts();
  }
}
