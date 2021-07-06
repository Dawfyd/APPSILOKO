import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { CreditService } from 'src/app/services/credit.service';
import { CreditUpdateDto } from 'src/app/services/dto/credit-put.dto';
import { FormInputsDto } from 'src/app/services/dto/form-inputs.dto';
import { Client } from 'src/app/services/models/client.interface';
import { Credit } from 'src/app/services/models/credit.interface';
import { Quota } from 'src/app/services/models/quota.interface';

@Component({
  selector: 'app-credit-management',
  templateUrl: './credit-management.component.html',
  styleUrls: ['./credit-management.component.scss']
})
export class CreditManagementComponent implements OnInit {
  showMenuHeader: boolean = false;
  loginTitle: string = "Consultar Financiación de Electrodoméstico";
  documentLabel: string = "Cedula de Ciudadanía";
  codeLabel: string = "Código de Aprobación";
  button: string = "Consultar";

  titleClient: string = "Cliente";
  namesClient: string = "Nombres";
  surnamesClient: string = "Apellidos";
  documentClient: string = "Cedula de ciudadanía";

  namesClientInput: string = "";
  surnamesClientInput: string = "";
  documentClientInput: string = "";
  conditionCard: boolean = false;
  conditionSelect: boolean = true;
  enableUpdate: boolean = false;
  quota: Quota;
  client: Client;
  credit: Credit;
  creditUpdateDto: CreditUpdateDto;

  constructor(private clientService: ClientService, private creditService: CreditService) { }

  ngOnInit(): void {
  }
  getClient(newData: FormInputsDto) {
    this.conditionCard = false;
    this.conditionSelect = false;
    this.clientService.getClient(newData.firstValue).subscribe((data: Client) => {
      this.client = data[0];
      console.log("cliente", data[0]);

      this.creditService.getCreditByCode(newData.secondValue).subscribe((dataCredit: Credit) => {
        console.log("credito", dataCredit);

        if (this.client.cupo.id === dataCredit.cupo.id) {
          this.credit = dataCredit;
          this.quota = this.client.cupo;
          this.namesClientInput = this.client.nombre;
          this.surnamesClientInput = this.client.apellido;
          this.documentClientInput = this.client.cedulaCiudadania;

          this.conditionCard = true;
          console.log("entro al if1");
          if (this.credit.estado === "Aprobado") {
            this.enableUpdate = true;
            this.conditionSelect = true;
            console.log("entro al if2");
          } else {
            this.conditionSelect = false;
          }
        } else {
          this.enableUpdate = false;
          this.conditionCard = false;
          console.log("entro al else");
        }
      });

    });
  }
  updateDues(dues: number) {
    if (this.enableUpdate == true) {
      this.conditionCard = false;
      this.creditUpdateDto = {
        id: this.credit.id,
        numeroCuotas: dues,
        estado: "Activo",
      }
      this.creditService.updateCredit(this.creditUpdateDto).subscribe((dataCreditUpdated: Credit) => {
        this.credit = dataCreditUpdated;
        console.log("Actualizado", dataCreditUpdated);
        this.conditionCard = true;
        this.conditionSelect = false;
        this.enableUpdate = false;

      });
    }

  }

}
