import { Injectable } from '@angular/core';
import { BaseHttpService } from './base-http.service';
import { Observable } from 'rxjs';
import { Product } from '../model/product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends BaseHttpService {
  private apiUrl = 'http://localhost:8080/api/product'; // Ensure this is correctly matched to Spring Boot

  constructor(protected override http: HttpClient) { 
    super(http, '/api/products'); // Ensure the base URL is correct
  }

  // Fetching products from the backend
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl); 
  }

  // Update product method (Optional if needed for product updates)
  updateProduct(id: number, product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.apiUrl}/${id}`, product);
  }
}
