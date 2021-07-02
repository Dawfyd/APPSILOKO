import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quota-management',
  templateUrl: './quota-management.component.html',
  styleUrls: ['./quota-management.component.scss']
})
export class QuotaManagementComponent implements OnInit {
  formTitle: string = "Consultar Cupo";
  documentLabel: string = "Cedula de Ciudadanía";
  password: string = "";
  button: string = "Consultar";
  showPassword: boolean = false;

  titleClient: string = "Cliente";
  namesClient: string = "Nombres";
  surnamesClient: string = "Apellidos";
  documentClient: string = "Cedula de ciudadanía";
  namesClientInput: string = "Nikola";
  surnamesClientInput: string = "Tesla";
  documentClientInput: string = "11333666999";

  titleQuota: string = "Cupo";
  stateQuota: string = "Estado de cupo";
  totalQuota: string = "Cupo total";
  freeQuota: string = "Cupo disponible";
  stateQuotaInput: string = "Activo";
  totalQuotaInput: string = "$3.500.000";
  freeQuotaInput: string = "$2.000.000";

  constructor() { }

  ngOnInit(): void {
  }

}
