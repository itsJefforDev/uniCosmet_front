import { Component } from '@angular/core';
import { ApiProductService } from '../../../services/product-service/api-product.service';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-create',
  standalone: false,
  templateUrl: './product-create.component.html',
  styleUrl: './product-create.component.css'
})
export class ProductCreateComponent {
  productForm: FormGroup;
  selectedImage: File | null = null;
  imagePreview: string | ArrayBuffer | null = null;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private apiProductService: ApiProductService
  ) {
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

  saveProduct(): void {
    if (this.productForm.invalid) {
      this.productForm.markAllAsTouched();
      Swal.fire({
        icon: 'error',
        title: 'Formulario incompleto',
        text: 'Por favor completa todos los campos requeridos correctamente',
        confirmButtonColor: '#3085d6'
      });
      return;
    }

    const productData = this.productForm.value;

    if (this.selectedImage) {
      this.createProduct(productData, this.selectedImage);
    } else {
      this.confirmSaveWithoutImage(productData);
    }
  }

  private createProduct(productData: any, imageFile: File | null): void {
    this.loading = true;
    this.apiProductService.createProduct(productData, imageFile).subscribe({
      next: () => {
        this.loading = false;
        Swal.fire({
          title: 'Éxito!',
          text: 'Producto registrado correctamente',
          icon: 'success',
          confirmButtonColor: '#3085d6'
        });
        this.resetForm();
      },
      error: (error) => {
        this.loading = false;
        console.error('Error al crear el producto', error);
        Swal.fire({
          title: 'Error!',
          text: 'Hubo un problema al registrar el producto',
          icon: 'error',
          confirmButtonColor: '#3085d6'
        });
      }
    });
  }

  private confirmSaveWithoutImage(productData: any): void {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'No seleccionaste una imagen, ¿deseas continuar?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, continuar',
      cancelButtonText: 'No, cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.createProduct(productData, null);
      }
    });
  }

  onImageSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      // Validar tipo de archivo
      if (!file.type.match('image.*')) {
        this.productForm.get('image')?.setErrors({ invalidType: true });
        return;
      }

      // Validar tamaño (ejemplo: máximo 2MB)
      if (file.size > 2097152) {
        this.productForm.get('image')?.setErrors({ maxSize: true });
        return;
      }

      this.selectedImage = file;
      this.productForm.patchValue({ image: file });
      this.productForm.get('image')?.updateValueAndValidity();

      // Mostrar vista previa
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

  private resetForm(): void {
    this.productForm.reset();
    this.selectedImage = null;
    this.imagePreview = null;
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
