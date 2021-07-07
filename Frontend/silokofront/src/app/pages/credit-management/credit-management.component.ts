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
    this.clientService.getClient(newData.firstValue).subscribe((data: Client) => {
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
        this.creditService.getCreditByCode(newData.secondValue).subscribe((dataCredit: Credit) => {
          if (dataCredit == null) {
            Swal.fire({
              title: "El crédito con el código de aprobación " + newData.secondValue + " no se encontro.",
              icon: 'error',
              showCancelButton: false,
              confirmButtonColor: '#3085d6',
              confirmButtonText: 'OK!'
            })
          } else {
            if (this.client.cupo.id === dataCredit.cupo.id) {
              this.credit = dataCredit;
              this.quota = this.client.cupo;
              this.namesClientInput = this.client.nombre;
              this.surnamesClientInput = this.client.apellido;
              this.documentClientInput = this.client.cedulaCiudadania;
              this.conditionCard = true;
              if (this.credit.estado === "Aprobado") {
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
    })
  }
}
