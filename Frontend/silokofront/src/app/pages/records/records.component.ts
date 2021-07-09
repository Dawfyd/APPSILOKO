import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { CreditService } from 'src/app/services/credit.service';
import { FormInputsDto } from 'src/app/services/dto/form-inputs.dto';
import { Client } from 'src/app/services/models/client.interface';
import { Credit } from 'src/app/services/models/credit.interface';
import { Quota } from 'src/app/services/models/quota.interface';
import Swal from 'sweetalert2';

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
    //Obtener cliente con la cédula de ciudadanía
    this.clientService.getClient(newData.firstValue).subscribe((data: Client) => {
      //Verificar que existe un cliente con la cédula de ciudadanía dada
      if (data[0] == null) {
        Swal.fire({
          title: "El cliente con el numero de cédula "+newData.firstValue + " no se encontro.",
          icon: 'error',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK!'
        })
      } else {
        //Se guarda el cliente
        this.client = data[0];
        this.quota = this.client.cupo;
        this.namesClientInput = this.client.nombre;
        this.surnamesClientInput = this.client.apellido;
        this.documentClientInput = this.client.cedulaCiudadania;
        //Obtener creditos con la foranea cupo_id
        this.creditService.getCredits(this.quota.id).subscribe((dataCredits: Credit[]) => {
          //Se guardan los creditos para mostrarlos
          this.credits = dataCredits;
          this.conditionCard = true;
        });
      }
    });
  }
}
