import { AfterViewInit, Component, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ClientDataDto } from 'src/app/services/dto/client-data.dto';

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
  @Input() clientDataArray: Array<ClientDataDto> = [];
  conditionTable: boolean = true;

  constructor() {}

  ngAfterViewInit() {

    this.dataSource = new MatTableDataSource(this.clientDataArray);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.conditionTable = false;
    this.conditionTable = true;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
