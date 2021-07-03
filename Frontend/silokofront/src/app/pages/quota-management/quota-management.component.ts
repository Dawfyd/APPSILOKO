import { Component, OnInit } from '@angular/core';
import { Client, ClientService } from 'src/app/services/client.service';
import { QuotaService } from 'src/app/services/quota.service';

export interface QuotaUpdateDto {
  id: number;
  cupoMaximo: number;
  estadoCupo: boolean;
}
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

  namesClientInput: string = "";
  surnamesClientInput: string = "";
  documentClientInput: string = "";

  titleQuota: string = "Cupo";
  stateQuota: string = "Estado de cupo";
  totalQuota: string = "Cupo total";
  freeQuota: string = "Cupo disponible";

  stateQuotaInput: string = ""
  totalQuotaInput: string = "";
  totalQuotaInputFormat: number = 0;
  freeQuotaInput: string = "";
  quotaState: boolean;
  conditionCard: boolean = true;
  client: Client;
  spresp: any;
  constructor(private clientService: ClientService, private quotaService: QuotaService) { }

  ngOnInit() {
  }

  updateOn(){
    this.conditionCard = false;
  }

    cardChange(setCard: boolean){
    this.conditionCard = setCard;
  }
  stateChange(setStatus: boolean){
     this.quotaState = setStatus;

    if (setStatus=== true) {
      this.stateQuotaInput = "Activo"
    } else {
      this.stateQuotaInput = "Bloqueado"
    }
    console.log("setstatus: "+setStatus);
  }
  async updateSave(updateQuota: number){

    let quotaDto : QuotaUpdateDto;
    quotaDto = {
      id: this.client.id,
      cupoMaximo: updateQuota,
      estadoCupo: this.client.cupo.estadoCupo
    }
    //quotaDto.cupoMaximo = updateQuota;
    //quotaDto.estadoCupo = this.quotaState;
    //quotaDto.id = this.client.id;
    console.log("setCupo: "+ JSON.stringify(quotaDto));
    this.quotaService.updateQuota(quotaDto).subscribe(data => this.spresp = data.id);
    console.log("resp: "+ this.spresp);
    this.getClient(this.client.cedulaCiudadania);

  }




  getClient(newItem: string) {
    this.clientService.getClient(newItem).subscribe((data: Client) => {
      console.log('subscribe client', data[0]);
      this.client = data[0];
      this.namesClientInput = this.client.nombre;
      this.surnamesClientInput = this.client.apellido;
      this.documentClientInput = this.client.cedulaCiudadania;
      this.totalQuotaInputFormat = this.client.cupo.cupoMaximo;
      this.totalQuotaInput = "$"+(this.client.cupo.cupoMaximo).toLocaleString('de-DE');
      this.freeQuotaInput = "$"+(this.client.cupo.cupoDisponible).toLocaleString('de-DE');
      this.quotaState = this.client.cupo.estadoCupo;
      if (this.client.cupo.estadoCupo === true) {
        this.stateQuotaInput = "Activo"
      } else {
        this.stateQuotaInput = "Bloqueado"
      }
    });
  }
}
