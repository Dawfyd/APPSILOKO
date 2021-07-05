import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-simple',
  templateUrl: './card-simple.component.html',
  styleUrls: ['./card-simple.component.scss']
})
export class CardSimpleComponent implements OnInit {

  @Input() titleCard: string = "";
  @Input() firstLabel: string = "";
  @Input() secondLabel: string = "";
  @Input() thirdLabel: string = "";

  @Input() firstInput: string = "";
  @Input() secondInput: string = "";
  @Input() thirdInput: string = "";



  ngOnInit(): void {}

}