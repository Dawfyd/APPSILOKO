import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { CreditService } from 'src/app/services/credit.service';
import { FormInputsDto } from 'src/app/services/dto/form-inputs.dto';
import { Client } from 'src/app/services/models/client.interface';
import { Credit } from 'src/app/services/models/credit.interface';
import { Quota } from 'src/app/services/models/quota.interface';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.scss']
})
export class RecordsComponent implements OnInit {
  formTitle: string = "Consultar Créditos ";
  documentLabel: string = "Cedula de Ciudadanía";
  button: string = "Consultar";
  showPassword: boolean = false;
  titleClient: string = "Cliente";
  namesClient: string = "Nombres";
  surnamesClient: string = "Apellidos";
  documentClient: string = "Cedula de ciudadanía";
  namesClientInput: string = "";
  surnamesClientInput: string = "";
  documentClientInput: string = "";
  conditionCard: boolean = false;
  client: Client;
  quota: Quota;
  credits: Array<Credit>;

  constructor(private clientService: ClientService, private creditService: CreditService) { }

  ngOnInit(): void {
  }
  getClient(newData: FormInputsDto) {
    this.conditionCard = false;
    this.clientService.getClient(newData.firstValue).subscribe((data: Client) => {
      this.client = data[0];
      this.quota = this.client.cupo;
      this.namesClientInput = this.client.nombre;
      this.surnamesClientInput = this.client.apellido;
      this.documentClientInput = this.client.cedulaCiudadania;
      this.creditService.getCredits(this.quota.id).subscribe((dataCredits: Credit[]) => {
        this.credits = dataCredits;
        this.conditionCard = true;
      });
    });
  }
}
