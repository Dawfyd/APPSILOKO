import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-header-main',
  templateUrl: './header-main.component.html',
  styleUrls: ['./header-main.component.scss']
})
export class HeaderMainComponent {
  @Input() showMenu: boolean = true;

  constructor(private authService: AuthService) {}

  deleteToken(){
    this.authService.deleteToken();
  }
}
