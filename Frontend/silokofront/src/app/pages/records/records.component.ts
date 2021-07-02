import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.scss']
})
export class RecordsComponent implements OnInit {
  formTitle: string = "Consultar Créditos ";
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
  constructor() { }

  ngOnInit(): void {
  }

}
