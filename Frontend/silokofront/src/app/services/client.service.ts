import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { Client } from './models/client.interface';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private configUrl: string;

  constructor(private http: HttpClient) { }

  getClient(newItem?: string): Observable<Client> {
    this.configUrl = `${environment.silokoUrl}/clientes/${newItem}`;
    return this.http.get<Client>(this.configUrl);
  }
  getAllClient(): Observable<Client[]> {
    this.configUrl = `${environment.silokoUrl}/clientes`;
    return this.http.get<Client[]>(this.configUrl);
  }
}
