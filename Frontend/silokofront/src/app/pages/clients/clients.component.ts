import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MassiveProcessDto } from 'src/app/services/dto/massive-process.dto';
import { QuotaService } from 'src/app/services/quota.service';
import Swal from 'sweetalert2';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  conditionCard: boolean = false;
  massiveProcessDto: MassiveProcessDto;
  constructor(private quotaService: QuotaService) { }

  ngOnInit() {
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
