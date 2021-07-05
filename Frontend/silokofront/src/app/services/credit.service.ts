import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CreditPostDto } from './dto/credit-post.dto';
import { Credit } from './models/credit.interface';

@Injectable({
  providedIn: 'root'
})
export class CreditService {
  private configUrl: string;

  constructor(private http: HttpClient) { }

  createCredit(creditPostDto:CreditPostDto): Observable<Credit> {
    this.configUrl = `${environment.silokoUrl}/creditos/add`;
    return this.http.post<Credit>(this.configUrl,creditPostDto );
  }
}
