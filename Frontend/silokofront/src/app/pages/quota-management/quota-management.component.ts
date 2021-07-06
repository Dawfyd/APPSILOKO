import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/services/models/client.interface';
import { ClientService } from 'src/app/services/client.service';
import { QuotaUpdateDto } from 'src/app/services/dto/quota-put.dto';
import { Quota } from 'src/app/services/models/quota.interface';
import { QuotaService } from 'src/app/services/quota.service';
import { FormInputsDto } from 'src/app/services/dto/form-inputs.dto';


@Component({
  selector: 'app-quota-management',
  templateUrl: './quota-management.component.html',
  styleUrls: ['./quota-management.component.scss']
})
export class QuotaManagementComponent implements OnInit {
  formTitle: string = "Consultar Cupo";
  documentLabel: string = "Cedula de Ciudadanía";
  button: string = "Consultar";
  showPassword: boolean = false;
  titleClient: string = "Cliente";
  namesClient: string = "Nombres";
  surnamesClient: string = "Apellidos";
  documentClient: string = "Cedula de ciudadanía";

  titleQuota: string = "Cupo";
  stateQuota: string = "Estado de cupo";
  totalQuota: string = "Cupo total";
  freeQuota: string = "Cupo disponible";
  namesClientInput: string = "";
  surnamesClientInput: string = "";
  documentClientInput: string = "";

  conditionCard: boolean = false;
  client: Client;
  quota: Quota;

  constructor(private clientService: ClientService, private quotaService: QuotaService) { }

  ngOnInit() {
  }

  updateSave(quotaUpdateDto: QuotaUpdateDto) {
    this.conditionCard = false;
    this.quotaService.updateQuota(quotaUpdateDto).subscribe((data: Quota) => {
      this.quota = {
        id: data.id,
        cupoDisponible: data.cupoDisponible,
        cupoMaximo: data.cupoMaximo,
        estadoCupo: data.estadoCupo
      }
      this.conditionCard = true;
    });
  }
  getClient(newData: FormInputsDto) {
    this.conditionCard = false;
    this.clientService.getClient(newData.firstValue).subscribe((data: Client) => {
      this.client = data[0];
      this.quota = this.client.cupo;
      this.namesClientInput = this.client.nombre;
      this.surnamesClientInput = this.client.apellido;
      this.documentClientInput = this.client.cedulaCiudadania;
      this.conditionCard = true;
    });
  }
}
