import { Component, OnInit,ViewEncapsulation  } from '@angular/core';
import { ClientService, Client } from 'src/app/services/client.service';

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

  client: Client;

  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.getClient();
  }

  getClient() {
    this.clientService.getClient().subscribe((data: Client) => {
      console.log('subscribe client', data);
      this.client = data;
    });
  }
}
