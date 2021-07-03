import { Component, Input, OnInit, Output, EventEmitter  } from '@angular/core';


@Component({
  selector: 'app-card-quota',
  templateUrl: './card-quota.component.html',
  styleUrls: ['./card-quota.component.scss']
})
export class CardQuotaComponent implements OnInit {

  @Output() saveQuota = new EventEmitter<string>();
  @Output() updateCard = new EventEmitter<boolean>();
  @Output() updateState = new EventEmitter<boolean>();
  @Input() titleCard: string = "";
  @Input() firstLabel: string = "";
  @Input() secondLabel: string = "";
  @Input() thirdLabel: string = "";
  @Input() firstInput: string = "";
  @Input() secondInput: number = 0;
  @Input() thirdInput: string = "";

  secondInputFormat: string = "";
  checked: boolean;
  disabled = false;
  constructor() { }

  ngOnInit(): void {
    this.secondInputFormat = "$"+(this.secondInput).toLocaleString('de-DE');
    if (this.firstInput === "Activo") {
      this.checked = true;
    } else {
      this.checked = false;
    }
  }
  updateSave(value: string) {
    this.saveQuota.emit(value);
    this.updateCard.emit(true);
    this.updateState.emit(this.checked);
    this.secondInputFormat = "$"+(this.secondInput).toLocaleString('de-DE');
  }
}
