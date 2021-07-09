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
  //Metodo GET para obtener un cliente por su cedula de ciudadania
  getClient(identificationNumber?: string): Observable<Client> {
    this.configUrl = `${environment.silokoUrl}/clientes/${identificationNumber}`;
    return this.http.get<Client>(this.configUrl);
  }
  //Metodo GET para obtener todos los clientes
  getAllClient(): Observable<Client[]> {
    this.configUrl = `${environment.silokoUrl}/clientes`;
    return this.http.get<Client[]>(this.configUrl);
  }
}
