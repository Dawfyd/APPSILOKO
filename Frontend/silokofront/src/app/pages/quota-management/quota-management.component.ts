import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Client } from 'src/app/services/models/client.interface';
import { ClientService } from 'src/app/services/client.service';
import { QuotaUpdateDto } from 'src/app/services/dto/quota-put.dto';
import { Quota } from 'src/app/services/models/quota.interface';
import { QuotaService } from 'src/app/services/quota.service';
import { FormInputsDto } from 'src/app/services/dto/form-inputs.dto';
import Swal from 'sweetalert2'

@Component({
  encapsulation: ViewEncapsulation.None,
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
    //Alerta para confirmar cambios
    Swal.fire({
      title: '¿Estas Seguro?',
      text: "¿Quieres guardar los cambios?",
      showCancelButton: true,
      confirmButtonColor: '#FCC12B',
      confirmButtonText: 'Si',
      cancelButtonColor: '#DFDFDF',
      cancelButtonText: 'No',
      reverseButtons: true,
      imageUrl: "/assets/icons/warning-alert.svg",
      imageWidth: "100px",
      imageHeight: "104px",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: 'success',
          title: 'Cupo actualizado con exito!',
          showConfirmButton: false,
          timer: 1000
        })
        this.conditionCard = false;
        //Se envia el DTO anteriormente mapeado a el servicio para que haga PUT de el cupo.
        this.quotaService.updateQuota(quotaUpdateDto).subscribe((data: Quota) => {
          //Se guarda el cupo actualizado para mostrarlo
          this.quota = {
            id: data.id,
            cupoDisponible: data.cupoDisponible,
            cupoMaximo: data.cupoMaximo,
            estadoCupo: data.estadoCupo
          }
          this.conditionCard = true;
        });
      }
    })

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
        //Se guardan datos de el cliente
        this.client = data[0];
        this.quota = this.client.cupo;
        this.namesClientInput = this.client.nombre;
        this.surnamesClientInput = this.client.apellido;
        this.documentClientInput = this.client.cedulaCiudadania;
        this.conditionCard = true;
      }

    });
  }
}
