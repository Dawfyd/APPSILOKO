import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';

export interface QuotaDto {
  id: number;
  cupoMaximo: number;
  estadoCupo: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class QuotaService {
  private configUrl: string;

  constructor(private http: HttpClient) { }

  updateQuota(quotaDto:QuotaDto): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders(
      {
         'Authorization': 'Your Token',
         'Content-Type': 'application/json'
      })
  }
    this.configUrl = `${environment.silokoUrl}/cupos/update`;
    return this.http.put<any>(this.configUrl, quotaDto, httpOptions);
  }
  
}