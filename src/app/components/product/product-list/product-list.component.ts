import { Component } from '@angular/core';
import { ApiProductService } from '../../../services/product-service/api-product.service';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
   productForm: FormGroup;
  product: any[] = [];
  selectedProduct: any = {};
  selectedImage: File | null = null;
  
  categoryFilter: string = '';
  filteredProducts: any[] = [];
  productIdFilter: string = "";
  nameFilter: string = '';
  base64Image: string | null = null;

  constructor(private fb: FormBuilder, private apiProductService: ApiProductService) {
     this.productForm = this.fb.group({
      name: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(100)
      ]],
      description: ['', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(500)
      ]],
      price: ['', [
        Validators.required,
        Validators.min(0.01),
        Validators.max(50000)
      ]],
      stock: ['', [
        Validators.required,
        Validators.min(0),
        Validators.max(1000)
      ]],
      brand: ['', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50)
      ]],
      category: ['', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50)
      ]],
      image: [null, [
        Validators.required]]
    });
  }

  ngOnInit(): void {
    this.getProducts();
     
  }



  getProducts(): void {
    this.apiProductService.getProducts().subscribe(
      (data) => {
        this.product = data;
        this.filteredProducts = [...data];
      },
      (error) => {
        console.error('Error al obtener productos', error);
        Swal.fire('Error', 'No se pudieron cargar los productos', 'error');
      }
    );
  }

  getUniqueCategories(): string[] {
    const categories = this.product.map(p => p.category);
    return [...new Set(categories)].filter(c => c).sort();
  }

  applyFilters(): void {
    this.filteredProducts = this.product.filter(product => {
      const matchesProductId = product.productId?.toString().includes(this.productIdFilter.toLowerCase() ?? '');
      const matchesName = product.name?.toLowerCase().includes(this.nameFilter.toLowerCase() ?? '');
      const matchesCategory = product.category?.toLowerCase().includes(this.categoryFilter.toLowerCase() ?? '');
      return matchesProductId && matchesName && matchesCategory;
    });
  }

  newProduct(): void {
    this.selectedProduct = {};
    this.selectedImage = null;
    this.base64Image = null;
    this.openModal();
  }

  editProduct(product: any): void {
    this.selectedProduct = { ...product };
    this.selectedImage = null;
    this.base64Image = null;
    this.openModal();
  }

  openModal(): void {
    const modalElement = document.getElementById('editProductModal');
    const modal = new (window as any).bootstrap.Modal(modalElement);
    modal.show();
  }



  deleteProduct(id: number): void {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "Esta acción no se puede deshacer",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        this.apiProductService.deleteProduct(id).subscribe({
          next: () => {
            this.getProducts();
            Swal.fire('Eliminado', 'El producto ha sido eliminado', 'success');
          },
          error: (error) => {
            console.error('Error al eliminar producto', error);
            Swal.fire('Error', 'No se pudo eliminar el producto', 'error');
          }
        });
      }
    });
  }

  saveProduct(): void {
    if (!this.selectedProduct.name || !this.selectedProduct.price || !this.selectedProduct.stock) {
      Swal.fire('Error', 'Por favor complete los campos requeridos', 'error');
      return;
    }

    const operation = this.selectedProduct.productId ? 
      this.apiProductService.updateProduct(this.selectedProduct, this.selectedImage) :
      this.apiProductService.createProduct(this.selectedProduct, this.selectedImage);

    operation.subscribe({
      next: () => {
        this.getProducts();
        const modalElement = document.getElementById('editProductModal');
        const modal = new (window as any).bootstrap.Modal(modalElement);
        modal.hide();
        Swal.fire('Éxito', 'Producto guardado correctamente', 'success');
      },
      error: (error) => {
        console.error('Error al guardar producto', error);
        Swal.fire('Error', 'Hubo un problema al guardar el producto', 'error');
      }
    });
  }

  onImageSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      if (!file.type.match('image.*')) {
        Swal.fire('Error', 'Solo se permiten archivos de imagen', 'error');
        return;
      }

      if (file.size > 2097152) {
        Swal.fire('Error', 'El tamaño máximo permitido es 2MB', 'error');
        return;
      }

      this.selectedImage = file;

      const reader = new FileReader();
      reader.onload = () => {
        this.base64Image = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

    // Getters para acceder fácilmente a los controles del formulario
  get name() { return this.productForm.get('name'); }
  get description() { return this.productForm.get('description'); }
  get price() { return this.productForm.get('price'); }
  get stock() { return this.productForm.get('stock'); }
  get brand() { return this.productForm.get('brand'); }
  get category() { return this.productForm.get('category'); }
  get image() { return this.productForm.get('image'); }


}
