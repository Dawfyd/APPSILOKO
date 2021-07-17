import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { ClientDataDto } from 'src/app/services/dto/client-data.dto';
import { MassiveProcessDto } from 'src/app/services/dto/massive-process.dto';
import { Client } from 'src/app/services/models/client.interface';
import { QuotaService } from 'src/app/services/quota.service';
import Swal from 'sweetalert2';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  conditionCard: boolean = true;
  massiveProcessDto: MassiveProcessDto;
  clientDataArray: Array<ClientDataDto> = [];
  clientDataDto: ClientDataDto;
  client: Array<Client>;
  estadoCupoString: string;
  constructor(private quotaService: QuotaService, private clientService: ClientService) { }

  ngOnInit() {
    this.conditionCard = false;
    this.clientService.getAllClient().subscribe((data: Client[]) => {
      this.client = data;
      //For para mapear los clientes y sus cupos a un DTO sin anidamiento para el dataSource
      for (let index = 0; index < data.length; index++) {
        if (this.client[index].cupo.estadoCupo === true) {
          this.estadoCupoString = "Activo"
        } else {
          this.estadoCupoString = "Bloqueado"
        }
        this.clientDataDto = {
          cedulaCiudadania: this.client[index].cedulaCiudadania,
          nombre: this.client[index].nombre,
          apellido: this.client[index].apellido,
          cupoMaximo: (this.client[index].cupo.cupoMaximo),
          cupoDisponible: (this.client[index].cupo.cupoDisponible),
          estadoCupo: this.estadoCupoString,
        }
        this.clientDataArray.push(this.clientDataDto);

      }
      this.conditionCard = true;
    });

  }
  runProcess() {
    Swal.fire({
      title: '¿Estas Seguro?',
      text: "¿Quieres asignar automáticamente el cupo total a todos los clientes?",
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
        this.conditionCard = false;
        //Ejecutar proceso masivo
        this.quotaService.runMassiveProcess().subscribe((data: MassiveProcessDto) => {
          this.massiveProcessDto = data;
          this.conditionCard = true;
        });
        Swal.fire({
          icon: 'success',
          title: 'Proceso masivo exitoso!',
          showConfirmButton: false,
          timer: 1000
        })

      }
    })

  }
}
