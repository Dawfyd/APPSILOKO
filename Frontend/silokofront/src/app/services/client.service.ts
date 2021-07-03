import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';


export interface Quota {
  id: number;
  cupoMaximo: number;
  cupoDisponible: number;
  estadoCupo: boolean;
}

export interface Client {
  id: number;
  cedulaCiudadania: string;
  nombre: string;
  apellido: string;
  pais: string;
  ciudad: string;
  estrato: number;
  cupo: Quota;
}

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private configUrl: string;

  constructor(private http: HttpClient) { }

  getClient(newItem?:string): Observable<Client> {
    this.configUrl = `${environment.silokoUrl}/clientes/${newItem}`;
    return this.http.get<Client>(this.configUrl);
  }
}
