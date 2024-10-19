import { Injectable } from '@angular/core';
import { BaseHttpService } from './base-http.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService extends BaseHttpService{

  constructor(protected override http: HttpClient) { 
    super(http, '/api/cart')
  }
}
