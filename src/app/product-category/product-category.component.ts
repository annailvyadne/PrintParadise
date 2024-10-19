import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductCategory } from '../model/product-category';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent implements OnInit {
  public productsCategory: ProductCategory[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    console.log("ngOnInit called");

    // Fetch products from the service
    this.productService.getProducts().subscribe(
      products => {
        console.log("Products received from service:", products);  // Check output

        // Group products by category
        const categories: { [key: string]: ProductCategory } = {};
        
        products.forEach(product => {
          if (!categories[product.categoryName]) {
            categories[product.categoryName] = {
              categoryName: product.categoryName,
              products: []
            };
          }
          categories[product.categoryName].products.push(product);
        });

        // Convert categories object to an array for display
        this.productsCategory = Object.values(categories);
        console.log("Products categorized:", this.productsCategory);  // Log categorized products
      },
      error => {
        console.error("Error fetching products:", error);  // Log any errors
      }
    );
  }
}
