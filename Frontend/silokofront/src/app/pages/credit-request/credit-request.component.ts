import { Component, OnInit,ViewEncapsulation  } from '@angular/core';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-credit-request',
  templateUrl: './credit-request.component.html',
  styleUrls: ['./credit-request.component.scss']
})
export class CreditRequestComponent implements OnInit {

  loginTitle: string = "Solicitar Financiación de Electrodoméstico";
  user: string = "Cedula de Ciudadanía";
  password: string = "Código de Artículo ";
  button: string = "Solicitar";
  showPassword: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
