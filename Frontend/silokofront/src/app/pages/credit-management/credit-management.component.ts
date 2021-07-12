import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { CreditService } from 'src/app/services/credit.service';
import { CreditUpdateDto } from 'src/app/services/dto/credit-put.dto';
import { FormInputsDto } from 'src/app/services/dto/form-inputs.dto';
import { Client } from 'src/app/services/models/client.interface';
import { Credit } from 'src/app/services/models/credit.interface';
import { Quota } from 'src/app/services/models/quota.interface';
import Swal from 'sweetalert2';

@Component({
  encapsulation: ViewEncapsulation.None,
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
    //Obtener cliente con la cédula de ciudadanía
    this.clientService.getClient(newData.firstValue).subscribe((data: Client) => {
      //Verificar que existe un cliente con la cédula de ciudadanía dada
      if (data[0] == null) {
        Swal.fire({
          title: "El cliente con el numero de cédula " + newData.firstValue + " no se encontro.",
          icon: 'error',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK!'
        })
      } else {
        this.client = data[0];
        //Obtener credito con el codigo de aprobacion
        this.creditService.getCreditByCode(newData.secondValue).subscribe((dataCredit: Credit) => {
          //Verificar que existe un credito con el codigo de aprobacion dado
          if (dataCredit == null) {
            Swal.fire({
              title: "El crédito con el código de aprobación " + newData.secondValue + " no se encontro.",
              icon: 'error',
              showCancelButton: false,
              confirmButtonColor: '#3085d6',
              confirmButtonText: 'OK!'
            })
          } else {
            //Verificar que el credito y el cliente tengan el mismo cupo asociado
            if (this.client.cupo.id === dataCredit.cupo.id) {
              this.credit = dataCredit;
              this.quota = this.client.cupo;
              this.namesClientInput = this.client.nombre;
              this.surnamesClientInput = this.client.apellido;
              this.documentClientInput = this.client.cedulaCiudadania;
              this.conditionCard = true;
              //Verificar si el credito esta aprobado (Solo se permite actualizar creditos aprobados)
              if (this.credit.estado === "Aprobado") {
                // enableUpdate en true, permite que el metodo que actualiza, se ejecute.
                this.enableUpdate = true;
                this.conditionSelect = true;
              } else {
                this.conditionSelect = false;
              }
            } else {
              this.enableUpdate = false;
              this.conditionCard = false;
              Swal.fire({
                title: "El crédito con el código de aprobación " + newData.secondValue + " no corresponde a el cliente.",
                icon: 'error',
                showCancelButton: false,
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'OK!'
              })
            }
          }
        }
        );
      }
    });
  }
  updateDues(dues: number) {
    //Alerta de confirmacion
    Swal.fire({
      title: '¿Estas Seguro?',
      text: "¿Quieres realizar la compra?",
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
          title: 'Compra realizada con exito!',
          showConfirmButton: false,
          timer: 1000
        })
        //Verificar que el credito que sera actualizado, esta habilitado para ser actualizado (credito aprobado)
        if (this.enableUpdate == true) {
          this.conditionCard = false;
          this.creditUpdateDto = {
            id: this.credit.id,
            numeroCuotas: dues,
            estado: "Activo",
          }
          //Se envia el DTO anteriormente mapeado a el servicio para que haga PUT de el credito.
          this.creditService.updateCredit(this.creditUpdateDto).subscribe((dataCreditUpdated: Credit) => {
            //Se guarda el credito actualizado para mostrarlo
            this.credit = dataCreditUpdated;
            this.conditionCard = true;
            this.conditionSelect = false;
            this.enableUpdate = false;

          });
        }
      }
    })
  }
}
