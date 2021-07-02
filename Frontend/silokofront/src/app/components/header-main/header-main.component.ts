import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-header-main',
  templateUrl: './header-main.component.html',
  styleUrls: ['./header-main.component.scss']
})
export class HeaderMainComponent {
  @Input() showMenu: boolean = true;
}
