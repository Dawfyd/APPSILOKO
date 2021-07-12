import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { QuotaUpdateDto } from './dto/quota-put.dto';
import { Quota } from './models/quota.interface';
import { MassiveProcessDto } from './dto/massive-process.dto';


@Injectable({
  providedIn: 'root'
})
export class QuotaService {
  private configUrl: string;

  constructor(private http: HttpClient) { }
  //Metodo PUT para actualizar un cupo
  updateQuota(quotaUpdateDto: QuotaUpdateDto): Observable<Quota> {
    this.configUrl = `${environment.silokoUrl}/cupos/update`;
    return this.http.put<Quota>(this.configUrl, quotaUpdateDto);
  }
  //Metodo POST para ejecutar el proceso masivo
  runMassiveProcess(): Observable<MassiveProcessDto> {
    this.configUrl = `${environment.silokoUrl}/cupos/asignar`;
    return this.http.post<MassiveProcessDto>(this.configUrl, {});
  }
}