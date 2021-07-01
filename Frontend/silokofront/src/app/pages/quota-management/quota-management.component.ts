import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quota-management',
  templateUrl: './quota-management.component.html',
  styleUrls: ['./quota-management.component.scss']
})
export class QuotaManagementComponent implements OnInit {
  loginTitle: string = "Consultar Cupo";
  user: string = "Cedula de Ciudadanía";
  password: string = "";
  button: string = "Consultar";
  showPassword: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
