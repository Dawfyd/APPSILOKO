import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-credit-management',
  templateUrl: './credit-management.component.html',
  styleUrls: ['./credit-management.component.scss']
})
export class CreditManagementComponent implements OnInit {
  showMenuHeader: boolean = false;
  loginTitle: string = "Consultar Financiación de Electrodoméstico";
  user: string = "Cedula de Ciudadanía";
  password: string = "Código de Aprobación";
  button: string = "Consultar";

  titleClient: string = "Cliente";
  namesClient: string = "Nombres";
  surnamesClient: string = "Apellidos";
  documentClient: string = "Cedula de ciudadanía";
  namesClientInput: string = "Nikola";
  surnamesClientInput: string = "Tesla";
  documentClientInput: string = "11333666999";
  constructor() { }

  ngOnInit(): void {
  }

}
