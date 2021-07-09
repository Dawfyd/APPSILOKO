import { AfterViewInit, Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ClientService } from 'src/app/services/client.service';
import { ClientDataDto } from 'src/app/services/dto/client-data.dto';
import { Client } from 'src/app/services/models/client.interface';


@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-table-clients',
  templateUrl: './table-clients.component.html',
  styleUrls: ['./table-clients.component.scss']
})
export class TableClientsComponent implements AfterViewInit {

  displayedColumns: string[] = ['cedulaCiudadania', 'nombre', 'apellido', 'cupoMaximo', 'cupoDisponible', 'estadoCupo'];
  dataSource: MatTableDataSource<ClientDataDto>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  clientDataDto: ClientDataDto;
  clientDataArray: Array<ClientDataDto> = [];
  client: Array<Client>;
  estadoCupoString: string;

  constructor(private clientService: ClientService) {
    this.dataSource = new MatTableDataSource();
  }

  ngAfterViewInit() {
    //Obtener todos los clientes
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

      this.dataSource = new MatTableDataSource(this.clientDataArray);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
