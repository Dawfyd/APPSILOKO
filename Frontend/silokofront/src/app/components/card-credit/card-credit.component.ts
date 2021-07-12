import { Component, Input, OnInit } from '@angular/core';
import { Credit } from 'src/app/services/models/credit.interface';

@Component({
  selector: 'app-card-credit',
  templateUrl: './card-credit.component.html',
  styleUrls: ['./card-credit.component.scss']
})
export class CardCreditComponent implements OnInit {

  @Input() creditInput: Credit;
  titleLabel: string = "Código de Aprobación";
  stateInput: string = "";
  titleInput: string = "";
  priceInput: string = "";
  stateCredit: string = "#FFFFFF"
  productName: string = "";
  productDescription: string = "";
  productCode: string = "";
  productDate: Date;
  balanceInput: string = "";
  activeCredit: boolean = false;
  dateLabel: string = "Fecha de solicitud";
  constructor() { }

  ngOnInit() {
    this.stateInput = this.creditInput.estado;
    this.productName = this.creditInput.electrodomestico.nombre;
    this.productDescription = this.creditInput.electrodomestico.descripcion;
    this.productCode = this.creditInput.electrodomestico.codigoArticulo;
    this.priceInput = "$" + (this.creditInput.electrodomestico.precio).toLocaleString('de-DE');

    switch (this.creditInput.estado) {
      case "Rechazado": {
        this.titleLabel = "Causal de Rechazo";
        this.titleInput = this.creditInput.causal;
        this.stateCredit = "#9E2A2B";
        this.productDate = this.creditInput.fechaCreacion;
        break;
      }
      case "Aprobado": {

        this.titleInput = this.creditInput.codigoAprobacion;
        this.stateCredit = "#008000";
        this.productDate = this.creditInput.fechaCreacion;
        break;
      }
      case "Activo": {
        this.dateLabel = "Fecha de compra"
        this.titleInput = this.creditInput.codigoAprobacion;
        this.stateCredit = "#3F51B5";
        this.productDate = this.creditInput.fechaModificacion;
        this.balanceInput = "$" + (this.creditInput.saldoPendiente).toLocaleString('de-DE');
        this.activeCredit = true;
        break;
      }
      default: {
        this.titleInput = this.creditInput.codigoAprobacion;
        this.productDate = this.creditInput.fechaCreacion;
        break;
      }
    }
  }
}
