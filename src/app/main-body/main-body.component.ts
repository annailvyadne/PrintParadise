import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductCategory } from '../model/product-category';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.css']
})
export class MainBodyComponent implements OnInit  {
      public productsCategory: ProductCategory[]  = [];
 
        constructor(private productService: ProductService) {
      
/*        this.productsCategory =  
        [
          {
            "categoryName": "Snacks",
            "products":   
            [             
              {
                "id": 1,
                "name": "Alaska",
                "description" : "This is a description of Alaska",
                "categoryName":  "Snack",
                "unitOfMeasure": "can",
                "imageFile": "Alaska",
                "price": "30.00"
              },
              {
                "id": 2,
                "name": "Cardbury",
                "description" : "This is a description of Cardbury",
                "categoryName":  "Snacks",
                "unitOfMeasure": "ounce",
                "imageFile": "cardbury",
                "price": "10.00"
              },
              {
                "id": 3,
                "name": "Milo",
                "description" : "This is a description of Milo",
                "unitOfMeasure": "can",
                "categoryName":  "Snacks",
                "imageFile": "milo",
                "price": "120.00"
              }
            ]
          },
          {
            "categoryName": "Audio",
            "products":   
            [             
              {
                "id":4,
                "name": "denonreceiver",
                "description" : "This is a description of Denon receiver",
                "unitOfMeasure": "piece",
                "imageFile": "denonreceiver",
                "categoryName":  "Audio",
                "price": "1420.00"
              },
              {
                "id": 5,
                "name": "Mango",
                "description" : "This is a description of Mango",
                "unitOfMeasure": "piece",
                "imageFile": "mango",
                "categoryName":  "Audio",
                "price": "0.00"
              },
              {
                "id": 6,
                "name": "soundar",
                "description" : "This is a description of the Sound bar",
                "unitOfMeasure": "piece",
                "imageFile": "soundbar",
                "categoryName":  "Audio",          
                "price": "30.00"
              },
              {
                "id": 6,
                "name": "soundar2",
                "description" : "This is a description of another soundbar",
                "categoryName":  "AUdio",
                "imageFile": "soundar2",
                "unitOfMeasure": "piece",
                "price": "350.00"
              }
            ]
          },
          {
            "categoryName": "Dessert",
            "products":   
            [             
              {
                "id":4,
                "name": "banana",
                "description" : "This is a description of banana",
                "categoryName":  "Audio",
                "imageFile": "banana",
                "unitOfMeasure": "kilo",
                "price": "20.00"
              },
              {
                "id": 5,
                "name": "Banana Split",
                "description" : "This is a description of banana split ice cream",
                "categoryName":  "Audio",
                "imageFile": "bananasplit",
                "unitOfMeasure": "serving",
                "price": "220.00"
              },
              {
                "id": 6,
                "name": "Leo Milka",
                "description" : "This is a description of Leo Milka",
                "categoryName":  "Audio",
                "imageFile": "leomilka",
                "unitOfMeasure": "grams",
                "price": "620.00"
              },
              {
                "id": 6,
                "name": "Strawberry",
                "description" : "This is a description of Strawberry",
                "categoryName":  "AUdio",
                "imageFile": "strawberry",
                "unitOfMeasure": "grams",
                "price": "10.00"
              }
            ]
          }
        ]; */
      }
    ngOnInit(): void {
      console.log("ngOnInit called");
      this.productService.getData().subscribe(data => {this.productsCategory = data; });
    }
  }
