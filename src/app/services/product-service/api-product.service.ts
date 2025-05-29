import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ApiProductService {

  //private apiUrl = 'http://localhost:8080/products';
  private apiUrl = 'https://unicosmet-back.onrender.com/products';
  constructor(private http: HttpClient) { }

  createProduct(product: any, image: File | null): Observable<any> {
    const formData = new FormData();
    formData.append('name', product.name);
    formData.append('description', product.description);
    formData.append('price', product.price);
    formData.append('stock', product.stock);
    formData.append('brand', product.brand);
    formData.append('category', product.category);
    if (image) {
      formData.append('image', image);

    } else {
      formData.append('image', new Blob(), 'defaul.jpg');
    }

    return this.http.post(this.apiUrl,formData);
  }


  // Obtener todos los productos
  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

  // Actualizar un usuario
  updateProduct(product: any, image: File | null): Observable<any> {
    const formData = new FormData();
    formData.append('name', product.name);
    formData.append('description', product.description);
    formData.append('price', product.price);
    formData.append('stock', product.stock);
    formData.append('brand', product.brand);
    formData.append('category', product.category);
    if (image) {
      formData.append('image', image);

    } else {
      formData.append('image', new Blob(), 'default.jpg');
    }


    return this.http.patch<any>(`${this.apiUrl}/${product.productId}`, formData);
  }


  // Método para eliminar un usuario
  deleteProduct(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`,{ observe: 'response' });
  }

    // Método para eliminar un usuario
  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }
}
