import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { QuotaUpdateDto } from './dto/quota-put.dto';
import { Quota } from './models/quota.interface';

@Injectable({
  providedIn: 'root'
})
export class QuotaService {
  private configUrl: string;

  constructor(private http: HttpClient) { }

  updateQuota(quotaUpdateDto:QuotaUpdateDto): Observable<Quota> {
    const httpOptions = {
      options: {responseType: 'text'},
      headers: new HttpHeaders(
      {
         'Content-Type': 'application/json'
      })
  }
    this.configUrl = `${environment.silokoUrl}/cupos/update`;
    return this.http.put<Quota>(this.configUrl, quotaUpdateDto, httpOptions);
  }
}