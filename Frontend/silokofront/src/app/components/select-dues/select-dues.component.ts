import { Component, OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core';


@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-select-dues',
  templateUrl: './select-dues.component.html',
  styleUrls: ['./select-dues.component.scss']
})
export class SelectDuesComponent implements OnInit {

  @Output() newUpdateDues = new EventEmitter<number>();

  labelPosition: number;

  constructor() { }

  ngOnInit(): void {
  }

  sendDues(dues: number) {
    this.newUpdateDues.emit(dues);
  }

}
