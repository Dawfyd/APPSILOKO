import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { QuotaUpdateDto } from 'src/app/services/dto/quota-put.dto';
import { Quota } from 'src/app/services/models/quota.interface';


@Component({
  selector: 'app-card-quota',
  templateUrl: './card-quota.component.html',
  styleUrls: ['./card-quota.component.scss'],
})
export class CardQuotaComponent implements OnInit {
  titleCard: string = "Cupo";
  firstLabel: string = "Estado de cupo";
  secondLabel: string = "Cupo total";
  thirdLabel: string = "Cupo disponible";
  checked: boolean;
  disabled = false;
  secondInputFormat: string = "";
  conditionCard: boolean = true;

  @Output() saveQuota = new EventEmitter<QuotaUpdateDto>();
  @Input() quotaInput: Quota;
  firstInput: string = "";
  colorStatus: string = "#FFFFFF";
  secondInput: number = 0;
  thirdInput: string = "";

  constructor() { }

  ngOnInit() {
    this.secondInput = this.quotaInput.cupoMaximo;
    this.secondInputFormat = "$" + (this.quotaInput.cupoMaximo).toLocaleString('de-DE');
    this.thirdInput = "$" + (this.quotaInput.cupoDisponible).toLocaleString('de-DE');
    this.checked = this.quotaInput.estadoCupo;
    if (this.quotaInput.estadoCupo === true) {
      this.firstInput = "Activo";
      this.colorStatus = "#008000";
    } else {
      this.firstInput = "Bloqueado";
      this.colorStatus = "#9E2A2B";
    }
  }
  updateCard() {
    let quotaUpdateDto: QuotaUpdateDto;
    quotaUpdateDto = {
      id: this.quotaInput.id,
      cupoMaximo: this.secondInput,
      estadoCupo: this.checked,
    }
    this.saveQuota.emit(quotaUpdateDto);
    this.conditionCard = true;

  }
  updateOn() {
    this.conditionCard = false;
  }
}
