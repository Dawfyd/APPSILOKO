import { Component, OnInit, ViewEncapsulation } from '@angular/core';



@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-select-dues',
  templateUrl: './select-dues.component.html',
  styleUrls: ['./select-dues.component.scss']
})
export class SelectDuesComponent implements OnInit {
  labelPosition: number;

  constructor() { }

  ngOnInit(): void {
  }

}
