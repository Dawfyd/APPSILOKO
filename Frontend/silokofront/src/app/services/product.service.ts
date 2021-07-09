import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from './models/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private configUrl: string;

  constructor(private http: HttpClient) { }
  //Metodo GET para obtener un electrodomestico
  getProduct(codeProduct: string): Observable<Product> {
    this.configUrl = `${environment.silokoUrl}/electrodomesticos/code/${codeProduct}`;
    return this.http.get<Product>(this.configUrl);
  }
}
