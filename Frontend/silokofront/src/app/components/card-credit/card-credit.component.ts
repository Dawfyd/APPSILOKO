import { Component, Input, OnInit } from '@angular/core';
import { Credit } from 'src/app/services/models/credit.interface';

@Component({
  selector: 'app-card-credit',
  templateUrl: './card-credit.component.html',
  styleUrls: ['./card-credit.component.scss']
})
export class CardCreditComponent implements OnInit  {

  @Input() creditInput: Credit;

  titleLabel: string = "";
  titleInput: string = "";
  priceInput: string = "";
  stateCredit: string;
  constructor() { }

  ngOnInit() {
    console.log("ngOnInit")
    this.priceInput = "$"+(this.creditInput.electrodomestico.precio).toLocaleString('de-DE');
    if(this.creditInput.estado === "Rechazado") {
      this.titleLabel = "Causal de Rechazo";
      this.titleInput = this.creditInput.causal;
      this.stateCredit = "#9E2A2B";
    } else {
      this.titleLabel = "Código de Aprobación";
      this.titleInput = this.creditInput.codigoAprobacion;
      this.stateCredit = "#008000";
    }

  }
}
