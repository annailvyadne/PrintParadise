import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseHttpService } from './base-http.service';

@Injectable({
  providedIn: 'root'
})
export class MenuService extends BaseHttpService {

  constructor(protected override http: HttpClient) { 
    super(http, '/api/menu')
  }
}
